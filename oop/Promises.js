'use strict';

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(new Error(xhr.statusText));
        }
      }
    };
    xhr.send();
  });
}

// alternative:
// const fetchJSON = url => fetch(url).then(res => res.json());

const url = 'http://apinobelprize.org/v1/laureate.json?gender=female';

fetchJSON(url)
  .then(data => renderData(data))
  .catch(console.error('There is an error'));

function renderData(data) {
  let newData = JSON.stringify(data)
  console.log(newData)
  $('#container')[0].innerHTML = newData
}

// function renderError(err) {
//   console.error('dfsdf');
// }