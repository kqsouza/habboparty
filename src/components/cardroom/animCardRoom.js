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
      fontSize: "23px",
    }).add({
      targets: this,
      fontSize: "25px",
      color: "rgb(255,255,0)",
    });
  });

  $(".roomname").hover(
    function () {
      anime({
        targets: this.querySelector(".boxInfo"),
        opacity: 1,
        easing: "easeOutQuint",
        duration: 250,
        delay: 200,
      });
    },
    function () {
      anime({
        targets: this.querySelector(".boxInfo"),
        opacity: 0,
        easing: "linear",
        duration: 150,
        delay: 3600,
      });
    }
  );

  /*$(".boxInfo").hover(
    function () {
      anime({
        targets: this,
        opacity: 1,
        easing: "linear",
      });
    },
    function () {
      anime({
        targets: this,
        opacity: 0,
        easing: "linear",
      });
    }
  );*/
});
