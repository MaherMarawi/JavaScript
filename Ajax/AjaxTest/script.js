var header = document.getElementById('header');



var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users' , true);
    xhr.onprogress = function(){
        document.getElementById('users').innerHTML = '<h1>Loading...</h1>';
    }
    xhr.onload = function(){
        if (this.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var output = '';
            for (var i in data) {
                output += '<ul class="user"> <li> id: '+data[i].id+' login :'+data[i].login+'</li></ul>'
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();

