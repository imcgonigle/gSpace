$('.likes').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "/resources/new/like/" + id.id + "",
    success: function (data) {

      var likes = data


      $('#'+id.id).text(likes[0])
      $('#'+id.id).prepend('<i id="heart" class="fa fa-heart-o" aria-hidden="true"></i>')
      $('#heart').css("color", "red")
    }
  })
})

$('.favorites').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "/resources/new/favorite/" + id.id + "",
    success: function (data) {

      var favorite = data

      $('#star').css("color", "red")
    }
  })
})
