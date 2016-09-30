
jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
})


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

$('.favoriteQs').on('click', function() {

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "/gflow/question/favorite/" + id.id,
    success: function (data) {

      var favorite = data;
      console.log(favorite);

      $('#'+id.id ).text(favorite[0])
      $('#'+id.id ).prepend('<i id="star {{this.question_id}}" class=" fa fa-star-o" aria-hidden="true"></i>')
      $('#star').css("color", "yellow")
    },
    error: function(err){
      console.log(err);
    }
  })
});
