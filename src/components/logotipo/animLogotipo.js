import $ from "jquery";
import anime from "animejs";

$(document).ready(function () {
  $(".logotipo h1").hover(function () {
    anime({
      targets: this.querySelector("i"),
      //rotate: ["0turn", "1turn"],
      rotate: "1turn",
    });
  });
});
