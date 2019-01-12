## MMM-EasyBack

The easiest way to use background/desktop pictures on your mirror.

Works by default with Hello-Lucy voice. https://github.com/mykle1/Hello-Lucy

.jpg files, .png files, .gif files, Full Screen animated gifs (not recommended for Pi users)

## Where your background picture files go

* Your background picture files go in the "images" folder inside the MMM-EasyBack module folder.

* Background picture dimensions should match the resolution of your display for best results

## Where your background video files go. (MP4 only at this time)

* Your video files go in the "videos" folder inside the MMM-EasyBack module folder.

* Background video dimensions should match the resolution of your display for best results

## Installation

* `git clone https://github.com/mykle1/MMM-EasyBack` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

    {
        module: 'MMM-EasyBack',
		position: 'fullscreen_below',
		config: {
			bgName: "Example.jpg", // the file name of your background image (case sensitive)
			videoName: "",         // file name of your mp4
		}       // bgName OR videoName. NOT BOTH!
	},
	
