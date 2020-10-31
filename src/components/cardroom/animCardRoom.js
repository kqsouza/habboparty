import $ from "jquery";
import anime from "animejs";

$(document).ready(function () {
  $(".cardroom").hover(
    function () {
      anime({
        targets: this.querySelector(".fa-play"),
        rotate: "10deg",
      });
      anime({
        targets: this,
        scale: 1.03,
        duration: 250,
      });
    },
    function () {
      anime({
        targets: this.querySelector(".fa-play"),
        rotate: "0deg",
      });
      anime({
        targets: this,
        scale: 1,
        duration: 250,
      });
    }
  );

  $(".fa-play").click(function () {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 250,
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
