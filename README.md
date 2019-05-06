## MMM-EasyBack

The easiest way to use background/desktop pictures on your mirror.

Use any YouTube video as a live background with just the YouTube ID of the video

Works by default with Hello-Lucy voice. https://github.com/mykle1/Hello-Lucy

.jpg files, .png files, .gif files, Full Screen animated gifs (not recommended for Pi users)

.mp4 and .mov files (others not tested)

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