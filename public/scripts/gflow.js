
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
      $('#'+id.id).prepend('<i id="heart" class="fa fa-heart-o" aria-hidden="true"></i>')
      $('#heart').css("color", "red")
    }
  })
})

jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});
