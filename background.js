function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

let colour = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ colour });
  //console.log('Default background colour set to %cgreen', 'color: ${colour}');
  getCurrentDomain();
});

/* chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ colour });
  //console.log('Default background colour set to %cgreen', 'color: ${colour}');
}); */

function getCurrentDomain() {

  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      var tabURL = tabs[0].url;
      console.log(tabURL);
      var today = new Date();
      // var time = today.getHours() + ':' + today.getMinutes();       Currently shows 22:5, not 22:05
      // console.log(time);                                            Also we need to add dates
      console.log(today);                            //                using this just to print to console
    }
  );

  setCurrentDomain();
}

async function setCurrentDomain() {

  // chrome.tabs.onActivated.addListener(() => {
    console.log("Iteration");
    await new Promise(resolve => setTimeout(resolve, 3000)); // 1000 = 1 second
    getCurrentDomain();
  // });

}

// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab[0].url;
// }

// chrome.tabs.onUpdated.addListener(async function () {
//   console.log('TAB UPDATED');
//   let url = await getTab();
//   console.log(url);
// });

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
