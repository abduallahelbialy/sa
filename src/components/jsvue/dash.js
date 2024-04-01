export function menuClickHandler() {
  $("#menu_").click(() => {
    $(".list_popup__").slideDown(2500);
    $(".q_p").slideUp(1000);
  });
}

export function selectChangeHandler() {
  $(".select_").change(() => {
    swal("Status changed");
  });
}

export function hidePopups() {
  $(".popup").fadeOut();
  $(".popup2").fadeOut();
  $(".list_popup__").hide();
}

export function closeListClickHandler() {
  $("#close_list").click((e) => {
    e.preventDefault();
    $(".list_popup__").slideUp();
  });
}

export function showPopupOnClick() {
  var views = document.querySelectorAll(".view_all");
  views.forEach(function (view) {
    view.onclick = function () {
      $(".popup").fadeIn();
    };
  });
  var send_card = document.querySelectorAll(".send_card ");
  send_card.forEach(function (send_cards) {
    send_cards.onclick = function () {
      $(".popup2").fadeIn();
    };
  });
}

export function nowElementsClickHandler() {
  var nowElements = Array.from(document.querySelectorAll("#now_"));
  $(".q_p").fadeOut();
  nowElements.forEach((element) => {
    element.addEventListener("click", () => {
      $(".q_p").fadeIn();
      $(".q_p").removeClass("opa");
      $(".question_popup").fadeIn();
      console.log("dsgkvmksfmvdkmksdkv");
    });
  });
}

export function questionYesClickHandler() {
  $(".ques_yes_popup").click(() => {
    $(".question_popup").fadeOut();
    $(".question_popup").addClass("cp_");
    $(".card_pop_").removeClass("cp_");
    console.log("dsgknbfnsjlv");
  });
}

export function closeButtonClickHandler() {
  $(".close_").click(() => {
    $(".q_p").fadeOut();
    $(".question_popup").removeClass("cp_");
    $(".card_pop_").addClass("cp_");
  });
}

export function questionNoClickHandler() {
  $(".ques_no_popup ").click(() => {
    $(".q_p").fadeOut();
  });
}

export function c2ClickHandler() {
  $(".c2 ").click(() => {
    $(".q_p").fadeOut();
    $(".question_popup").removeClass("cp_");
    $(".card_pop_").addClass("cp_");
  });
}

export function cClickHandler() {
  $(".c").click(() => {
    $(".popup").fadeOut();
  });
  $(".cancel").click(() => {
    $(".popup").fadeOut();
  });
}

export function c2ClickHandlerPopup2() {
  $(".c2").click(() => {
    $(".popup2").fadeOut();
  });
  $(".cancel2").click(() => {
    $(".popup2").fadeOut();
  });
}

export function setupSwiper() {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function checkScreenSize() {
    var screenSize = $(window).width();

    if (screenSize <= 500) {
      var swiper = new Swiper(".swiper", {
        slidesPerView: 0.9,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }

  checkScreenSize();

  $(window).resize(function () {
    checkScreenSize();
  });
}

export function setupLabelClick() {
  $("label").click(function () {
    $(".tab").hide();
    $(this).next(".tab").fadeIn(500);
  });
}
