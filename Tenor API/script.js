
$('#button1').on('click',function(){
    $('#gifs').empty();
    var search = $('#name').val() ;
    var lmt = $('#lmt').val() ;
    if (lmt > 50) {
        lmt = 50;
    }
    if (search != '' && lmt != 0) {
        getGifs(search,lmt)
    }else{
        $('#gifs').append('<h1 class="display-1">You have to fill all fields</h1>');
    }
})

function getGifs(name,number) {
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.tenor.com/v1/search?q=" + name + "&key=D4SHK5J6H1FQ&limit=" + number , true);
xhr.onprogress = function(){
    $('#load').append('<h1>loading...</h1>');
}
xhr.onload = function(){
if (this.status == 200) {
    console.log(xhr.responseText)
    
    var data = JSON.parse(xhr.responseText); 
    var top_10_gifs = data["results"];
    $('#load').empty();
    if (top_10_gifs.length > 0) {
        for (let i in top_10_gifs ) {
            var img = $('<img class="imgClass">');
            img.attr('src',top_10_gifs [i]["media"][0]["nanogif"]["url"]);
            $('#gifs').append(img);
            }
    }else{
        $('#gifs').append('<h1 class="display-1">No results ... Try another thing</h1>');
    }
    }
}
xhr.send(null);
}

    

