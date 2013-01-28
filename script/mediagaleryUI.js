// JavaScript Document

/*
* Required 1.8.3/jquery.min.js
* MGImagesArray - GLOBAL array with links to images, required.
*/

/* Array with list of images links */
var MGImagesArray1 = [
    'http://studyclub.dentistcalendar.com/view/static-resources/photo/-29087676_291980963.jpg', 
    'http://studyclub.dentistcalendar.com/view/static-resources/photo/-29087676_291980964.jpg', 
    'http://studyclub.dentistcalendar.com/view/static-resources/photo/test_student.jpg'];

/*onclick hendlers*/
$(document).ready(function(){

    $("#kurs00").click(function() {
        mediaGalery.Start(MGImagesArray1);
    });

    $(".MGForward").click(function() {
        mediaGalery.Forward();
    });

    $(".MGBack").click(function() {
        mediaGalery.Back();
    });

    $("#MGClose").click(function() {
        $("#bg").css("display", "none");
        $("#mediaGalery").css("display", "none");
    });
});

window.mediaGalery = new mediaGalery();

function mediaGalery() {

    /* current image id */
    this.currentImage = 0;

    this.Start = function(URLImagesArray) {
        this.URLImagesArray = URLImagesArray;
        $("#MGCurrentImage").attr("src", URLImagesArray[mediaGalery.currentImage]);
        $("#bg").css("display", "block");
        $("#mediaGalery").css("display", "block");
        scrollTo('0', '0');

        document.onkeypress = this.Keymove;
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
        mediaGalery.currentImage++;

        $("#MGCurrentImage").attr("src", this.URLImagesArray[mediaGalery.currentImage]);
    }

    this.Back = function() {
        if(mediaGalery.currentImage >= 1)
            mediaGalery.currentImage--;

        $("#MGCurrentImage").attr("src", this.URLImagesArray[mediaGalery.currentImage]);
    }

    this.Keymove = function (event)
    {
        if (event.preventDefault) {
        event.preventDefault();
        event.stopPropagation();
        } else {
            event.returnValue = false;
            event.cancelBubble = true;
        }

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
            }
        }
    }
}




