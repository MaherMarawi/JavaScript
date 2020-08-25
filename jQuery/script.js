$(document).ready(function(){
    //--------------------------------------------------------    
    //$('h1').hide();
    $('h1.head2').css('color','coral');
    $('header h1').css('color','coral');
    $('.para2 span').css('color','#cccccc');
    //$('.para2').hide();
    $('ul li:first').css('background-color','blue')
    //$('ul li:last').css('background-color','black')
    $('ul li:last').css('color','yellow')
    $('ul li:nth-child(3n)').css('font-weight','700')
    $('ul li:nth-child(1n)').css('padding','5px')
    $(':submit').css('background-color','#000')
    $(':submit').css('color','#cccccc')
    $(':button').css('font-weight','500')
    $('[href]').css('color','pink')
    $('[href="http://hihi2.com"]').css('background-color','cornsilk');

    // $('#btn1').click(function(){
    //     $('.para2').hide();
    // })
    // $('#btn1').on('click',function(){
    //     $('.para2').show();
    // })
    
    $('#btn1').on('click',function(){
         $('ul').toggle();
    })
    $('ul li').on('mouseenter',function(){
        $(this).css('font-size','30px');
        $(this).css('color','red');
    })
    $('ul li').on('mouseout',function(){
        $(this).css('font-size','18px');
        $(this).css('color','black');
    })
    /*
    ------------------------------------------------------------
    //// $(document.e.target).on('mouseenter',function(e) {
    ////     $(this).css('font-size','30px');
    //// })
    //// $(document).on('mouseout',function() {
    ////     $(this).css('font-size','18px');
    //})
    ------------------------------------------------------------
    $(document).on('mousemove',function(e){
        $('h1#x-y').html('x = '+e.clientX +' y = '+ e.clientY)
    })*/
    $('input').focus(function(){
        $(this).css('background-color','yellow')
    })
    $('input').blur(function(){
        $(this).css('background-color','white')
    })
    $('#btn2').on('click',function(){
        var head = $('input#name').val();
        $('header h1').text(head)
    })
    $('#form select').change(function(e){
        alert(e.target.value)
    })
    $('#form').submit(function(e){
        e.preventDefault();
        alert('submitted')
    })
    $('[href]').hover(function(){
        $(this).css({'font-size':'30px','color':'red'});
    })
    $('[href]').on('mouseout',function(){
        $(this).css({'font-size':'18px','color':'pink'});
    })
    $('[href]').attr('target','_blank');
    // $('#btn1').on('click',function(){
    //     $('.para2 span').addClass('myClass')
    // })
    // $('#btn1').on('click',function(){
    //     $('.para2 span').toggleClass('myClass')
    // })
    //$('ul').append('<li>list 8</li>')
    //$('ul').prepend('<li>list 0</li>')
    // $('#para1').appendTo('.para2')
    // $('#para1').prependTo('.para2')
    // $('ul').before('<h1>Welcom</h1>')
    // $('ul').after('<h1>bye</h1>')
    // $('ul').empty();
    // $('ul').detach();
    
    $('#newList').keyup(function(e){
        if (e.target.value != '') {
            if (e.which == 13) {
            $('#lists').append('<li>'+e.target.value+'</li>')
            }
        }else{
            alert('you have to write somthing')
        }
        
    })

    // var newarr = $('ul li').toArray();
    // $.each(newarr,function(i,val){
    //     console.log(val.innerHTML)
    // })

    // var myarr = ['ahmad','emad','noor','hatem'];
    // $.each(myarr,function(i,val){
    //     $('#users').append('<li>'+val+'</li>')
    // console.log(val)
    // })
    // $('a').attr('target','_blank');
    // $('a').removeAttr('target');

    //$('#newDiv').text('Hello World');
    //$('#newDiv').html('<h3>Hello World</h3>')


    //-----------------------------------------------fade

    $('#fadeout').click(function(){
        $('#square').fadeOut();
    })

    $('#fadein').click(function(){
        $('#square').fadeIn();
    })

    $('#fadetog').click(function(){
        $('#square').fadeToggle();
    })
    //-----------------------------------------------slide

    $('#slideUp').click(function(){
        $('#square').slideUp();
    })

    $('#slideDown').click(function(){
        $('#square').slideDown();
    })
    $('#slideTog').click(function(){
        $('#square').slideToggle()
    })
    $('#stop').click(function(){
        $('#square').stop();
    })
    //-------------------------------------------------animatie
    $('#animRight').click(function(){
        $('#square').animate({
            left:500,
            width:'300px',
            height:'300px',
            opacity:'0.5'
        })
    })
    $('#animLeft').click(function(){
        $('#square').animate({
            left:0,
            width:'100px',
            height:'100px',
            opacity:'1'
        })
    })
    $('#animTog').click(function(){
        $('#square').animate({
            left:300,
        })
        $('#square').animate({
            left:300,
            top:300,
        })
        $('#square').animate({
            top:300,
            left:0
            
        })
        $('#square').animate({
            left:0,
            top:0
            
        })
    })
    //---------------------------------------------------


});