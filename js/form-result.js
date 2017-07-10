$(document).ready(function () {
    $("button.result-btn").click(function () {
        $("div.form-result").addClass("show-result");
    });

    $("button.accept-btn").click(function () {
        $("div.form-result").removeClass("show-result");
    });
});