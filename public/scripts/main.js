
$('button').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "resources/new/like/" + id.id + "",
    success: function (data) {

      var likes = data
      var id =
      console.log(likes)
      $('#heart').css("color", "red")
      $('#id').text(data)
    }
  })
})
