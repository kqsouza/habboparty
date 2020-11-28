import $ from "jquery";
import anime from "animejs";

$(document).ready(function () {
  $(".music-note").click(function () {
    let tl = anime.timeline({ easing: "easeOutExpo" });
    tl.add({
      targets: ".music",
      scale: 0.94,
      duration: 400,
    })
      .add({
        targets: ".music",
        translateX: "-180%",
      })
      .add({
        targets: ".sidebarmusic",
        width: "400%",
        opacity: 1,
        visibility: "visible",
      });
  });

  $(".fa-times").click(function () {
    let tl2 = anime.timeline({ easing: "easeOutExpo" });
    tl2
      .add({
        targets: ".sidebarmusic",
        width: "0px",
        opacity: 0,
      })
      .add({
        targets: ".music",
        translateX: "0%",
      })
      .add({ targets: ".music", scale: 1, duration: 400 });
  });
});
