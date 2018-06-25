function openNav() {
	if (document.getElementById("sideBar").style.width != "250px") {
		document.getElementById("sideBar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	} else {
		document.getElementById("sideBar").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
	}
}

$(document).ready(function () {
    $(".menu").hover(function () {
        $(".menubutton").css("width", "44px");
		$(".menubutton").css("height", "44px");
		$(".menubutton").css("top", "16px");
		$(".menubutton").css("margin-left", "12px");
		$(".menubutton").css("filter", "brightness(1)");
    });
    $(".menu").mouseleave(function () {
        $(".menubutton").css("width", "40px");
		$(".menubutton").css("height", "40px");
		$(".menubutton").css("top", "18px");
		$(".menubutton").css("margin-left", "14px");
		$(".menubutton").css("filter", "brightness(0.65)");
    });
});

$(document).ready(function () {
    $(".menubutton").hover(function () {
        $(".menubutton").css("width", "44px");
		$(".menubutton").css("height", "44px");
		$(".menubutton").css("top", "16px");
		$(".menubutton").css("margin-left", "12px");
		$(".menubutton").css("filter", "brightness(1)");
    });
    $(".menubutton").mouseleave(function () {
        $(".menubutton").css("width", "40px");
		$(".menubutton").css("height", "40px");
		$(".menubutton").css("top", "18px");
		$(".menubutton").css("margin-left", "14px");
		$(".menubutton").css("filter", "brightness(0.65)");
    });
});