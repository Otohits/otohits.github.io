---
author: Otohits Webmaster
title: "Geotargeting udpate: a complete redesign"
date: 2020-08-31
tags:
    - Website
    - Feature
---

## Time for an update

Geotargeting appeared 4 years ago on Otohits. Since then, it never got any major update. The list of available countries was based on how much visits were generated by locations.
From time to time, we updated the list, but you were a lot asking for additional countries to be added.

In the end, it was quite limited and not very flexible.

We decided to redesign it completely by bringing a new interface of selection and the full list of countries.

There have been 2 main challenges:

* Making a UI that makes sense to be able to pick countries in a list with over 100 elements
* Having a way to show if visits are available in a country

## New Geotargeting section

The geotargeting option can be activated as usual in the details page of your links, inside the basic options section.

![Activate geotargeting](/img/blog/2020/geotargeting/activate_geotargeting.png)

When activated, you will be able to see the new interface.

### Quick selection

The quick selection section provides you a list of regions for a quick selection. When clicking on a region, countries are automatically added to the list. Note that regions are cumulative, you can select multiple ones.

![Quick selection](/img/blog/2020/geotargeting/quick_selection.png)

### Manual selection

If you need more control over the countries you want to add, you can use the Manual Section. It will bring you a multiple select input where you can search and pick countries you want to add.

![Manual selection](/img/blog/2020/geotargeting/manual_selection.png)

## Country activity

When selecting countries, you will see that they are all marked with a colored circle. These circles represent how much visits you can expect from the location. It is mainly to avoid selecting only countries with no surfers, resulting in no visit on your link. **Colors are calculated once per day and take into account the activity of surfers over the last 7 days.**.

You can retrieve color's meanings in the legend section

![Legend](/img/blog/2020/geotargeting/legend.png)

## Saving and clearing countries

When you selected the countries you wanted, simply press the _Update countries_ button. Your selection will be saved. Note that both the Quick and Manual selections are linked, you can use both of them to manipulate the list of your selected countries.

If you want to remove geotargeting, simply _clear all_ the selected countries then press the _Update countries_ button. The geotargeting option will be disabled and you will receive visits from everywhere.

## Tips and tricks

* Geotargeting is also available in the **Actions** menu on your [My Sites page](https://www.otohits.net/account/mysites), so you can apply geotargeting on multiple links at once
* If only `Grey circle` countries are selected, there will be no visit on your link. Try to have at least 1 `Green circle` or multiple `Red or Yellow circles`
* This update is mainly cosmetic for the website, no particular change has been made on how the Geotargeting option behave when visits are delivered.