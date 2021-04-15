
$(function () {

   const typed = new Typed(".typing-text", {
      strings: ["Bui Minh Thuan", " A Frontend Developer!"],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
   })


   $('.hamber').click(function (e) {
      e.preventDefault();
      console.log("hihi");
      $('.navbar').toggleClass('active-navbar');
      $(this).toggleClass('active-hamber');
   });

   const cusor = document.querySelector(".cusor");
   document.addEventListener("mousemove", (e) => {
      cusor.style.left = e.pageX + "px";
      cusor.style.top = e.pageY + "px";

      this.querySelectorAll('.player').forEach(layer => {
         const speed = $(layer).data('speed');

         const x = (window.innerWidth - e.pageX * speed) / 100;
         const y = (window.innerHeight - e.pageY * speed) / 100;

         layer.style.transform = `translate(${x}px, ${y}px)`
      })
   })
   renderShapes();

});

function renderShapes() {
   for (let i = 1; i <= 9; i++) {
      const random = Math.floor(Math.random() * 2);
      $(
         ` <img class="player" data-speed=${4 + random} src="./images/shape${i}.svg" alt="">`
      ).appendTo('.shapes')
   }
}

