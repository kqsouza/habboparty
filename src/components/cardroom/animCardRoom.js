import $ from "jquery";
import anime from "animejs";

$(document).ready(function () {
  $(".cardroom").hover(
    function () {
      anime({
        targets: this.querySelector(".fa-play"),
        rotate: "10deg",
      });
    },
    function () {
      anime({
        targets: this.querySelector(".fa-play"),
        rotate: "0deg",
      });
    }
  );

  $(".fa-play").click(function () {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 300,
    });
    tl.add({
      targets: this,
      fontSize: "70px",
    }).add({
      targets: this,
      fontSize: "80px",
    });
  });
});
