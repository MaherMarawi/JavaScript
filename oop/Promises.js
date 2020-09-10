// 'use strict';

// function fetchJSON(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType = 'json';
//     xhr.onload = () => {
//         if (xhr.status == 200) {
//           resolve(xhr.response);
//         } else {
//           reject('There is an error ...');
//         }
//     };
//     xhr.send();
//   });
// }
// // alternative:
// // const fetchJSON = url => fetch(url).then(res => res.json());

// const url = 'http://api.nobelprize.org/v1/laureate.json?gender=female';

// fetchJSON(url)
//   .then(data => renderData(data))
//   .catch(err => renderError(err));

// function renderData(data) {
//   let newData = JSON.stringify(data)
//   console.log(newData)
//   $('#container')[0].innerHTML = newData
// }

// function renderError(err) {
//   $('#container')[0].innerHTML = err
// }
const url = 'http://api.nobelprize.org/v1/laureate.json?gender=female';
async function fetchJSON(){
    const xhr = new XMLHttpRequest();
    await xhr.open('GET', url,true);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status == 200) {
        let newData = JSON.stringify(xhr.response)
        console.log(newData)
        $('#container')[0].innerHTML = newData
      }
    };
    xhr.send();
  }
  fetchJSON(url)
  
