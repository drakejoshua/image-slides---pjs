/* 
    created by mabawonku joshua
*/



// variable declarations for this program
var slides = document.getElementsByClassName("slides"), slide, activeSlideIndex = 0;

// removing all slides and displyaing only the default slide
for ( slide of slides ) {
    slide.style.display = "none";
}
slides[activeSlideIndex].style.display = "block"        //the default slide


//the previous slide function -> allows you to bring the previous slide into view
function previousSlide(){
    //setting the previous slide to the previous index
    activeSlideIndex -= 1;

    if ( activeSlideIndex <= -1 ) {
        alert("no more slides");
        activeSlideIndex = 0;               //take note, this makes sure there no overflow in the activeSlideIndex's value( 0 to 3 )
        //as far you keep invoking the previous slide function
    } else {
        for ( slide of slides ) {
            slide.style.display = "none";
        }

        // putting the previous slide into display
        slides[activeSlideIndex].style.display = "block";
    }
}


//the next slide function -> allows you to bring the next slide into view
function nextSlide(){
    //setting the next slide to the next index
    activeSlideIndex += 1;

    if ( activeSlideIndex >= slides.length ) {
        alert("no more slides");
        activeSlideIndex = ( slides.length - 1 );               //take note, this makes sure there no overflow in the activeSlideIndex's value( 0 to 3 )
        //as far you keep invoking the next slide function
    } else {
        for ( slide of slides ) {
            slide.style.display = "none";
        }

        // putting the next slide into display
        slides[activeSlideIndex].style.display = "block";
    }
}



//for the slideshow function -> creates a slideshow to display slides at specific intervals in time
function playSlideShow(){
    //prompt for time interval to be used to display slides
    var timeInterval = prompt("enter the time interval at which you want to play the slide show");

    //removes the "next", "playSlideShow" and "previous" button as a slideshow is currently being played
    var buttons = document.getElementsByTagName("button");
    for ( var button of buttons ) {
        button.style.display = "none";
    }

    
    //make decision on whether to play slides or not and add the removed buttons ( based on the value of {timeInterval} )
    if ( timeInterval == null ) {
        alert("can't play slideshow, interval not provided");
        for ( var button of buttons ) {
            button.style.display = "initial";
        }
    } 
    else if ( timeInterval == "" ) {
        var interval = setInterval( function(){
            if ( activeSlideIndex == ( slides.length - 1 ) ) {
                alert("there are no more slides to show😉");
                clearInterval(interval);
                for ( var button of buttons ) {
                    button.style.display = "initial";
                } 
            } else {
                nextSlide();
            }
        }, 1000 )
    }
    else {
        var interval = setInterval( function(){
            if ( activeSlideIndex == ( slides.length - 1 ) ) {
                alert("there are no more slides to show😉");
                clearInterval(interval);
                for ( var button of buttons ) {
                    button.style.display = "initial";
                }
            } else {
                nextSlide();
            }
        }, timeInterval * 1000 );
    }
}