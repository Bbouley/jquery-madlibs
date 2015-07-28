$(document).ready(function(){

  console.log('hello worlds');

  $('#story').hide();

  $('#btn-click').click(function(event){
    event.preventDefault();
    $('.person').empty().append($('input.person').val());
    $('.adjective').empty().append($('input.adjective').val());
    $(".noun").empty().append($("input.noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());

    $('#story').show();

    $(':input').val(null);

    $('#questions').hide();
  });

});
