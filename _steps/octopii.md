---
title: Octopii
date: March 2022
---

[![BlackHat USA 2022](https://img.shields.io/badge/BlackHat%20USA%202023-222.svg?style=flat-square&logo=redhat)](https://www.blackhat.com/us-22/arsenal/schedule/#octopii---ai-powered-personal-identifiable-information-pii-scanner-27993)
[![BlackHat MEA 2023](https://img.shields.io/badge/BlackHat%20MEA%202023-222.svg?style=flat-square&logo=redhat)](https://blackhatmea.com/session/octopii-ai-powered-personal-identifiable-information-pii-scanner)
[![BlackHat USA 2024](https://img.shields.io/badge/BlackHat%20USA%202024-222.svg?style=flat-square&logo=redhat)](https://www.blackhat.com/us-24/arsenal/schedule/#octopii-v-39624)

![Octopii banner](assets/images/octopii_banner.png "Octopii banner")

Wrote [Octopii](https://github.com/redhuntlabs/Octopii), an AI-powered Personally Identifiable Information (PII) scanner powered by Haar Cascades, Tesseract, Optical Character Recognition (OCR) and NLTK.

I came across this problem when I was performing some research at work. Since we collect IP addresses and such, I received one,
where Apache directory listing was enabled. It belonged to a small business, and it had pictures of hundreds of Indian government ID (Aadhaar, PAN, drivers' licenses). I was looking for an open-source tool that helped me automate the detection of these resources and couldn't, and so I tried making one. The first version was terrible, since I was tackling the problem incorrectly. In order to train
a model on images of PII, I need...images of PII! Which is not something that is easy to obtain. So I took the alternate route in v2,
which was scanning text already present on PII and approximating metadata about it. This worked and had far less computation and labor
involved.

Octopii was mentioned on [Intigriti](https://web.archive.org/web/20230330051810/https://blog.intigriti.com/2022/05/25/bug-bytes-171-new-android-web-views-attacks-arbitrary-file-theft-on-android-scanning-for-pii-in-images/)'s Bug Bytes Newsletter and on [Daniel Miessler](https://web.archive.org/web/20230518020819/https://danielmiessler.com/podcast/no-359-whatsleak-cctv-ban-meta-threats/)'s Unsupervised Learning podcast, gained a lot of unexpected traction in the GitHub, OSINT and Kali Linux communities and is currently RedHunt Labs' most active repository. I was also thrilled to learn that I made it to the [Hackers of India](https://hackingarchivesofindia.com/hacker/owais_shaikh/) community thanks to all the love you showed to it.

[Original blog here](https://redhuntlabs.com/blog/octopii-an-opensource-pii-scanner-for-images.html)