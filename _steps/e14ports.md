---
title: ThinkPad E14 Synaptics driver port
date: July 2021
---

![libusb code](assets/images/e14ports.png "libusb code")

Another failed attempt at reverse-engineering. This one was a bit more difficult than I expected, so I left it alone. A lot of people starred it and were willing to fund it though.

If you'd like to contribute, contact me or fork the project.

Lenovo basically cheaped out on their hardware and tried to use [Shenzhen Goodix](https://github.com/goodix-fp-linux-dev) fingerprint scanners because they're cheap. However, this OEM hasn't made anything open source or available online, making Linux compatibility of these
scanners an absolute nightmare.

Update: There has been [effort on this front](https://github.com/goodix-fp-linux-dev) by others though, and it has resulted in several Goodix fingerprint sensor models now working. Yay!

[Archived here](https://github.com/4f77616973/ThinkPad-E14-fingerprint)
