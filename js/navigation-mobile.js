$(document).ready(function () {
    $("div.icon-list-wrapper").click(function () {
        $("nav").toggleClass("nav-stretch");
        $("ul.nav-list").toggleClass("switch-mobile");
    })
});