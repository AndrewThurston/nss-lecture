$(document).ready(initialized);

function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
}

function calculate(){
  var num1 = $('#num1').val();
  var num2 = $('#num2').val();
  x= parseFloat(mum1);
  y= parseFloat(num2);
  var op = $('#op').val();
}
function compute(){
  if op ==='+'
    x+y;
    break;
  else if op ==='-'
    x-y;
    break;
  else if op ==='*'
    x*y;
    break;
  else op ==='/'
    x/y;
  return result;
}

function clear(){
  
}
