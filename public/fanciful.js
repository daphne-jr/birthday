// constants
const message = 'Happy Birthday Yoga!!! ';

// Fanciful 1: scroll title
const chars = Array.from(message);

function scrollTitle() {
  chars.push(chars.shift());
  document.title = chars.join('');
  window.setTimeout(scrollTitle, 300);
}

scrollTitle();

// Fanciful 2:
