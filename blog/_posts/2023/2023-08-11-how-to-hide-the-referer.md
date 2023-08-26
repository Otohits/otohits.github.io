---
author: Otohits Webmaster
title: "How to hide the referer"
date: 2023-08-11
tags:
    - Guide
---

## What is the referrer?

The referrer identifies the webpage that the previous request come from. As an example, if I go to google to look for something, then I click on the result `http://mysite.com`, `mysite.com` will be able to know that I come from google.

You can test it yourself: go to [https://anonymiz.com/myreferer](https://anonymiz.com/myreferer) directly (by typing the url in your browser). You will see that it can't find any referrer, because you enter the url directly in your browser.

## Why it matters on autosurfs?

The referrer is often use by advertisement companies and most of the time, they don't like to see that the traffic of your website come from an autosurf.

## How to manage the visibility of the referrer on Otohits?

Back when Otohits proposed an autosurf system directly in the browser, `Hide the referer` was an optional feature that came with an additional cost in points. This was using some tricks to avoid having Otohits being displayed as the referer.

When the Application came out, it was decided that having no referer (direct visit) will be the default. Any new link added on your account will be automaticaly set to have no referer.

![Hide the referer action](/img/guides/hide_ref_1.png)

Instead of direct visits, you can also [add custom referers for your links](./2023-08-12-how-to-override-the-referer.md).