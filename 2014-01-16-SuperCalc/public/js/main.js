$(document).ready(initialize);

function initialize(){
  $('.inputs').click(displayNumber);
  $('#toggle').click(changeSign);
  $('#queueClear').click(clearQueue);
  $('#push').click(pushQueue);
  $('.ops').click(compute);
}
function displayNumber(){
  var display = $('#display').text();
  var current = this.textContent;
  var output;

  if(current === '.' && display.indexOf('.') !==-1)return;

  if (display === '0' && current !=='.')
    output = current;
  else
    output = display + current;

  $('#queueClear').text('Clear Display')
  $('#display').text(output);
}

function changeSign(){
  var display = $('#display').text();
  $('#display').text(display * -1);
}

function clearQueue(){
  var display = $('#display').text();
  if (display !== 0)
    $('#display').text(display * 0);
    $('#queueClear').text('Clear Queue');
 
  if (display ==0)
    $('#queue').text('');
}

function pushQueue(){
  var display = $('#display').text();
  var $li = $('<li>');
  $li.text(display);
//  $li.addClass('factors');
  $('#queue').prepend($li);
  $('#display').text(display * 0);
  $('#queueClear').text('Clear Queue');
}

function compute(){
  var operator = this.id;
  $('#queueClear').text('Clear Display')
  var $lis =$('#queue li');
  var results;
  var numbers = parseTags($lis);

  /*
  var $lis =$('#queue li');
  var x = parseFloat($lis[0].textContent);
  var y = parseFloat($lis[1].textContent);
*/
  switch(operator){
    case 'add':
      parseTags($lis);



      var $lis =$('#queue li');
      var x = parseFloat($lis[0].textContent);
      var y = parseFloat($lis[1].textContent);
      var sum = x + y;
      sum = Math.round(sum * 10000000) / 10000000;
    $('#display').text(sum);
    $('#queue').empty();
    break;
    case 'sub':
      var $lis =$('#queue li');
      var x = parseFloat($lis[0].textContent);
      var y = parseFloat($lis[1].textContent);
      var minus = y - x;
      minus = Math.round(minus * 10000000) / 10000000;
    $('#display').text(minus);
    $('#queue').empty();
    break;
    case 'mul':
      var $lis =$('#queue li');
      var x = parseFloat($lis[0].textContent);
      var y = parseFloat($lis[1].textContent);
      var multi = x * y;
      multi = Math.round(multi * 10000000) / 10000000;
    $('#display').text(multi);
    $('#queue').empty();
    break;
    case 'div':
      var $lis =$('#queue li');
      var x = parseFloat($lis[0].textContent);
      var y = parseFloat($lis[1].textContent);
      var divide = y / x;
      divide = Math.round(divide * 10000000) / 10000000;
    $('#display').text(divide);
    $('#queue').empty();
    break;
    
    case 'sum':
      var $lis =$('#queue li');
      var alpha = 0;
      for(var i=0; i <$lis.lenght; i++)
        alpha = alpha +parseFloat($lis[i].textContent);
      beta = Math.round(alpha * 10000000) / 10000000;
    $('#display').text(beta);
    $('#queue').empty();
    break;
    case 'prod':
      var $lis =$('#queue li');
      var x = parseFloat($lis[0].textContent);
      var y = parseFloat($lis[1].textContent);
      var delta = x * y;
      delta = Math.round(delta * 10000000) / 10000000;
    $('#display').text(delta);
    $('#queue').empty();
    break;
    
    case 'pow':
      var $lis =$('#queue li');
      var x = parseFloat($lis[0].textContent);
      var y = parseFloat($lis[1].textContent);
      var expo = Math.pow(y,x);
      expo = Math.round(pow * 10000000) / 10000000;
    $('#display').text(expo);
    $('#queue').empty();
    break;
    case 'sqr':
      var $lis =$('#queue li');
      var x = parseFloat($lis[0].textContent);
      var root = Math.sqrt(x);
      root = Math.round(root * 10000000) / 10000000;
    $('#display').text(root);
    $('#queue').empty();
    break;
  }
}
