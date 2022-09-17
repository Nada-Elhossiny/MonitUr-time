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
    chrome.storage.local.set({ urlList: tabURL }, () => {
      console.log('the url is: ' + urlList);
    });
    console.log('urlList');
  }
);

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab[0].url;
}

chrome.tabs.onUpdated.addListener(async function () {
  console.log('TAB UPDATED');
  let url = await getTab();
  console.log(url);
});

// function onGot(item) {
//   console.log(item);
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// function view() {
//   browser.storage.local.get();
//   gettingItem.then(onGot, onError);
// }

// function clear() {
//   browser.storage.local.clear()
// }
