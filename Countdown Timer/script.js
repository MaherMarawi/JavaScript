$('#btn').on('click',function count(){
    var z = $('#n_count').val();
    console.log(z)
    var countDownDate = new Date().getTime();
    countDownDate += (z * 60000)

var x = setInterval(function() {

    var now = new Date().getTime();
      
    var distance = countDownDate - now;
      
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.getElementById("time").innerHTML =  hours + " : "
    + minutes + " : " + seconds ;
      
    
    
  }, 1000);
})



    
