---
title: secretsnitch
date: January 2024
---
As seen at

[![BlackHat MEA 2024](https://img.shields.io/badge/BlackHat%20MEA%202024-222.svg?style=flat-square&logo=redhat)](https://blackhatmea.com/blackhat-arsenal)

Secretsnitch is a tool I wrote to help bug bounty hunters grab hundreds of secrets from multivariate sources in a matter of seconds.

Based on my earlier work on [secretsearch](https://gitlab.com/redhuntlabs-open-source/secretsearch), I expanded the regular expression lists, added blacklisting, modularized the approach and added classic formal language parsing and so on.

This tool can catch millions of secrets across GitHub, GitLab, Bitbucket, Dockerhub etc. It helped me catch tons of AWS Secrets, mongodb production credentials and several others for fintech companies, government departments etc.
