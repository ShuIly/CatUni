$(document).ready(function () {
    $("div.icon-list-wrapper").click(function () {
        $("nav").toggleClass("nav-stretch");
        $("ul.nav-list").toggleClass("switch-mobile");
    });

    $("a.nav-item-link, li.nav-subitem").click(function () {
        $("a.nav-item-link, li.nav-subitem").removeClass("mobile-link-hovered");
        $(this).toggleClass("mobile-link-hovered")
    });

    $("a.home-link").click(function () {
        $("ul.nav-sublist").toggleClass("toggle-sublist");
        $("i.home-icon").toggleClass("mobile-icon-rotate");
    })
});