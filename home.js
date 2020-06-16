// var slideIndex = 1;

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


// function showSlides(n) {
//     console.log("HWEY")
//     var i ;
//     var slides = document.getElementsByClassName("Slides-fade");
//     var lines = document.getElementsByClassName("lines");
//     if (n > slides.lenght) {slideIndex = 1}
//     if (n < 1) {slidesIndex = slide.lenght}
//     for (i = 0 ; i < slides.length; i++) {
//         slides [1].style.display = "none";
//     }

// }
// for (i = 0; i < lines.lenght ; i++) {
//     lines[i].className = line[i].className.replace("active","");
// }
// slides[slideIndex-1].style.display = "block";
// lines[slideIndex-1].className += "active";


function changeImage(slideNumber) {
    var imageContainer = document.getElementById("image-container")
    switch(slideNumber) {
        case 1: {
            imageContainer.style.backgroundImage = 'url(img_2228.jpg)'
            break;
        }
        case 2: {
            imageContainer.style.backgroundImage = 'url(img_1491_0.jpg)'
            break;
        }
        case 3: {
            imageContainer.style.backgroundImage ='url(janko-ferlic-ypS9j3UzqLk-unsplash.jpg)'
            break;
        }
    }
}