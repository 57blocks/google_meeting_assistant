import {useEffect, useState} from "react";
import type {Captions} from "~node_modules/google-meeting-captions-resolver";

export type Transcript = Captions & {timestamp: number};

const useTranscripts = () : [Transcript[], React.Dispatch<React.SetStateAction<Transcript[]>>] => {
    const [transcripts, setTranscripts] = useState([]);

    useEffect(() => {
        const loadContent = () => {
            chrome.storage.local.get('recordedContents', (data) => {
                if (data.recordedContents) {
                    setTranscripts(data.recordedContents);
                }
            });
        };


        // 设置消息监听器
        const messageListener = (message, sender, sendResponse) => {
            const {type, action} = message;
            if (type === 'contentUpdated') {
                loadContent();
            }
            if (action === 'clear') {
                loadContent();
            }
        };

        chrome.runtime.onMessage.addListener(messageListener);
        loadContent();

        return () => {
            console.error('popup unmounted');
            chrome.runtime.onMessage.removeListener(messageListener);
        };
    }, []);

    return [transcripts, setTranscripts]
};

export default useTranscripts;
