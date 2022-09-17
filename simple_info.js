function switch_to(thing) {
    // $(document.getElementsByClassName(".highlighted-planet-button")).attr("class", ".planet-button");
    // console.log($(`#${thing}-button`), $(".highlighted-planet-button"), document.getElementsByClassName(".highlighted-planet-button"));
    // $(`#${thing}-button`).addClass(".highlighted-planet-button");


    // $(".planet-buttons").css("border", "none")
    // $(`#${thing}-button`).css({
    //     "border": "2px solid red",
    //     "border-radius": "5px"
    // });

    $(".planet-buttons").css("width", "9.5%")
    $(`#${thing}-button`).css({
        "width": "10%"
    });
    $(".planet-info").hide(0);
    $(`#${thing}-info`).show(0);
}