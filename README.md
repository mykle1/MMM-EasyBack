## MMM-EasyBack

The easiest way to use video and pictures as a background on your mirror.

Use any YouTube video as a live background with just the YouTube ID of the video.

Works by default with Hello-Lucy voice. https://github.com/mykle1/Hello-Lucy.

.jpg files, .png files, .gif files, Full Screen animated gifs (not recommended for Pi users).

.mp4 and .mov files (others not tested).

## Where your background files go

* Your background picture files go in the "images" folder inside the MMM-EasyBack module folder.

* Your local video files go in the "videos" folder inside the MMM-EasyBack module folder.

## Installation

* `git clone https://github.com/mykle1/MMM-EasyBack` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

```
{
    module: 'MMM-EasyBack',
    position: 'fullscreen_below',
    config: {
        bgName: "",          // "Example.jpg", the file name of your background image (case sensitive)
        videoName: "",       // "hd0924.mov",         // file name of your local video
        youTubeID: "GI3rBwqwDbw", // "GI3rBwqwDbw", // ID from any YouTube video. ID comes after the = sign of YouTube url
        height: "1080px",    // your display's resolution in pixels. Enter in config.js
        width: "1920px",     // your display's resolution in pixels. Enter in config.js
    }
},
```

## Remember

* Background picture files go in the "images" folder inside the MMM-EasyBack module folder.

* Your local video files go in the "videos" folder inside the MMM-EasyBack module folder.

* No need to download YouTube video. You only need the ID from the YouTube url

## Electron browser may hinder autostart of video media

### Do this

Edit MagicMirror/js/electron.js

Add the line shown below

```
let mainWindow;

function createWindow() {
    app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');  //< -------- added
```
    
Save and restart MagicMirror

## Fix for use with Chromium Browser

### Thanks to sdetweil and Darkmx-6

I edited the file chromium_start.sh found here:
```
pi@raspberrypi:~ $ ls
chromium_start.sh  MagicMirror  mmstart.sh  node-v10.16.0-linux-armv6l  package-lock.json
and added
```
--autoplay-policy=no-user-gesture-required

Example:

  GNU nano 3.2                          chromium_start.sh                                                                         
```
#!/bin/sh
unclutter &
xset -dpms # disable DPMS (Energy Star) features.
xset s off # disable screen saver
xset s noblank # don’t blank the video device
matchbox-window-manager &
#midori -e Fullscreen -a http://localhost:8080
chromium-browser --autoplay-policy=no-user-gesture-required --incognito --kiosk http://localhost:8080/
```

