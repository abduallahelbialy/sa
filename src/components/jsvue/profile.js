export function setupSwitchButton() {
  $(".switch-button-checkbox").on("change", function () {
    var isChecked = $(this).is(":checked");
    $(this)
      .siblings(".switch-button-label")
      .find(".switch-button-label-span")
      .css("color", isChecked ? "black" : "white");
  });
}

export function setupListClick() {
  let list = document.querySelectorAll("ul li");
  let content = Array.from(document.querySelectorAll(".content div"));

  list.forEach((li) => {
    li.addEventListener("click", (e) => {
      list.forEach((li) => {
        li.classList.remove("active");
        e.currentTarget.classList.add("active");
      });

      content.forEach((div) => {
        div.classList.remove("active");
        document
          .querySelector(e.currentTarget.dataset.num)
          .classList.add("active");
      });
    });
  });
}
// export function setupSwiper() {
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// }
export function setupWOW() {
  new WOW().init();
}