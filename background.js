let colour = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ colour });
  //console.log('Default background colour set to %cgreen', 'color: ${colour}');
});


async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab[0].url;;
}

chrome.runtime.onInstalled.addListener(async () => {
  console.log(getCurrentTab());
});


function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function view() {
  browser.storage.local.get();
  gettingItem.then(onGot, onError);
}


function clear() {
  browser.storage.local.clear()
}