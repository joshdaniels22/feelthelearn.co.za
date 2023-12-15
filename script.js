let slideIndex = 1;
let startIndex = 1;
let endIndex = 4;
let numTutors = 5;
showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n
  updateFrame(slideIndex);
  showSlides(slideIndex);
}

function updateFrame() {
if (slideIndex > numTutors || slideIndex < 0) {

} else {
  // let slides = document.getElementsByClassName("demo");
  if (slideIndex > endIndex) {
    endIndex += 1;
    startIndex += 1;
    // slides[startIndex - 1].style.display = "none";
    // slides[endIndex].style.display = "block";

  } else if (slideIndex < startIndex) {
    endIndex -= 1;
    startIndex -= 1;
    // slides[endIndex + 1].style.display = "none";
    // slides[startIndex].style.display = "block";
  }
}


}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  let bios = document.getElementsByClassName("bio");

  for (i = 0; i < slides.length; i++) {
      dots[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    if (i >= startIndex -1 && i <= endIndex - 1) {
      dots[i].style.display = "block";
    } else {
      dots[i].style.display = "none";
    }
  }


  if (n > endIndex) {
    slideIndex = startIndex;
  }
  if (n < startIndex) {
    slideIndex = endIndex;
  }
  for (i = 0; i < endIndex; i++) {
    slides[i].style.display = "none";
    bios[i].style.display = "none";
  }
  for (i = 0; i < endIndex; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  bios[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
