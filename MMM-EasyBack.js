/* Magic Mirror
 * Module: MMM-EasyBack
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-EasyBack", {

    defaults: {
        bgName: "Example.jpg",   // .jpg, .gif, .png, Full screen animated gifs too!
		maxWidth: "100%",        // your picture files go in "images" folder of MMM-EasyBack
		},                               

    start: function() {
        self = this;
        this.url = '';

        if (this.config.bgName != "") {
            this.url = "modules/MMM-EasyBack/images/" + this.config.bgName;
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
			image.style.maxWidth = this.config.maxWidth;
        }
        
        wrapper.appendChild(image);
        
        return wrapper;
    },
    

/////  Add this function to the modules you want to control with voice //////
/////  Must be the same as in "sentences" array in MMM-voice.js /////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_BACKGROUND') {
            this.hide(1000);
            this.updateDom(300);
        }  else if (notification === 'SHOW_BACKGROUND') {
            this.show(1000);
            this.updateDom(300);
        }
        
            
    },
    

});


