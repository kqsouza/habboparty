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
});
