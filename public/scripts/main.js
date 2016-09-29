
$('button').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "resources/new/like/" + id.id + "",
    success: function (data) {

      var likes = data

      console.log(likes)

      $('#'+id.id).text(likes[0])
      $('#'+id.id).prepend('<i id="heart" class="fa fa-heart-o" aria-hidden="true"></i>')
      $('#heart').css("color", "red")
    }
  })
})


$('button2').on('click', function() {

  var id = {
    id: $(this).attr('questionid')
  }
  $.ajax({
    type: "POST",
    url: "gflow/question/like/" + id.questionid,
    success: function (data) {

      var likes = data

      console.log(likes)

      $('#'+id.questionid).text(likes[0])
      $('#'+id.questionid).prepend('<i id="heart" class="fa fa-heart-o" aria-hidden="true"></i>')
      $('#heart').css("color", "red")
    }
  })
})
