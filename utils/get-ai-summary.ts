import { Actions } from "~components/caption"
import askAI from "~utils/askAI"
import getMeetingCaptions from '~utils/getCaptions';

const getAiSummary = async (question: string) => {
    const recordedContents = await getMeetingCaptions();
    return askAI(Actions.ASK, JSON.stringify(recordedContents), question);
};

export default getAiSummary;
