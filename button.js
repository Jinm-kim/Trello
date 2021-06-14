"use strict";

$(document).ready(function () {
    // 모달창 button 제어

    $(".close").on("click", function () {
        $(".modal").removeClass("showing");
        $(".edit_title_box").css("display", "none");
        $(".edit_box").css("display", "none");
        $(".edit_title").val("");
        $("#edit_text").val("");
    });

    $(document).on("click", function (e) {
        if ($(".modal").is(e.target)) {
            $(".modal").removeClass("showing");
        }
    });

    $(".edit_box .closeButton").on("click", function () {
        $(".edit_box").css("display", "none");
        $("#edit_text").val("");
    });

    $(".edit_title_box .closeButton").on("click", function () {
        $(".edit_title_box").css("display", "none");
        $(".edit_title").val("");
    });

    $(".titleEdit").on("click", function () {
        $(".edit_title_box").toggle();
    });

    $(".descriptionEdit").on("click", function () {
        $(".edit_box").toggle();
    });

    // card & list button 제어
    $(".closeCard").on("click", function () {
        $(".write_card").val("");
    });

    $(".list_button").on("click", function () {
        $(".write_list").toggle();
        $(".save.list").css("display", "flex");
        $(".list_button").css("display", "none");
    });

    $(".closeList").on("click", function () {
        $(".write_list").val("");
        $(".write_list").toggle();
        $(".list_button").css("display", "block");
        $(".save.list").css("display", "none");
    });
});
