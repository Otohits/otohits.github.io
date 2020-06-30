---
author: Otohits Webmaster
title: "v5 update - Windows 32 Bits support and User-Agent update"
date: 2020-06-30
tags:
    - Application
---

## Old habits die hard

Following the [last post](./2020-06-27-v5-App-update.md) of the v5 release as well as the removal of the v3/Definitive edition of the [App page](https://www.otohits.net/account/app), some of you contacted us regarding the lack of a 32 Bits version for the Windows App.

We didn't think there was still a high demand for such systems. We knew that providing it would make the App development a bit more complicated, but we didn't want to leave some members out.

## 32 Bits Windows App is available

Seeing such demand, we quickly looked at it and were able to provide a first 32 Bits version yesterday night. You are invited to test it if your system is still 32 Bits. For people using 64 Bits Windows systems, we suggest you stick with the x64 version.

Here is the work that has been done:

* The Console/Desktop App and the Viewer have been compiled to 32 Bits.
* A test environment has been added to test the 32 Bits version.
* The update system needed to be updated due to this new version.

If you encounter any issue with an update, don't hesitate to contact us.

## Version 5055: making the User-Agent override better

We updated how the Viewer handles User-Agent override.
Instead of simply applying the User-Agent you give, we also ensure that the correct platform is set.
For all the old Apps, by default the platform set is `Win32` for Windows and `Linux x86_64` for Linux, no matter which User-Agent you choose.

Now, if you set an `iPhone` User-Agent for example, the platform will be equal to `iPhone` with the vendor set to `Apple Computer, Inc.`.

Note that we did this for the best-known platforms and phones, but if you are using specific User-Agents or want to help us make it more accurate, we will prepare a tool to do so.

I wish you a good surf.
