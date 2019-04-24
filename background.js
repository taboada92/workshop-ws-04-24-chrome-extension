chrome.browserAction.setBadgeText({ text: 'OFF' });

var enable=false;
chrome.storage.sync.set({"enable": enable});

chrome.browserAction.onClicked.addListener((tab) => {
    enable = !enable;
    if (enable) {
        chrome.browserAction.setBadgeText({text: 'ON'});
        chrome.tabs.executeScript(null, { file: 'content.js'});
    } else {
        chrome.browserAction.setBadgeText({ text: 'OFF'});
        chrome.tabs.executeScript(tab.id, {code: 'window.location.reload();'});
    }
    chrome.storage.sync.set({"enable": enable});
})