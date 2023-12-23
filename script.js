let slideIndex = 1;
showCaptionForSlide(slideIndex);

function showCaptionForSlide(i) {
  slideIndex = i
  let bios = document.getElementsByClassName("bio");
  for (i = 0; i < bios.length; i++) {
    bios[i].style.display = "none";
  }
  bios[slideIndex - 1].style.display = "block";
}
