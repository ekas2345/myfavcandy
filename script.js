function showMedia(src, type) {
    const mainDisplay = document.getElementById('mainDisplay');
    const parent = mainDisplay.parentNode;

    const existingVideo = document.getElementById('mainVideo');
    if (existingVideo) {
        existingVideo.remove();
    }

    if (type === 'image') {
        mainDisplay.src = `images/${src}`;
        mainDisplay.style.display = 'block';
    } else if (type === 'video') {
        mainDisplay.style.display = 'none';
        const video = document.createElement('video');
        video.id = 'mainVideo';
        video.src = `images/${src}`;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.className = 'large-image';
        parent.insertBefore(video, mainDisplay);
    }
}

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
