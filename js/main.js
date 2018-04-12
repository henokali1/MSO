$('.modal').modal({
  dismissible: true,
  inDuration: 300,
  outDuration: 200,
  ready: function(modal, trigger) {
    console.log('Modal Opened', modal, trigger);
  }
});

$('deny_modal').modal({
  dismissible: true,
  inDuration: 300,
  outDuration: 200,
  ready: function(modal, trigger) {
    console.log('Modal Opened', modal, trigger);
  }
});

$(document).ready(function() {
  $('a').hover(function() {
    $(this).css('cursor', 'pointer');
  });
  $('.row').hover(function() {
    // $(this).css('cursor', 'pointer');
    $(this).toggleClass('z-depth-5');
  });
  $('.li').hover(function() {
    // $(this).css('cursor', 'pointer');
    $(this).toggleClass('z-depth-5');
  });
});

$('.approve').click(function(e) {
  Materialize.toast('Approved', 3000);
  e.preventDefault();
});
