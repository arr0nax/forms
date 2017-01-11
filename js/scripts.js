$(function() {
  $("form").submit(function() {
    var name = $('input#name').val();
    var address = $('input#address').val();
    var occupation = $('input#occupation').val();
    var dreams = $('input#dreams').val();
    var race = $('input#race').val();
    var born = $('input#born').val();
    var color = $('input#color').val();

    $('.return').append("<li>"+name+" is a stupid name.</li>");
    $('.return').append("<li>"+address+" is a stupid place.</li>");
    $('.return').append("<li>"+occupation+" is a stupid job.</li>");
    $('.return').append("<li>"+dreams+" is a stupid dream.</li>");
    $('.return').append("<li>"+race+" is a stupid race.</li>");
    $('.return').append("<li>"+born+" is a stupid day.</li>");
    $('.return').append("<li>"+color+" is a stupid color.</li>");
    event.preventDefault();
  })
})
