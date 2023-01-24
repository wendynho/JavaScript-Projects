
const buttonTrailer = document.querySelector(".button-trailer");

const video = document.getElementById("video");

const modal = document.querySelector(".modal");

const videoLink = video.src;

function modalAltern(){
    modal.classList.toggle("open")
}


buttonTrailer.addEventListener("click", () => {
    modalAltern();
    video.setAttribute("src", videoLink);
});

const buttonCloseModal = document.querySelector(".close-modal");

buttonCloseModal.addEventListener("click", () => {
    modal.classList.remove("open"); 
    video.setAttribute("src", "");
});




