jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});


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



var clicks = 0;
function linkClick() {
    document.getElementById('clicked').value = ++clicks;
}


$('.viewClick').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "/gflow/question/views/" + id.id,
    success: function (data) {

      var views = data

      console.log(views)

      $('#'+id.id).text(views[0])
      $('#'+id.id).prepend('<i id="" class="" aria-hidden="true"></i>')
      $('#').css("color", "green")
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

      var comments = data

      console.log(comments)

      $('#'+id.id).text(comments[0])
      $('#'+id.id).prepend('<i id="" class="" aria-hidden="true"></i>')
      $('#').css("color", "green")
    }
  })
})
