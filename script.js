$(function() {
  load_page('0.html')
})

function load_page(x) {
  // start by deleting all existing buttons
  $("button").remove();

  // create the new element to hold the next part of the Story
  s = document.createElement('section');
  $(s).appendTo($("article"));

  // load the next page into the newly created element
  $("section").last().load(x);
}
