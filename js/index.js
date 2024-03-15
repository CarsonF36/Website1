window.onscroll = function() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "lightgrey";
    }
}