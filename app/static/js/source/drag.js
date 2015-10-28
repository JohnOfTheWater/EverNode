(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){

    //draggable();
  }

  //function draggable(){
    //$('#newNote').draggable();
  //}

  var drags = '#newNote, #fullNoteWrap, #notesWrap, #noteWrap, #nprWrap, #control_panel, #bigPic, #audioWindow, #picturePanel';//add here your draggable divs

  $(function() {$(drags).draggable();});

})();

