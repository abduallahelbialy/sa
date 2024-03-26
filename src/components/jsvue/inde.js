export function setupMainButton() {
  $(".main-btn").click(() => {
    $(".pop_parent_").toggleClass("ac_tive");
  });
}

export function setupSecondaryButtons() {
  $(".button_sec1").click(() => {
    $(".pop_parent_").toggleClass("ac_tive");
  });

  $(".right-sec2 button").click(() => {
    $(".pop_parent_").toggleClass("ac_tive");
  });
}

export function setupCloseButton() {
  $(".close").click(() => {
    $(".pop_parent_").toggleClass("ac_tive");
  });
}

export function setupOtherChoice() {
  $(".other_choice").change(() => {
    console.log("changes");
    if ($(".other_choice").val() == "other") {
      $(".append_").append(`
                    <div class="form-group">
                                <label for="">category Name</label> <br>
                                <input type="text" name="name" placeholder="category Name" id="input-index">
                    </div>
                    `);
      $(".hd").remove();
      $(".app").append(`
                    <div class="form-group">
                            <label for="">your mobile number</label> <br>
                            <input type="number" name="category" placeholder="number" name="category" id="input-index"
                                class="i_i i_i2">
                        </div>
                    `);
    }
  });
}

export function setupOtherChoice2() {
  $(".other_choice2").change(() => {
    console.log("changes2");
    if ($(".other_choice2").val() == "other") {
      $(".append_2").append(`
                    <div class="form-group">
                                <label for="">category Name</label> <br>
                                <input type="text" name="name" placeholder="category Name" class="i_i">
                    </div>
                    `);

      $(".company").remove();
      $(".compadd").append(`
                    <div class="form-group ">
                                            <label for="">company email</label> <br>
                                            <input type="email" name="category" placeholder="Modifier Name" name="category"
                                                class="i_i">
                                        </div>
                    `);
    }
  });
}

export function setupScrollEvent() {
  window.onscroll = () => {
    if (window.scrollY >= 590) {
      $(".button_sec1").css({
        bottom: "50px",
        right: "76px",
      });
    } else {
      $(".button_sec1").css({
        bottom: "2750px",
        right: "2950px",
      });
    }
  };
}

export function setupSwiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
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
}

export function setupLabelClickEvent() {
  $("label").click(function () {
    $(".tab").hide();
    $(this).next(".tab").fadeIn(500);
  });
}
