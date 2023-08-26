---
author: Otohits Webmaster
title: "How to use clicks"
date: 2023-08-26
tags:
    - Guide
---

Clicks is one of the most powerful features available on Otohits. It helps you set up a "real" navigation on your website.

To use it correctly, there are few things to know that we will talk about in this article.

## Making sure your link is compatible

* Clicks feature does not work on every website and can't be used to click on specific part of it.
* Clicks will only work on internal links of a website. As an example, if your website is `http://mysite.com`, clicks will only work on links that stay on the same domain (`http://mysite.com/page1`, `http://mysite.com/page2` ...).
* Clicks will only work on links that use the href tag

```
<a href="http://mysite.com/page1">page 1</a>
```
* It will not work on links that use javascript to redirect

```
<a href="redirectToPage1();">page 1</a>
```

* Finally, considering the points above, clicks can't be used to click on ads.

## Things to consider before activating the clicks

Every click will navigate on a page on your link. The timer of the link will be shared for all the pages visited. As an example, if you set the timer to 30 seconds on your link and set 1 click, the total time of the visit will be 30 seconds, but the time on each page will be 15 seconds (15 seconds for the landing page + click + 15 seconds for the second page).

To prevent too quick navigation, a minimum waiting time of 8 seconds is here to make sure that every page is seen.

## Setting up the Clicks

When you're sure your link can work with clicks, it's time to set them up.

![Active clicks](/img/guides/clicks_1.png)

You can do it with the Actions button on the "My Sites" page, or by going to the details page of your link.

Here are the settings available:

* Clicks number: You will need to set up the minimum and maximum clicks you want. Minimum is 1 and maximum is 5.
  * If you set 1 at the minimum and 5 at the maximum, the engine will choose a random number of clicks between 1 and 5 to execute for each visit.
  * If you set 5 at the minimum and 5 at the maximum, 5 clicks will be executed for each visit.

* Clicks chance: You can set a percentage of chance that the clicks will be executed. Points cost are only taken if clicks are executed.
  * With a chance of 100, every visit will execute clicks
  * With a change of 50, half of the visits will execute clicks

* Minimum waiting time: You can set the minimum time that the Application will stay on every page visited thanks to the clicks.

Clicks are very dependent on the timer. A minimum of 30 seconds is usually required to be able to set 1 click.

![Clicks setup](/img/guides/clicks_2.png)

If something is wrong on your setup, an error message should appear.

If everything is OK, the Update button should be clickable to save your settings.