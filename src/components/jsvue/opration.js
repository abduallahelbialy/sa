export function hideElements() {
  $("#hide_hide").fadeOut();
  $("#show_show").fadeOut();
  $(".nummin").fadeOut();
}

export function showHideElement() {
  $(".btn_noo").click(() => {
    $("#hide_hide").fadeIn();
  });

  $(".no_").click(() => {
    for (let i = 0; i <= 100; i++) {
      $("#loop").append(`
                <option value="">${i}</option>                    
            `);
    }
    $("#show_show").fadeIn(1500);
    $("#show_show").css("display", "flex");
    $(".fs_ .butu").fadeOut(1000);
  });
}

export function handleMintChange() {
  $(".mint").change(() => {
    if ($(".mint").val() == "other") {
      console.log($(".mint").val());
      $(".nummin").fadeIn();
    }
  });
}

export function showPopup3() {
  $(".popup3").fadeOut(10);
  $(".popup3").fadeOut();
  $("._plus_").click(() => {
    $(".popup3").fadeIn();
  });
}

export function closePopup3() {
  $(".cancel3").click(() => {
    $(".popup3").fadeOut();
  });

  $(".c3").click(() => {
    $(".popup3").fadeOut();
  });
}

export function setupSwiper() {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

    return direction;
  }
}

export function setupLabelClick() {
  $("label").click(function () {
    $(".tab").hide();
    $(this).next(".tab").fadeIn(500);
  });
}
export function setupFormNavigation() {
  $(".button").click(function () {
    var button = $(this);
    var currentSection = button.parents(".section");
    var currentSectionIndex = currentSection.index();
    var headerSection = $(".steps li").eq(currentSectionIndex);
    currentSection.removeClass("is-active").next().addClass("is-active");
    headerSection.removeClass("is-active").next().addClass("is-active");

    $(".form-wrapper").submit(function (e) {
      e.preventDefault();
    });

    if (currentSectionIndex === 9) {
      $(document).find(".form-wrapper .section").first().addClass("is-active");
      $(document).find(".steps li").first().addClass("is-active");
    }
  });

  $(document).on("click", ".button_preve", function () {
    var button = $(this);
    var currentSection = button.parents(".section");
    var currentSectionIndex = currentSection.index();
    var headerSection = $(".steps li").eq(currentSectionIndex);

    if (currentSectionIndex > 0) {
      currentSection.removeClass("is-active").prev().addClass("is-active");
      headerSection.removeClass("is-active").prev().addClass("is-active");
    }

    $(".form-wrapper").submit(function (e) {
      e.preventDefault();
    });

    if (currentSectionIndex === 8) {
      $(document).find(".form-wrapper .section").first().addClass("is-active");
      $(document).find(".steps li").first().addClass("is-active");
    }
  });
}
export function initializeFormNavigation() {
    var currentStep = 1;

    function showStep(step) {
        var steps = document.querySelectorAll('.fieldset');
        steps.forEach(function(step) {
            step.style.display = 'none';
        });

        var stepId = 'step' + step;
        document.getElementById(stepId).style.display = 'block';
    }

    function nextStep() {
        currentStep = currentStep + 1;
        showStep(currentStep);
    }

    function prevStep() {
        currentStep = currentStep - 1;
        showStep(currentStep);
    }

    showStep(currentStep);

    var nextButton = document.querySelectorAll(".button.bt_n2");
    var prevButton = document.querySelectorAll(".button_preve");

    nextButton.forEach(function(button) {
        button.addEventListener('click', nextStep);
    });

    prevButton.forEach(function(button) {
        button.addEventListener('click', prevStep);
    });
}
