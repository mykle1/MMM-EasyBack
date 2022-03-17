/* Magic Mirror
 * Module: MMM-EasyBack
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-EasyBack", {
  defaults: {
    bgName: "", // .jpg, .gif, .png, Full screen animated gifs too!
    videoName: "", // your local picture files go in "images" folder of MMM-EasyBack
    youTubeID: "So3vH9FY2H4", // YouTube ID from the YouTube url
    height: "1080px", // your display's resolution in pixels. Enter in config.js
    width: "1920px", // your display's resolution in pixels. Enter in config.js
    animationSpeed: "0",
    updateInterval: 60 * 60 * 1000
  },

  start: function () {
    self = this
    this.url = ""

    setInterval(function () {
      self.updateDom(self.config.animationSpeed || 0)
    }, this.config.updateInterval)

    if (this.config.bgName != "") {
      this.url = "modules/MMM-EasyBack/images/" + this.config.bgName
    } else if (this.config.videoName != "") {
      this.url = "modules/MMM-EasyBack/videos/" + this.config.videoName
    }
  },

  getStyles: function () {
    return ["MMM-EasyBack.css"]
  },

  // Override dom generator.
  getDom: function () {
    if (this.config.youTubeID != "") {
      var iframe = document.createElement("IFRAME")
      iframe.classList.add("iframe")
      iframe.style = "border: 0 none transparent "
      iframe.width = this.config.width
      iframe.height = this.config.height
      type = "text/javascript"
      iframe.src = `https://www.youtube.com/embed/${this.config.youTubeID}?autoplay=1&mute=1&loop=1&showinfo=0&vq=hd1080 allowfullscreen`

      return iframe
    } else var wrapper = document.createElement("div")

    var image = document.createElement("img")
    if (this.config.bgName != "") {
      image.src = this.url
      image.className = "photo"
      console.log("MMM-EasyBack: Now showing image background")
      wrapper.appendChild(image)
    } else if (this.config.videoName != "") {
      var video = document.createElement(null)
      wrapper.innerHTML = `<video autoplay loop id="video"><source src="modules/MMM-EasyBack/videos/${this.config.videoName}" type="video/mp4"></video>`
      wrapper.appendChild(video)
    } else {
      console.log(
        "MMM-EasyBack error: Please enter either image OR video in config.js NOT BOTH"
      )
    }

    return wrapper
  },

  /////  Add this function to the modules you want to control with voice //////
  /////  Must be the same as in "sentences" array in MMM-voice.js /////

  notificationReceived: function (notification, payload) {
    if (notification === "HIDE_BACKGROUND") {
      this.hide()
    } else if (notification === "SHOW_BACKGROUND") {
      this.show(1000)
    }
  }
})
