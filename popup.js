document.addEventListener('DOMContentLoaded', () => {
  // 加载已保存的内容
  loadContent();

  // 清除按钮事件
  document.getElementById('clearBtn').addEventListener('click', clearContent);
});

function loadContent() {
  chrome.storage.local.get('recordedContents', (data) => {
    const contentList = document.getElementById('content-list');
    contentList.innerHTML = '';

    if (data.recordedContents && data.recordedContents.length > 0) {
      data.recordedContents.forEach(item => {
        const div = document.createElement('div');
        div.className = 'content-item';
        div.innerHTML = `
                    <div>${item.content}</div>
                    <div class="timestamp">${new Date(item.timestamp).toLocaleString()}</div>
                `;
        contentList.appendChild(div);
      });
    } else {
      contentList.innerHTML = '<p>暂无记录</p>';
    }
  });
}

function clearContent() {
  chrome.storage.local.set({ 'recordedContents': [] }, () => {
    loadContent();
  });
}

// 监听来自content script的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'contentUpdated') {
    loadContent();
  }
});
