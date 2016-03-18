window.onload = function () {
    var mediaExpand = document.getElementById("media-expand-arrow");
    var mediaBar = document.getElementById("media-bar");
    var mediaCross = document.getElementById("media-bar-cross");
    
    console.log(mediaExpand + mediaBar);
    
    function mediaOpen(){
        mediaBar.className += " media-bar-open"
    };
    
    mediaExpand.addEventListener("click", mediaOpen, false);
    
    function mediaClose(){
        mediaBar.className = "media-bar"
    };
    
    mediaCross.addEventListener("click", mediaClose, false);
}

