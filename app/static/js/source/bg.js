(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#change_bg_wrap').hide();
    //$('#meetup-submit').click(submitMeetup);
    $('#change_bg').click(show_switch_options);
    $('#close_bg').click(hide_switch_options);
    $('#try_bg').click(try_bg);
    $('#set_bg').click(set_bg);
    background();
  }

  function background(){
    if($('#regLog').text() === 'Register/Login'){
      $('body').css('background', '-webkit-linear-gradient(-45deg, #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 96%,#9fd8ef 96%,#2ab0ed 100%)').css('background', '-moz-linear-gradient(-45deg, #cfe7fa 0%, #6393c1 100%)');
    }else{
      var bg = $('.bg_val').attr('value');

      switch(bg){
      case 'Wood Wall':
        $('body').css('background', 'url("/img/bg.jpg") fixed');
        break;
      case 'Destiny':
        $('body').css('background', 'url("/img/maxresdefault.jpg") fixed');
        break;
      case 'Waterfall':
        $('body').css('background', 'url("/img/waterfall.jpeg") fixed');
        break;
      case 'Game Of Thrones':
        $('body').css('background', 'url("/img/got.jpg") fixed');
        break;
      }
    }
  }

  function show_switch_options(){
    $('#fullSearchPanel').hide();
    $('#change_bg_wrap').fadeToggle(500);
  }

  function hide_switch_options(){
    $('#change_bg_wrap').fadeOut(500);
  }

  function try_bg(){
    var bg = $('#select_bg').val();

    switch(bg){
    case 'Wood Wall':
      $('body').css('background', 'url("/img/bg.jpg")');
      break;
    case 'Destiny':
      $('body').css('background', 'url("/img/maxresdefault.jpg")');
      break;
    case 'Waterfall':
      $('body').css('background', 'url("/img/waterfall.jpeg") fixed');
      break;
    case 'Game Of Thrones':
      $('body').css('background', 'url("/img/got.jpg") fixed');
      break;
    }
  }

  function set_bg(){
    var id = $('#select_bg').attr('value');
    var bg = $('#select_bg').val();
    var data = {bg:bg};
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/setBg/' + id;
    var type = 'PUT';
    var success = function(count){
      debugger;
      alert('Enjoy your new background!');
      var Id = $('#noteIcon').attr('value');
      if(Id !== undefined){
        window.location.replace('/fullNote/' + Id);
      }else{
        window.location.replace('/notes');
      }
      //try_bg();
    };
    $.ajax({url:url, type:type, data:data, success:success});
  }

})();
