---
title: Mercedes-Benz Secret Leak discovery
date: January 2024
---

[Secretsearch](https://gitlab.com/redhuntlabs-open-source/secretsearch) is an open-source tool I wrote at RedHunt Labs in Golang. Using concurrency and a custom regex list containing secret type definitions with zero-maintenance, it can scan almost 100,000 commit files of any size in less than a minute, running almost 150 regex checks on them in a loop.

This tool was instrumental in catching a publicly exposed GitHub secret from Mercedes-Benz that exposed all of Mercedes-Benz's cloud access keys, blueprints, design documents, private repositories, future projects, employees and other intellectual property.

[Read the TechCrunch article here!](https://techcrunch.com/2024/01/26/mercedez-benz-token-exposed-source-code-github/)