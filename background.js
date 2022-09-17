let colour = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ colour });
  //console.log('Default background colour set to %cgreen', 'color: ${colour}');
});

chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  function (tabs) {
    var tabURL = tabs[0].url;
    console.log(tabURL);
  }
);





function clear() {
  return new Promise((resolve) => {
      chrome.storage.local.get(data => {
          chrome.storage.local.remove(Object.keys(data), resolve)
      })
  })
}