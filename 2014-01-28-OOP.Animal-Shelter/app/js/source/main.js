(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('add-photo').click(addPhoto)
  }

  function addPhoto(){
    var url = $('#photo').val();
    var $div = $('<div>');
    $div.css('background-image', url);
    $('#images').append($div);
  }

})();

