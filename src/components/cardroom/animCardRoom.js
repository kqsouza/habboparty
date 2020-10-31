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

  $(".cardroom").click(function () {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 250,
    });
    tl.add({
      targets: this.querySelector(".fa-play"),
      fontSize: "70px",
    }).add({
      targets: this.querySelector(".fa-play"),
      fontSize: "80px",
    });
  });

  $(".fa-star").click(function () {
    let tl = anime.timeline({
      easing: "linear",
      duration: 100,
    });
    tl.add({
      targets: this,
      fontSize: "22px",
    }).add({
      targets: this,
      fontSize: "25px",
      color: "rgb(255,255,0)",
    });
  });

  $(".roomname").hover(function () {
    anime({
      easing: "linear",
      targets: this.querySelector(".roomname i"),
      opacity: 1,
      duration: 150,
    });
  });
});
