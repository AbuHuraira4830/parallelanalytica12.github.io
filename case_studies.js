window.onscroll = function() { scrollFunction() };

function scrollFunction() {

     document.querySelector('.header').style = "background-color:#ffffff !important";

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {

        document.querySelector('.header').style.position = "fixed";
        document.querySelector(".header").style.top = "0px";
        document.querySelector('#nav-li-1').style.color = "#83b7e2";
        document.querySelector('#nav-li-2').style.color = "#83b7e2";
        document.querySelector('#nav-li-3').style.color = "#83b7e2";
        document.querySelector('#nav-li-4').style.color = "#83b7e2";
    } else {
        document.getElementById("ul-scroll").style.position = "static";
        document.querySelector(".header").style.position = "static";
        document.querySelector('#nav-li-1').style.color = "#1C4CA0";
        document.querySelector('#nav-li-2').style.color = "#1C4CA0";
        document.querySelector('#nav-li-3').style.color = "#1C4CA0";
        document.querySelector('#nav-li-4').style.color = "#1C4CA0";
        document.querySelector('.header').style = "background-color:transparent !important";

        var menu = document.getElementById("ul-scroll");
        var lis = menu.getElementsByTagName("li");

        for (var i = 0; i < lis.length; i++) {
            var li = lis[i];
            li.addEventListener("mouseover", function() {
                this.getElementsByTagName("a")[0].style.color = "#83b7e2";
            });
            li.addEventListener("mouseout", function() {
                this.getElementsByTagName("a")[0].style.color = "#1C4CA0";
            });
        }
    }


}