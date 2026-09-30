---
author: Otohits Webmaster
title: "Application: v6 is out"
date: 2026-09-30 16:00:00
tags:
    - Application
---

## A much-needed update

Today, everything moves at full speed, and technology is no exception, along with security and potential threats.

While App v5 is stable on its own, its internal browser is getting old. It's time for a refresh.

The new version is available on [its dedicated page](https://www.otohits.net/account/appnext).

## What's new

The main goal of v6 isn't to add new features per se, but rather to focus heavily on security.

### General updates

* **Update Chromium to version 145 (Windows) and 146 (Linux)**: Those versions will provide navigations closer to real, up-to-date browsers. Security has been improved significantly.
* **Tighter restrictions**: We restricted the browser even further, disabling some features that aren't necessary for 99% of use cases, but could pose a security risk (ex: Chromecast, local UDP, file access). On Windows, this also means the firewall pop-up should no longer appear.
* **Sandbox is now mandatory**: Because security comes first, using the sandbox is now non-negotiable. It is embedded directly in Windows versions. For Linux, as shown in the example scripts, configuring the sandbox is required. We will no longer promote or support the `/nosandbox` flag.
* **Graceful browser shutdown**: The browser now closes itself gracefully, which was not always the case in v5.

### Linux updates

* **Proper support for Wayland**: Linux systems that use Wayland will now be handled correctly. X11 behavior remains unchanged, though we may adopt Wayland's approach in the future by using a virtual display, as it is much simpler.

### Docker updates

* **Isolate the App as much as possible**: The provided example command ensures that the App stays contained within its container rather than trying to access the host OS. This is the only version of the App that runs without an internal sandbox, primarily because making the sandbox work inside a container is far more complex than securing the container's external boundary.
* **Debian**: The previous version relied on Ubuntu, but the new version uses Debian by default. The image size of the new App is slightly lighter (286 MB) compared to the old one (375 MB).
* **Proper tags**: The old version only used the `latest` tag. The new version introduces semantic version tags alongside `latest`. Combined with the new argument to pause automatic updates, it will be much easier to update your instances at your own pace.

You can read the full documentation of the new Docker version on its [DockerHub page](https://hub.docker.com/r/otohits/app-next).

## What stays

V6 is an upgrade, not a total revolution. Most of the codebase remains the same as v5.

All existing features remain in place. Some have been simplified or improved, but overall behavior remains very close to what you are used to.

## What will be left behind

Making a major version jump inevitably involves dropping support for certain legacy systems.

The most notable changes are:

* Dropping x86 (32-bit) builds
* Incompatibility with older operating systems
* Releasing only Installer/Console/Portable builds for now

### No more x86 versions

We have ended development for x86 versions. Moving forward, only x64 versions will be available.

### Old systems incompatibility

The most impactful change is dropping support for older operating systems:

* **Windows 8 and older**
* **Windows Server 2012 R2 and older**
* **Ubuntu 18 and older (or equivalent)**

The new App will not run on these systems. This was not an arbitrary choice, newer browser engines simply no longer support these legacy operating systems.

Because this is a major architectural update, v5 will not attempt to auto-update to v6. You must install v6 manually.

This aligns with our focus on security: running outdated operating systems poses a significant risk. If you have hardware that cannot run modern releases (looking at you, Windows 11), we recommend trying [Linux Mint](https://www.linuxmint.com), a simple, lightweight Linux distribution that can bring old machines back to life.

Below are the operating systems on which v6 has been tested:

#### Windows

|Version|Status|Comments|
|-|-|-|
|10 & 11|✅||
|Server 2016/2019/2022/2025|✅||
|7 or 8|❌|Only compatible up to version 5068|
|Server 2008/2012|❌|Only compatible up to version 5068|

#### Linux

|System|Version|Display Server|Desktop Environment|Status|
|-|-|-|-|-|
|Ubuntu|22/24|Wayland|GNOME|✅|
|Debian|13|Wayland|GNOME|✅|
|CachyOs|7.2.2-1cachyos|Wayland|KDE|✅|
|Mint|22.3|X11|Cinamon|✅|

### Viewer

We do not plan to release a Viewer version at this time, but we will re-evaluate if there is sufficient demand.

## Next steps

You can test the new version right now.

As with v5, the transition period will take time. We will not sunset v5 immediately, as breaking compatibility with older OS versions is a significant change.

This is why v6 currently lives on its own [dedicated page](https://www.otohits.net/account/appnext).

V5 will remain active and continue as the primary download on the main Application page until its usage declines significantly.

* **Portable version**: Simply extract the new version alongside your old installation.
* **Installer version**: While installing v6 over an older version should work, we recommend uninstalling any previous versions first or installing v6 into a separate directory.

## Major updates are never easy

Making a leap like this always comes with challenges, but taking these steps is essential today. Security is no longer optional and protecting surfers comes first.

We hope you join us in this next chapter for Otohits, and in the meantime, I wish you a good surf.
