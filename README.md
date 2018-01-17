## MMM-EasyBack

The easiest way to use background/desktop pictures on your mirror.

Works by default with Hello-Lucy voice. https://github.com/mykle1/Hello-Lucy

.jpg files, .png files, .gif files, Full Screen animated gifs (not recommended for Pi users)

## Where your background picture files go

* Your background picture files go in the "images" folder inside the MMM-EasyBack module folder.

## Installation

* `git clone https://github.com/mykle1/MMM-EasyBack` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

    {
        module: 'MMM-EasyBack',
		position: 'fullscreen_below',
		config: {
			bgName: "Example.jpg", // the file name of your background image (case sensitive)
			maxWidth: "100%",
		}
	},
	
## Remember

* Background picture files go in the "images" folder inside the MMM-EasyBack module folder.