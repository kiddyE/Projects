$(function () {
    $('#showall').click(function () {
        $('.target').show();
    });

    $('.single').click(function () {
        $('.target').hide();
        $('#div' + $(this).attr('target')).show();
    });
});

$(document).ready(function(){
    $(".container>.box1").click(function(){
        $(".main").addClass("class");
        $(".box2").removeClass("active");
        $(".box3").removeClass("active");
        $(".box1").addClass("active");
        if ($(this).is('.box1')){
            $(".main2").hide(100);
            $(".main3").hide(100);
            $(".main").show(100);
        } 
        // else
        // {
        //     $(".main").hide("fast");
        // }
    })
    $(".container>.box2").click(function(){
        $(".main2").addClass("class");
        $(".box1").removeClass("active");
        $(".box3").removeClass("active");
        $(".box2").addClass("active");
        
        if ($(this).is('.box2')){
            $(".main").hide(100);
            $(".main3").hide(100);
            $(".main2").fadeIn(100);
        } 
     
    })
    $(".container>.box3").click(function(){
        $(".main3").addClass("class");
        $(".box1").removeClass("active");
        $(".box2").removeClass("active");
        $(".box3").addClass("active");
        if ($(this).is('.box3')){
            $(".main").hide(100);
            $(".main2").hide(100);
            $(".main3").show(100);
        

        } 
     
    })
   
})