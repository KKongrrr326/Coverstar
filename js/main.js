var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


window.onload = function() {

    $("header").load("common/header.html");
    $("footer").load("common/footer.html");

    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });


    // pc 감지
    if (!isMobile) {

    };
    // moblie 감지
    if (isMobile) {

    };

}