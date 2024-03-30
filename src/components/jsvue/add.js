export function hideListPopup() {
  $(".list_popup__").fadeOut();
}

export function setupSwiper() {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export function updateNumtaboor() {
  var numtaboor = document.querySelectorAll("#taboor");
  var title_bottom_button = document.querySelectorAll("#title_bottom_button");

  numtaboor.forEach((item) => {
    if (item.textContent.trim() === "0") {
      var parentCard = item.parentNode.parentNode;
      var targetTitle = parentCard.querySelector("#title_bottom_button");
      targetTitle.textContent = "Let me know if the queue start";
    }
  });
}

export function setupLabelClick() {
  $("label").click(function () {
    $(".tab").hide();
    $(this).next(".tab").fadeIn(500);
  });
}
export function setupWOW() {
  new WOW().init();
}
