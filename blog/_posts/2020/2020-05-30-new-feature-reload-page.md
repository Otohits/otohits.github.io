---
author: Otohits Webmaster
title: "New feature: Page reload"
date: 2020-05-30
tags:
    - Feature
    - Reload
    - Advanced settings
    - Guide
---

## Say hello to page reload

*Page reload* is the first new feature that has been implemented in the new [v5 application](./2020-04-26-Application-v5.md). When activated on your links, it will simply "reload" the current page.

**This feature is marked as *experimental*** for the moment due to the fact that there are still some old applications running. Good news though, as it's experimental, it's totally free for the moment and won't cost you any extra point!

## Why reloading?

A visit with only one page displayed will likely result in increasing the bounce rate and a session time of 0. The main goal of the reload option is to produce a "session".
Reloading the page will result in navigating a second time to the same page, so in total, there will be 2 pages visited on the same session.

The reload action will be exactly the same as clicking the refresh button of your browser or pressing F5. It is not simulated and will reload the current visited page.

## How to activate page reload on your link

Go to the details page of your link. You will find the reload options at the end of the advanced options.

![Links advanced options](/img/blog/2020/reload/your-link-advanced-options.png)

The reload is configured by 2 options:

* The reload activation chance: percentage of chance that a reload will be activated (between 0 and 100). 0 = no reload. 100 = reload will always be triggered when someone visits your link.
* Reload page after: you can choose the time when the reload will happen (between 20 and 600 seconds). Make sure you let enough room for the page to load (see recommendations at the end of the article).

![Reload link icons](/img/blog/2020/reload/reload-options.png)

Once you click the update button, reload will be active on your link. You can quickly see which links have the reload activated with the following icons on your "my sites" page:

![Reload link icons](/img/blog/2020/reload/link-reload-icons.png)

## How to activate on multiple links

You can also activate the option on multiple links at once by going in the *Actions* menu after selecting multiple links.

![Actions edit reload](/img/blog/2020/reload/actions-edit-reload.png)

![Actions edit reload modal](/img/blog/2020/reload/actions-edit-reload-modal.png)

The reload option can also be saved in templates and applied to your links when adding them on Otohits.

## How to use it properly

* Please note that the reload won't be effective on older applications. For the moment, this will result in a lower number of executions compared to the percentage of chance you will input.
* Do not put a value higher than your maximum Timer. The reload will never be triggered.
* If you have a link that has a 60 seconds Timer, do not put the *reload page after* to 60. Try to let some margin and consider the loading time of your page after the reload. A good value will likely be between 30 and 45 seconds.
* You should be extra careful while using the *reload page* and *[clicks](https://www.otohits.net/article/content/How-to-use-the-clicks)* at the same time. *clicks* are triggered randomly. If a click triggers and the page is still refreshing, this click will be lost.
