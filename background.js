function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function siteToOrg(url) {
  var url = url.replace("http://", "").replace("https://", "").replace("www.", "");
  url = url.charAt(0).toUpperCase() + url.substring(1);

  var i = 0;
  while (true) {
    if (url.slice(i, i + 1) == "/") {
      url = url.substring(0, i);
      break;
    }
    i++;
  }

  for (j = url.length; j > 0; j--) {
    if (url.slice(j, j + 1) == '.') {
      url = url.substring(0, j);
      break;
    }
  }

  return url;

}



let colour = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ colour });
  //console.log('Default background colour set to %cgreen', 'color: ${colour}');
  getCurrentDomain();
});



function getCurrentDomain() {

  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      var tabURL = tabs[0].url;
      console.log(tabURL);
      
      
      console.log(siteToOrg(tabURL));            // PRINTS SITE

      var today = new Date();
      console.log(today);
    }
  );

  setCurrentDomain();
}

async function setCurrentDomain() {

  // chrome.tabs.onActivated.addListener(() => {
  console.log("\n");
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1000 = 1 second
  getCurrentDomain();
  // });

}


