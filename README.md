# MonitUr-time

Welcome to our Google Extension!
Our goal is to help you better monitor your time spent on various websites and provide insights towards optimizing the time in your day.

## Inspiration
As university students, we need to cognizant of how we spend our time, in order to optimize the little time we have. We wanted to create a chrome extension that holds us accountable with visuals of where we are spending our time throughout the day.

## What it does
MonitorUR Time is a chrome extension with the purpose of tracking your daily Chrome activity. Measurements like toxonomy, how long you spend on each website, and your most popular websites are all tracked in the background which we can view using a simple popup. 

## How we built it
We used HTML for the extension's popup, and JavaScript to interact with our Chrome extension through our background file. We were able to gather the URL of the tab a user was currently active on, and manipulate this string to extract the company name. By gathering the time step of each interaction, we were also able to calculate how long the user spends on each tab. 

## Challenges we ran into
The main challenge we ran into was understanding how to interact with our chrome extension using the manifest.json file, and how to implement the functionality we wanted for our project. Additionally, it was our first time building a chrome extension, and we underestimated how long it would take us to understand the components of development and implementation. 

# Accomplishments and Takeaways that we are proud of
We are proud that we were able to submit a working product in under 36 hours. We learned a lot about chrome extensions, Javascript and HTML. 

#What's next for MonitUR Time
We would like to develop the front-end UI as well as our data storing method. Additionally, we want to analyze time trends over the week/month/year and provide more detailed insights. We would like to explore what times of day we visit different websites to get a better idea of our habits.
