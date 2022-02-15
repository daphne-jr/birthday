import * as _ from 'lodash';

var msg =
"Happy Birthday Yoga!!     ";
var chars = Array.from(msg);

function scrollTitle() {
chars.push(chars.shift());
document.title = chars.join("");
window.setTimeout(scrollTitle, 300);
}

(function() {
scrollTitle();
})();

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('hi')
