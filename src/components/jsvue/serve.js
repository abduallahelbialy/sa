export function setupListClick() {
  let list = document.querySelectorAll("ul li");
  let content = Array.prototype.slice.call(
    document.querySelectorAll(".content div")
  );

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

export function setupLabelClick() {
  $("label").click(function () {
    $(".tab").hide();
    $(this).next(".tab").fadeIn(500);
  });
}
export function setupSwipers() {
  var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
export function setupWOW() {
  new WOW().init();
}