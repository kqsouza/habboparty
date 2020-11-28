import $ from "jquery";
import anime from "animejs";

$(document).ready(function () {
  // ANIMAÇÃO -> CLICAR NO CARDROOM USANDO ANIMEJS
  // animação faz diminuir e aumentar playbutton
  $(".card").click(function () {
    let tl = anime.timeline({
      easing: "linear",
      duration: 250,
    });
    tl.add({
      targets: this.querySelector(".fa-play"),
      fontSize: "50px",
      easing: "easeOutExpo",
    }).add({
      targets: this.querySelector(".fa-play"),
      fontSize: "60px",
      easing: "easeOutExpo",
    });
  });
  // ANIMAÇÃO -> HOVER NO CARDROOM
  // animação faz aumentar fonte e rotacionar playbutton ao hover
  // animação faz diminuir fonte e rotacionar de volta playbutton ao sair do hover
  $(".card").hover(
    function () {
      anime({
        targets: this.querySelector(".fa-play"),
        fontSize: "60px",
        rotate: "22deg",
        easing: "easeOutExpo",
        duration: "650",
      });
    },
    function () {
      anime({
        targets: this.querySelector(".fa-play"),
        fontSize: "40px",
        rotate: "0deg",
        easing: "easeOutExpo",
        duration: "650",
      });
    }
  );
});
