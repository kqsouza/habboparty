import $ from "jquery";
import gsap from "gsap";

$(document).ready(function () {
  let isSearchActive = false;
  let tlgsap = gsap.timeline();

  //ANIMAÇÃO AO CLICAR NA BUSCA POR SALAS
  $(".music-note").click(function () {
    if (isSearchActive === false) {
      tlgsap.to(".music", { duration: 0.4, scale: 0.94, ease: "expo.out" });
      tlgsap.to(".music", {
        x: "-180%",
        rotate: -360,
        ease: "expo.out",
        duration: 1,
      });
      tlgsap.to(".sidebarmusic", {
        width: "400%",
        opacity: 1,
        visibility: "visible",
        duration: 0.6,
      });
      tlgsap.restart();
      console.log("Search ativo.");
      isSearchActive = true;
    }
  });

  $(".sidebarmusic .fa-times").click(function () {
    tlgsap.reverse(2);
    isSearchActive = false;
  });
});
