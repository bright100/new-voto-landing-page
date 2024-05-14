const modal = document.getElementById("modal");
const video = document.getElementById("video");
const videoplay = document.getElementById("videoplay");

videoplay.onclick = (e) =>{
    modal.showModal();
}

video.onclick = (e) =>{
    modal.close();
}