let previousContent = '';
let recordedContents = [];
const googleMeetCaptionsClassName = '.uYs2ee';

const getCaptionsContainer = () => document.querySelector(googleMeetCaptionsClassName);
const getWhoIsSpeaking = () => getCaptionsContainer().childNodes?.[0]?.childNodes[0];
const getSpeakContent = () => getCaptionsContainer().childNodes?.[0]?.childNodes[1];
// 创建内容观察器
const observer = new MutationObserver((mutations) => {
  const targetElement = getCaptionsContainer();


  const currentContent = getSpeakContent()?.textContent;
  if (currentContent !== previousContent) {
    // 记录新内容
    recordedContents.push({
      content: currentContent,
      timestamp: new Date().toISOString()
    });

    // 保存到Chrome存储
    chrome.storage.local.set({
      'recordedContents': recordedContents
    });

    // 更新前一次内容
    previousContent = currentContent;

    // 发送消息到popup
    chrome.runtime.sendMessage({
      type: 'contentUpdated',
      content: currentContent
    });
  }
});

// 开始观察
function startObserving(targetElement) {
  console.warn('startObserving');
  if (targetElement) {
    observer.observe(targetElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  } else {
    console.error('can not locate the target element');
  }
}

const waitForObserving = () => {
  const targetElement = document.querySelector(googleMeetCaptionsClassName);
  if (targetElement) {
    startObserving(targetElement);
  } else {
    setTimeout(waitForObserving, 1000);
  }
}
// 页面加载完成后开始观察
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', waitForObserving);
} else {
  waitForObserving();
}
