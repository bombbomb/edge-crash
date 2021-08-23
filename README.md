# MS Edge Crash demo


This demonstrates a browser-crashing event with `navigator.getUserMedia()` while in a window created by a browser extension with `type: popup`.

## Usage

Go to `edge://extensions` and then click `Load Unpacked` and select this repo.

To test:

1. Click the browser action (box icon)
1. Click "Launch Window: popup"
1. In the new window, click "Get Media"
1. Crash!

The "Launch Window: normal" button will create a window, but without the `type: 'popup'` option.

Crash occurs in 

- 88.0.705.63
- 92.0.902.78

Crash was fixed in Edge 90

# Icons

edge by LUTFI GANI AL ACHMAD from the Noun Project under Creative Commons
