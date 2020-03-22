---
author: Otohits Webmaster
title: "Applications: the old (v3), the current (definitive) and the next one"
date: 2020-03-21
tags:
    - Application
---

## v3: A huge milestone for Otohits... in 2015!

The v3 of the App was launched in August 2015 on Windows. The .Net Framework was not necessary anymore, but it was a simple window without the possibility to see the navigated websites.

![App v3.1 for Windows](/img/blog/2020/v3.1_windows.jpg)

Quickly after, the 3.1 came out to bring back this feature. 

![App v3.1 Browser for Windows](/img/blog/2020/v3.1_windows_browser.jpg)

In 2016, the Linux version was released. It's the only available version for this system.

![App v3.1 for Linux](/img/blog/2020/v3.1_linux.png)

## Definitive edition: great, but limited to Windows

During the rise of coin-miners in 2017, we released the definitive edition for Windows. It is the preferred way to surf on this system since then. It is also the first one to have the sandbox mod activated to mitigate potential issues when navigating on dangerous websites.

![Definitive edition for Windows](/img/blog/2020/definitive_edition.png)

**It has never been ported to Linux.**

## The problem with existing applications

Although all these versions are still working pretty well, there is a catch: they are all old!

There are multiple reasons that could explain it:
- Making and maintaining an application is an expensive work
- The code was completely different for Windows and Linux, resulting in harder integration for new features
- Only the Definitive edition has an update system. For users that manage dozens of Linux instances, it would have been a nightmare to update them regularly on every new version released

We could have continued with the existing Apps, but it limits us to bring new features for you by making the work very difficult.

## 2019: v4, the version you will never see

In the middle of 2019, we regained a lot of will to bring new things for Otohits. The main focus was to see if we can do a new App that will overcome the difficulties we had with the previous versions.

After some research, we started coding the v4 with Electron. After few weeks, the first results were really exciting! Imagine an App that works and look the same on Linux, Windows and Mac while displaying websites. We migrated all the features and added new ones. Almost all the code was shared for every platform.

That would have been the perfect App to surf.

Then comes the test period. And it was a total catastrophy.
Our usual stress test is to let the App run for at least 24h. However the 2 tested versions (Windows and Mac) weren't able to pass it. Random crashes that came from the internal browser used by Electron were regularly encountered, without an easy way to fix them.

**Stability is extremely important to us** and such result lead to stopping the effort for this Electron version.

## v5: back to the roots

After such a fail, the situation could have stayed the same by keeping the old Apps and letting the website as is.

Luckily, instead of being demotivated by the situation, we were actually very annoyed about this defeat and we used this angriness to update the website. You probably didn't see any major changes... And that's a good thing! We reorganized the internal code to make it easier and way more pleasant to work with. Such an important thing we actually neglected over the years!

That brings us back to December 2019. At this stage, a second attempt for a new App was launched. That's the pre-version you actually have for Linux: the v5.

This one, it is stable... really stable. We made it to never stop surfing! We kept the previous pain points of the old versions in mind during its development.
Here are the results:

- **Keep it simple**: a console app, no visibility of the current website. This keeps the code to a minimum and the less code there is, the less bugs as well.
- **Easy to work with**: the Linux and Windows version share more than 90% of the code, meaning that an update will be really easy to release for both systems at the same time.
- **Up to date**: a big effort has been put to make sure updates are easy to manage. If there is an update available, the App will update itself when it starts.

![App v5](/img/blog/2020/v5_linux.png)

There are other features that will be available in it, they will be detailed in a separate post.

The only downside at the moment is the absence of a real user interface. Having it as a console app could be a little bit harsh for some users. We made the choice of bringing a feature-rich and stable app first.
If this App is a success, some efforts may be put in bringing to you an interface.

## Only time will tell

- The Linux version [is already out as a Beta](https://www.otohits.net/account/applinux).
- The Windows version is close as well, the final launch will follow shortly after.
- Our goal for this new version is clear: if everything goes well, it is **meant to replace all existing versions**.

With it, it will bring us the possibility to bring new App features and a lot more of statistics to play with on the website for your links.

In the meantime, I wish you a good surf.