---
author: Otohits Webmaster
title: "How to override the referer"
date: 2023-08-12
tags:
    - Guide
---

## What is referer overriding?

The referrer identifies the webpage that the previous request comes from. If you need more explanations on this concept, you can referer to the guide about [hiding the referer](./2023-08-26-how-to-hide-the-referer.md).

When you override the referer, you make the page beleive that the visit comes from a specific domain.

## Why it matters on Autosurf systems?

By default, a visit will be direct (no referer), which can be considered as a low value traffic for specific needs when it represents a major part of the traffic.

With the override referer feature, you can put any domain as referers and you links will think that the visit comes from them, even if no link is really present on the referer page.

## How to manage the override referer feature?

* Go to your my sites page
* Click on the configuration button ![Config button](/img/guides/config_btn.png) of one of your links and click on advanced options and info
* Scroll down to the `Change referer tab` and click on `Enable referer override`

![Override referer tab](/img/guides/ov_ref_1.png)

* Next, add the domains you want to use. Make sure they are absolute URLs (ex: `https://facebook.com` or `https://twitter.com`)

![Override referer visit type](/img/guides/ov_ref_2.png)

* You will see that 100% of the visits will come from Otohits domain or will be direct visits. To update this value, you'll need to set the percentage of visits to use with the custom domains you added previously

* As the example below, I set 25% for facebook and 75% for Twitter. After then, click the `Update %` button

![Override referer update](/img/guides/ov_ref_3.png)

* The text should now say: `Visits with custom referer:100%`

## Points to consider when using the override referer feature

* Referers are always hidden in case of failure, so the Otohits domain should not appear if there is an issue on the override
* You are free to put any domain you like. Make sure they start with `http://` or `https://`.
* Behavior can change depending on your links and the referer used
  * `HTTP` referer on `HTTP` link will work
  * `HTTPS` referer on `HTTP` link will work but can be detected as fraud
  * `HTTPS` referer is not always transmitted when using `HTTPS` links
  * Even if Otohits will ignore these rules and always send the referers you added, we strongly suggest you follow them.

If you need more information on these principles, you can read the following W3C article: [https://www.w3.org/Protocols/rfc2616/rfc2616-sec15.html#sec15.1.3](https://www.w3.org/Protocols/rfc2616/rfc2616-sec15.html#sec15.1.3)