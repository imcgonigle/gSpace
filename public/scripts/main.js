
$('button').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "resources/new/like/" + id.id + "",
    success: function () {
      $('#heart').css("color", "red")
    }
  })
})
