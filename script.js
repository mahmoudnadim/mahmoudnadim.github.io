var testimonialsBodyScroll = document.querySelector(".testimonialsBody")
var testimonialsSlider = document.querySelector(".testimonialsSlider")
setInterval(() => {
    if (testimonialsBodyScroll.scrollLeft+1 > (testimonialsSlider.children.length-1) * testimonialsSlider.clientWidth) {
        testimonialsBodyScroll.scrollTo(0,0)
    }
    else{
        testimonialsBodyScroll.scrollBy(testimonialsSlider.clientWidth, 0)
    }
    
}, 3000);

function navClose() {
    $(".phonenavcontainer").hide(1000);
    $(".phoneNav").hide(1000);
}
function navOpen() {
    $(".phonenavcontainer").show(1000);
    $(".phoneNav").show(1000);
}
$(".navLink").click(function (e) {
    e.preventDefault();
    console.log(this.children)
});
$(".skillsHeader").click(function (e) {
    $(".skillsBody").toggle(500);
    e.preventDefault();
});
