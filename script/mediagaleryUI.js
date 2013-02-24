// JavaScript Document

/*
* Required 1.8.3/jquery.min.js
*/

function mediaGalery() {

    this.Start = function (URLImagesArrayInput) {
        this.URLImagesArray = URLImagesArrayInput;

        /* current image id */
        this.currentImage = 0;

        /* curent imane number */
        this.currentImageNumber = this.currentImage +1;

        /* number of photos */
        this.numberOfPhotos = this.URLImagesArray.length;

        this.RenderImagesCounter();

        $("#MGCurrentImage").attr("src", this.URLImagesArray[this.currentImage]);
        $("#bg").css("display", "block");
        $("#mediaGalery").css("display", "block");
        scrollTo('0', '0');
    }

    this.Onload = function() {
        $("#MGWaiting").css("display", "none");
        $("#MGCurrentImage").css("display", "block");

        /* start bufer */
        var curentImagePlus5 = mediaGalery.currentImage + 5;
        var imgIds = 1;
        for(var i = mediaGalery.currentImage; i < curentImagePlus5; i++) {
            if(this.URLImagesArray[i] !== undefined) {
                $("#MGImgBufer" + imgIds).attr("src", this.URLImagesArray[i]);
            }
            imgIds++;
        }
    }

    this.Forward = function() {
        if(this.currentImage < this.URLImagesArray.length - 1) {
            $("#MGWaiting").css("display", "block");
            $("#MGCurrentImage").css("display", "none");
            this.currentImage++;
            this.currentImageNumber++;
            this.RenderImagesCounter();
            $("#MGCurrentImage").attr("src", this.URLImagesArray[this.currentImage]);
        }
    }

    this.Back = function() {
        if(mediaGalery.currentImage >= 1) {
            $("#MGWaiting").css("display", "block");
            $("#MGCurrentImage").css("display", "none");
            mediaGalery.currentImage--;
            this.currentImageNumber--;
            this.RenderImagesCounter();
            $("#MGCurrentImage").attr("src", this.URLImagesArray[mediaGalery.currentImage]);
        }
    }

    /* render: curent photo number / all numbers of photos */
    this.RenderImagesCounter = function () {
        $("#MGImagesCounter").html(this.currentImageNumber + "/" + this.numberOfPhotos);
    }

    this.CloseMG = function () {
        $("#MGCurrentImage").css("display", "none");
        $("#MGCurrentImage").attr("src", "");
        $("#bg").css("display", "none");
        $("#mediaGalery").css("display", "none");
        $("#MGWaiting").css("display", "block");
    }

    this.Keymove = function (event) {
        event = (event) ? event : window.event;
        if (event)
        {
            var code = (event.charCode) ? event.charCode : event.keyCode;
            switch(code)
            {
                case 37:
                mediaGalery.Back();
                break;
                case 39:
                mediaGalery.Forward();
                break;
                case 27:
                mediaGalery.CloseMG();
                break;
            }
        }
    }

    document.onkeypress = this.Keymove;
}




