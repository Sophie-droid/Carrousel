
$(document).ready(function(){

var $carrousel = $('#carrousel'),
$img = $('#carrousel img'),
$points = $('.cercle'),
indexImg = $img.length - 1,
i = 0,
$currentImg = $img.eq(i);
$currentPoint = $points.eq(i);
$img.css('display','none');
$currentImg.css('display','block');
$currentPoint.css('background','black');


$('.next').click(function(){ 
$('.cercle').css('background','grey');
  i++;
  if( i <=indexImg){
    $img.css('display','none');
    $currentImg = $img.eq(i);
    $currentPoint = $points.eq(i);
    $currentImg.css('display','block');
    $currentPoint.css('background','black');
}


else{
    i = indexImg;

}

});

$('.prev').click(function(){
$('.cercle').css('background','grey');

    i--;

    if( i >= 0){
        $img.css('display','none');
        $currentImg = $img.eq(i);
        $currentPoint = $points.eq(i);
        $currentImg.css('display','block');
        $currentPoint.css('background','black');
    }
    else{
        i = 0;
    }
});

function slideImg(){
    setTimeout(function(){
        
        if(i < indexImg){
            i++;
        }
        else{
            i = 0;
        }
    $img.css('display','none');
$('.cercle').css('background','grey');
    $currentImg = $img.eq(i);
    $currentPoint = $points.eq(i);
    $currentImg.css('display','block');
 $currentPoint.css('background','black');
    slideImg();

        }, 7000);
}

slideImg();

});