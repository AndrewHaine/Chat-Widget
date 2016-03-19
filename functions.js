window.onload = function () {
    var mediaExpand = document.getElementById("media-expand-arrow");
    var mediaBar = document.getElementById("media-bar");
    var mediaCross = document.getElementById("media-bar-cross");
    var messageFeed = document.getElementById("message-feed");
    
    console.log(mediaExpand + mediaBar);
    
    function mediaOpen(){
        mediaBar.className += " media-bar-open"
    };
    
    mediaExpand.addEventListener("click", mediaOpen, false);
    
    function mediaClose(){
        mediaBar.className = "media-bar"
    };
    
    mediaCross.addEventListener("click", mediaClose, false);
    
    function wScroll(){
        console.log(messageFeed.scrollTop);
        
        messageHeight = messageFeed.offsetHeight;
    
        var heightToScroll = (130);
        var header = document.getElementById('header');
    
        if(messageFeed.scrollTop > heightToScroll){
            header.className = "header header-scrolled"
            messageFeed.className = "message-feed message-feed-scrolled"
        }
        else if(messageFeed.scrollTop < 1){
            header.className = "header header-unscrolled"
            messageFeed.className = "message-feed"
        }
     };
    
    messageFeed.addEventListener("scroll", wScroll, false);
    
    wScroll();
        
        
    function logMessage(event){
        
        //get time
    
        var d = new Date();    
        var h = d.getHours();
        var m = d.getMinutes(); 
        
        //build message
        
        function appendMessage() {
            $('#message-feed').append(
                '<div class="message message-to"><div class="message-name"><h1>You</h1></div><div class="message-body"><p>' + messageVal + '</p></div><div class="message-timestamp"><p>Today ' + h + ' : ' + m + '</p></div>'   
            );
        }
        
        //set event trigger
        
        var messageInput = document.getElementById("message-input");
        
        var messageVal = messageInput.value;
        
        //fire on enter
        
        if (event.keyCode == 13) {
            event.preventDefault();
            document.getElementById("output").innerHTML = messageVal;
            messageInput.value= "";
            appendMessage();
            messageFeed.scrollTop = messageFeed.scrollHeight;
        }
    };
        
    document.addEventListener("keypress", logMessage, false);

    
}

