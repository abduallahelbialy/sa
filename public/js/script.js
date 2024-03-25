window.onload = function () {
    $('#door').click(()=>{
       $('.left_popu').toggleClass('hoop')
       
    })
    function checkScreenSize() {
      var screenSize = $(window).width();
  
      if (screenSize <= 994) {
        $('.main_').removeClass('col-lg-10').addClass('col-lg-12');
        $('.aside').hide();
        $('.left_popu').removeClass('d-none').addClass('d-flex');

      } else {
        $('.main_').removeClass('col-lg-12').addClass('col-lg-10');
        $('.aside').show();
        $('.left_popu').removeClass('d-flex').addClass('d-none');
      }
    }
  
    checkScreenSize();
  
    $(window).resize(function() {
      checkScreenSize();
    });
        function checkScreenSize3() {
          var screenSize = $(window).width();
      
          if (screenSize <= 720) {
            $('#card_proff').removeClass('col-lg-6').addClass('col-lg-12');
          } else {
            $('#card_proff').removeClass('col-lg-12').addClass('col-lg-6');
          }
        }
      
        checkScreenSize3();
      
        $(window).resize(function() {
          checkScreenSize3();
        });
        function checkScreenSize2() {
          var screenSize = $(window).width();
      
          if (screenSize <= 990) {
            $('.toggle_').css('display','inline');
          } else {
            $('.toggle_').css('display','none');
           
        }
        }
      
        checkScreenSize2();
      
        $(window).resize(function() {
          checkScreenSize2();
        });
      
    $('.toggle_').click(() => {
        $('.block').toggleClass('not_active')
    })
    $('.loading').fadeOut(500);
   $('.top-btn').click(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    const buttons = document.querySelectorAll('.send_card');
    buttons.forEach(button => {
      $(button).click(() => {
          console.log('sgkfsgkmsmk');
          $('.parent_popup').fadeIn();
          $('.parent_popup').addClass('display-flex-important');
          $('.form_payment').fadeOut(10)
          $('.success_popup').fadeOut(10)
      $('.question_popup').fadeOut(10)

      });
  });
  $('.conf').click(()=>{
      $('.list_popup__').slideDown(1000);
      $('.form').css('display' , 'none');
      console.log('suc');
  })
  $('.btn_tsrf').click((event)=>{
    event.preventDefault();
    $('.form_payment').slideDown(1000);
      $('.form').css('display' , 'none');
      $('.list_popup__').css('display' , 'none');
      console.log('suc');
  })
  $('.conf_btn').click(()=>{
      $('.question_popup').slideDown(1000)
      $('.form_payment').css('display' , 'none');
      $('.form').css('display' , 'none');
      $('.success_popup').css('display' , 'none');
      console.log('suc');
  })
  $('.close_success_popup').click(()=>{
      $('.parent_popup').removeClass('display-flex-important');
      $('.parent_popup').fadeOut()
      $('.form_payment').fadeIn(10)
          $('.success_popup').fadeIn(10)
          $('.form').css('display' , 'block');
  })
  $('.btn').click(()=>{
      $('.parent_popup').removeClass('display-flex-important');
      $('.parent_popup').fadeOut()
      $('.form_payment').fadeIn(10)
          $('.success_popup').fadeIn(10)
          $('.form').css('display' , 'block');
  })
  $('.cans_btn').click(()=>{
      $('.parent_popup').removeClass('display-flex-important');
      $('.parent_popup').fadeOut()
      $('.form_payment').fadeIn(10)
          $('.success_popup').fadeIn(10)
          $('.form').css('display' , 'block');
  })
  $('.close_btn_').click(() => {
      $('.parent_popup').removeClass('display-flex-important');
      $('.parent_popup').fadeOut()
      $('.form_payment').fadeIn(10)
          $('.success_popup').fadeIn(10)
          $('.form').css('display' , 'block');

  });
  $('.ques_yes_popup').click(() => {
    $('.success_popup').slideDown(1000)
    $('.form_payment').css('display' , 'none');
    $('.form').css('display' , 'none');
    $('.question_popup').css('display' , 'none');
    console.log('suc');

  });
  $('.ques_no_popup').click(() => {
    $('.success_popup').slideDown(1000)
    $('.form_payment').css('display' , 'none');
    $('.form').css('display' , 'none');
    $('.question_popup').css('display' , 'none');
    console.log('suc');

  });
  




    function saveTableData() {
        var table = document.querySelector('.table');
        var tableHTML = table.innerHTML;
        localStorage.setItem('savedTable', tableHTML);
    }
    function loadTableData() {
        var savedTable = localStorage.getItem('savedTable');
        if (savedTable) {
            var table = document.querySelector('.table');
            table.innerHTML = savedTable;
        }
    }

    var counter = 3;
    var headAdd = `<th>Period ${++counter}</th>`;
    var bodyAdd = `
         <td class="js-maaaan">
           <input type="checkbox" name="" id="fiveteen">
           <label for="fiveteen">
             <p>SELECTED</p>
          </label>
         </td>`;

    $('.confim_btn2').click(() => {
        var table = document.querySelector('.table');
        var newColumn = document.createElement('th');
        newColumn.textContent = 'New Period';
        newColumn.classList.add('plus');
        var newPeriod = document.createElement('td');
        newPeriod.textContent = 'From ' + document.getElementById('date_').value + ' AM - ' + document.getElementById('date__').value + ' AM';
        var firstRow = table.rows[0];
        firstRow.insertBefore(newColumn, firstRow.querySelector('.plus'));
        var date = table.querySelector('.date');
        var newRowspan = date.querySelector('.rowspan');
        var newPeriodCell = document.createElement('td');
        newPeriodCell.textContent = 'From ' + document.getElementById('date_').value + ' AM - ' + document.getElementById('date__').value + ' AM';
        date.insertBefore(newPeriodCell, newRowspan);
        var rows = table.querySelectorAll('.my-3');
        rows.forEach(function (row) {
            var newRowspan = row.querySelector('.rowspan');
            var newPeriodCell = document.createElement('td');
            newPeriodCell.classList.add('js-maaaan');
            var checkboxId = 'fiveteen' + (++counter);
            newPeriodCell.innerHTML = `
         <td class="">
           <input type="checkbox" name="" id="fiveteen${checkboxId}">
           <label for="fiveteen${checkboxId}">
             <p>SELECTED</p>
          </label>
         </td>`;
            row.insertBefore(newPeriodCell, newRowspan);
        });

        saveTableData();

    });
    window.addEventListener('load', loadTableData);
};
