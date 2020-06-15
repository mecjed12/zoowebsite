var slideIndex = 1;

function showSlides(n) {
    console.log("HWEY")
    var i ;
    var slides = document.getElementsByClassName("Slides-fade");
    var lines = document.getElementsByClassName("line");
    if (n > slides.lenght) {slideIndex = 1}
    if (n < 1) {slidesIndex = slide.lenght}
    for (i = 0 ; i < slides.length; i++) {
        slides [1].style.display = "none";
    }

}
for (i = 0; i < lines.lenght ; i++) {
    lines[i].className = line[i].className.replace("active","");
}
slides[slideIndex-1].style.display = "block";
lines[slideIndex-1].className += "active";