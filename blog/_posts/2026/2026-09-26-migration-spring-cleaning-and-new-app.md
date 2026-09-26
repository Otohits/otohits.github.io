---
author: Otohits Webmaster
title: "Migration, spring cleaning, and a new App incoming"
date: 2026-09-26
tags:
    - Newsletter
---

Following our recent migration a few days ago, it feels like the perfect time for a quick catch-up.

## Main server migration - September 2026

After three years of solid service, the NVMe disks on our main server started showing bad sectors.

Fortunately, we caught the issue early while the impact was still minimal. A few files were affected:

- **Old application versions**: These were obsolete and out of use, so they have simply been removed.
- **The database**: A few blocks were damaged, but fortunately, they were mostly free space, no actual user data was impacted.

After a week of preparation and provisioning a new server, we completed the full migration on September 18th. 
The overall downtime was under 30 minutes, and everything was back up and running smoothly right after.

## Spring cleaning & maintenance

Otohits is now 13 years old, a milestone that feels like a small miracle! However, hanging around for over a decade means accumulating a bit of technical debt in both our codebase and database.

We are actively clearing out unused legacy code and data to streamline the platform. During this cleanup, an issue occurred around September 21st that briefly affected website access and surfing performance. It was quickly identified and patched. Lesson learned, and we’ll make sure it doesn't happen again!

Cleaning up legacy code like this is crucial: the less noise we have in the system, the more we can focus on building what matters most.

## New App coming  soon (v6)

Version 6 of the Otohits application is just around the corner and is currently undergoing internal testing.

- [Docker version](https://hub.docker.com/r/otohits/app-next) is already available
- Windows & Linux version will follow soon

We’ll publish a dedicated post for this release soon, as there’s plenty to cover. The main focus of v6 isn't necessarily adding new features, but rather a heavy emphasis on security and underlying performance improvements.

Thank you for your continued support, see you soon, and have a great surf.