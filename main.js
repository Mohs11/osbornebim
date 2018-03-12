// Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut(1000);;
  });

 /*Message*/
console.log("Hello there, looking for errors, bugs, complications, conundrums, problems, puzzles or out of place characters? Well that's ok, hopefully you won't find any :)");

/*Nav Open and Close */ $(document).ready(function(){   
    $(".button a, #openmenu").click(function(){     
      $(".overlay").fadeIn(500);   
    });
      $(".overlay").click(function(){
        $(".overlay").fadeOut(500)
      ;})
});

/*Contact Trigger*/
$(document).ready(function(){
  $('#contacttrig').click(function(){     
  $('#contactsection').slideDown(500)});
  $('#contactmenu').click(function(){
  $('#contactsection').slideToggle(500)});
});

/*Lego*/
$(document).ready(function(){
  $('#legotrig').click(function(){
    $('#lego').slideDown(400);})
  $('#closelego').click(function(){
    $('#lego').slideUp(400);})
});

/*About this site*/
$(function(){
  $('#abouttrig').click(function(){
    $('#about').slideToggle(400);})
});

/*Open all or Close all Tools*/
$(function(){
  $('.cardinfotrigopen').click(function(){
    $('.cardinfo').slideDown(400);})
  $('.cardinfotrigclose').click(function(){
    $('.cardinfo').slideUp(400);})
});

/*Toggle EVERYTHING INDI*/
$(function() {
  $('.atribclass').on('click', function(){
    var hidden = $(this).attr('data-hidden');
    $('#'+hidden).toggle(400);
  });
});

/*Number Counter*/
$(function(){
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 2500,
      easing:'swing',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });  
  });
});

//JQ Search List for Glossary

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("glossTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}



function sortTable(f,n){
    var rows = $('#glossTable tbody  tr').get();

    rows.sort(function(a, b) {

        var A = getVal(a);
        var B = getVal(b);

        if(A < B) {
            return -1*f;
        }
        if(A > B) {
            return 1*f;
        }
        return 0;
    });

    function getVal(elm){
        var v = $(elm).children('td').eq(n).text().toUpperCase();
        if($.isNumeric(v)){
            v = parseInt(v,10);
        }
        return v;
    }

    $.each(rows, function(index, row) {
        $('#glossTable').children('tbody').append(row);
    });
}
var f_sl = 1; // flag to toggle the sorting order
var f_nm = 1; // flag to toggle the sorting order
$("#sl").click(function(){
    f_sl *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_sl,n);
});
$("#nm").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
});
//JQ Search List for Glossary


/*Gradient for BIM Data*/
var colors = new Array(
  [51,51,51],
  [56,56,56],
  [91, 7, 53],
  [50, 1, 25],
  [44, 62, 80],
  [100,33,0],
  [0,0,0]);


var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
/*Gradient for BIM Data*/

