---
author: Otohits Webmaster
title: "Efficiency system update"
date: 2020-10-03
tags:
    - System
    - Ratio
---

## Goodbye efficiency

When Otohits was created, the ratio was `1:1`, meaning that for each second you visit a website, you earned 1 point. To keep a balance on the platform and avoid inflation (points value decrease), some basic modifiers were introduced to make this ratio varies. The chosen name to express this ratio was `efficiency` and was visible on your [monitoring page](https://www.otohits.net/account/wfautosurf).

This part raised a lot of concerns, especially why the efficiency was always at 90% max and not 100%. Also, the more the time passes, the less some parts were making sense, like the penalty for having a high number of active links, or the fact that your entire efficiency can be impacted by only one bad App instance.

So, we decided to update the system to improve this part, you will find all the explanation below.

## Hello ratio

First and most important change, we won't use the term 'efficiency' anymore and will stick to the `ratio` system that is usually used on other platforms. This will avoid confusion of why 100% is not achievable.

Also, the ratio is not linked to your account anymore, but will be calculated for every running App you have.

Here are some key points that will explain the ratio you will see on your monitoring page:

* The base ratio for everyone will remain at `0.9:1` for the moment.
* Modifiers for categories you surf on will remain the same. If you have PTP links for example, you should also surf on them. If not, your ratio will decrease.
* Apps are regularly monitored to see if they are running fine. If visits are not executed properly over a certain period (very slow connection, bad proxy usage, filtering), your ratio can be impacted and will decrease.
* As stated in [the article of the new v5 app](./2020-04-26-Application-v5.md), we want to retire old App versions (v3 and Definitive edition). To push people toward the v5, surfing with an old version will decrease the ratio.

## Bringing a more flexible and fair system

Updating the ratio system was not an easy part, it's been here since the creation of the website 7 years ago and is heavily tied to the root of the surf engine. We now have more control on it.

Ratio is generally fixed on most platforms and the way to increase it is almost always to pay a subscription. But, we think we can do better than that. The vision we have is to create a more dynamic system that will bring value for members that want to contribute to the system.

We have several ideas that we want to bring into the calculation of the ratio, you will find below some examples of what we have in mind.

### Ideas of bonuses that will increase the ratio

* Having an App from a country in demand
* Surfing for a long period
* Timed events (boosting the ratio over a period, for everyone or specific members)
* Special promotions
* Using a very good machine to run the App

### Ideas that could impact the ratio negatively

* Using very low quality machines for running the App
* Using an out of date App

The idea is that over some favorable conditions, an instance will be likely able to achieve a very high ratio.

## What's next

We'll first ensure that the transition from the global efficiency system to an App based ratio is working correctly. If you see any strange ratio on specific instances, don't hesitate to reach us.

Explanations of how the ratio has been calculated for your instances will also be displayed in a near future to help you improve it if possible.

I wish you a good surf.
