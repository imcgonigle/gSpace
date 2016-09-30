
jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();

  $('.likeButton').on('click', function() {

$('.likeButton').on('click', function() {

    var id = {
      id: $(this).attr('id')
    }
    $.ajax({
      type: "POST",
      url: "/gflow/question/like/" + id.id,
      success: function (data) {

        var likes = data

        console.log(likes)

        $('#'+id.id).text(likes[0])
        $('#'+id.id).append('<i id="heart" class="fa fa-heart-o" aria-hidden="true"></i>')
        $('#heart').css("color", "red")
      }
    })
  })
})

$('.viewClick').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "/gflow/question/views/" + id.id,
    success: function (data) {
      return data;
    }
  })
})

$('.commentClick').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "/gflow/question/comments/" + id.id,
    success: function (data) {
      return data;
    }
  })
})
});
