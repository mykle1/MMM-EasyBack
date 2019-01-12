/* Magic Mirror
 * Module: MMM-EasyBack
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-EasyBack", {

    defaults: {
        bgName: " ", // .jpg, .gif, .png, Full screen animated gifs too!
        videoName: " " // your picture files go in "images" folder of MMM-EasyBack
    },

    start: function() {
        self = this;
        this.url = '';

        if (this.config.bgName != "") {
            this.url = "modules/MMM-EasyBack/images/" + this.config.bgName;
        } else if (this.config.vidoeName != "") {
            this.url = "modules/MMM-EasyBack/videos/" + this.config.video;
        }
    },


    getStyles: function() {
        return ["MMM-EasyBack.css"]
    },

    // Override dom generator.
    getDom: function() {

        var wrapper = document.createElement("div");

        var image = document.createElement("img");
        if (this.config.bgName != '') {
            image.src = this.url;
            image.className = "photo";
            console.log("MMM-EasyBack: Now showing image background")
            wrapper.appendChild(image);

        } else if (this.config.videoName != '') {
            var video = document.createElement(null);
            wrapper.innerHTML = `<video autoplay loop id="video"><source src="modules/MMM-EasyBack/videos/${this.config.videoName}" type="video/mp4"></video>`;
            wrapper.appendChild(video);

        } else {
            console.log("MMM-EasyBack error: Please enter either image OR video in config.js NOT BOTH");
        }

        return wrapper;
    },


    /////  Add this function to the modules you want to control with voice //////
    /////  Must be the same as in "sentences" array in MMM-voice.js /////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_BACKGROUND') {
            this.hide();
        } else if (notification === 'SHOW_BACKGROUND') {
            this.show(1000);
        }
    },
});
