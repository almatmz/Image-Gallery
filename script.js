$(document).ready(function () {
  $(".lightbox").hide();
  console.log("jQuery is ready!");

  // Part 1
  $("#change-text").click(function () {
    $("#sample-text").text("The text has been changed with jQuery!");
    $("#sample-text").css({
      color: "white",
      background: "#333",
      padding: "10px",
      borderRadius: "8px",
    });
  });

  //Part 2
  $("#hide").click(() => $(".effect-text").hide());
  $("#show").click(() => $(".effect-text").show());
  $("#toggle").click(() => $(".effect-text").toggle());

  $("#fade-in").click(() => $("#fade-img").fadeIn());
  $("#fade-out").click(() => $("#fade-img").fadeOut());
  $("#fade-toggle").click(() => $("#fade-img").fadeToggle());

  $("#slide-btn").click(() => $("#panel").slideToggle());

  //Part 3
  $("#add-item").click(() => $("#item-list").append("<li>New Item</li>"));
  $("#remove-item").click(() => $("#item-list li:last").remove());

  $("#change-src").click(() => $("#change-img").attr("src", "images/ron2.jpg"));
  $("#change-link").click(() =>
    $("#dynamic-link")
      .attr("href", "https://jquery.com")
      .text("Visit jQuery Official Site")
  );

  $("#name").keyup(() => $("#display-name").text($("#name").val()));
  $("#email").keyup(() => $("#display-email").text($("#email").val()));

  // Part 4
  $("#animate").click(function () {
    $("#box").animate({ left: "200px", height: "150px", width: "150px" }, 1000);
  });

  $("#sequential").click(function () {
    $("#box")
      .animate({ left: "250px" }, 800)
      .animate({ top: "150px" }, 800)
      .animate({ width: "50px", height: "50px" }, 800)
      .animate(
        { left: "0px", top: "0px", width: "100px", height: "100px" },
        800
      );
  });

  $("#combined").click(function () {
    $("#box").animate(
      {
        opacity: 0.5,
        left: "200px",
        width: "150px",
        height: "150px",
      },
      1500
    );
  });

  // Part 5
  $(".thumb").click(function () {
    let src = $(this).attr("src");
    $("#lightbox-img").attr("src", src);
    $(".lightbox").fadeIn();
  });

  $(".close, .lightbox").click(function () {
    $(".lightbox").fadeOut();
  });
});
