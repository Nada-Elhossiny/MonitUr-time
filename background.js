import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://monitur-time-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);



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
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes();
    console.log(time);
    console.log(today);
  }
);

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
