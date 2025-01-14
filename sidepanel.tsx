import React, {useEffect, useState} from "react";
import useTranscripts from "~hooks/useTranscripts";
import CaptionList from "~components/captionList";
import {Menu, type MenuProps, Affix, FloatButton, Button, Empty, message} from "antd";
import {
    FileDoneOutlined, FileWordOutlined,
    HistoryOutlined, LoadingOutlined, SketchOutlined,
} from '~node_modules/@ant-design/icons';

import './all.scss';
import Summary from "~components/summary";
import googleAITools from '~utils/google-AI';
import Extension from "~components/extension";
import {Spin} from "~node_modules/antd";
import useLoading from "~hooks/useLoading";
import Words from "~components/words";

const SidePanel = () => {
    const [speakers, setSpeakers] = useState([]);
    const [filterSpeaker, setFilterSpeakers] = useState([]);
    const [transcripts] = useTranscripts();
    const [messageApi, contextHolder] = message.useMessage();
    const [current, setCurrent] = useState('captions');
    const [loading] = useLoading();
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            label: 'Captions',
            key: 'captions',
            icon: <HistoryOutlined />,
        },
        {
            label: 'Summary',
            key: 'summary',
            icon: <FileDoneOutlined />,
            disabled: false,
        },
        {
            label: 'Extension',
            key: 'extension',
            icon: <SketchOutlined />,
            disabled: false,
        },
        // {
        //     label: 'Words',
        //     key: 'wordslog',
        //     icon: <FileWordOutlined />,
        //     disabled: true,
        // },
    ];

    useEffect(() => {
        const speakers = [...new Set(transcripts.map((item) => item.activeSpeaker))] ;
        setSpeakers(speakers);
    }, [transcripts]);

    useEffect(() => {
        const updateApiKey = (request) => {
            if (request.type === 'apiKeyUpdated') {
                googleAITools.init();
            }
        }
        chrome.runtime.onMessage.addListener(updateApiKey);
        return () => {
            chrome.runtime.onMessage.removeListener(updateApiKey);
        }
    },[])

    useEffect(() => {
        window.addEventListener('ajax-error', (e) => {
            const errorMsg = e.detail.error;
            console.log('ajax-error', errorMsg);
            let message = '';
            try {
                message = errorMsg.errorDetails[1].message;
            } catch (e) {
                message = JSON.stringify(errorMsg);
            }
            messageApi.open({
                type: 'error',
                content: message,
            });
        });
    }, []);

    const getTranscripts = () => {
        if (filterSpeaker.length === 0) {return transcripts;}
        console.log('filterSpeaker', filterSpeaker);
        return transcripts.filter((v) => {
            return filterSpeaker.includes(v.activeSpeaker)
        });
    }

    const toggleSpeaker = (speaker: string) => {
        if (filterSpeaker.includes(speaker)) {
            setFilterSpeakers(filterSpeaker.filter((v) => v !== speaker));
        } else {
            setFilterSpeakers([...filterSpeaker, speaker]);
        }
    }
    const data = getTranscripts();
    const isNoData = data.length === 0;
    const showCaptions = (current === 'captions');
    return (
        <div className={'side-panel'}>
            {contextHolder}
            <div className="loading">
                <Spin spinning={loading} indicator={<LoadingOutlined spin />} size="large" />
            </div>
            <Affix>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
            </Affix>
            {current === 'captions' && (
                <div className="header">
                    <div className="filter-speakers">
                        {speakers.length > 0 && "filter:"}
                        {speakers.map((speaker) => (
                            <Button color="default" variant={filterSpeaker.includes(speaker) ? 'solid' : 'outlined'} size={'small'} onClick={() => {toggleSpeaker(speaker)}} key={speaker}>
                                {speaker}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
            {showCaptions && (
                <div className={`chat-container ${isNoData ? 'no-data' : ''}`}>
                    {data.length > 0 ? (
                        <CaptionList listData={data}/>
                    ) : (
                        <Empty></Empty>
                    )}
                </div>
            )}
             <Summary show={current === 'summary'}/>

            {current === 'extension' && (
                <Extension />
            )}

            {current === 'wordslog' && (
                <Words />
            )}
            <FloatButton.BackTop visibilityHeight={300}/>

        </div>
    );
};

export default SidePanel
