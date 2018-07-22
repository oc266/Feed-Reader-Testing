# Feed Reader Testing Project

This project is part of Udacity's Front End Nanodegree Scholarship.
Given a web-based application that reads RSS feeds, a collection of test suites has been created using [Jasmine](http://jasmine.github.io/) to ensure that the application runs as desired and to protect the application during any future development.

## Installing from source

1. Clone the following repo:
 * git clone https://github.com/oc266/Feed-Reader-Testing
2. Open the file index.html in your browser.
3. See the tests do their thing.

## What the tests do
* There are four test suites as follows:
1. The first suite tests the RSS feeds definitions provided and contains three specs to ensure that:
 * a variable containing the feeds has been defined and is non-empty
 * each feed that has been defined has a non-empty URL
 * each feed that has been defined has a non-empty name
2. The second suite tests the menu and contains two specs to ensure that:
 * the menu is hidden by default
 * the menu toggles visibility on clicking the menu icon
3. The third suite contains one spec which ensures that once the function to load the feed has been called there is at least one entry in the feed
4. The fourth suite contains one spec which ensures that when the function to load feeds is called to load a new feed that the content actually changes


## Built with the help of:
* Starter code provided by Udacity (https://github.com/udacity/frontend-nanodegree-feedreader)

## Author
* Oliver Critchifled
