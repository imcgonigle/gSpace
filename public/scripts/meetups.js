/**
 * Created by lisa on 9/29/16.
 */
$('.meetupLikes').on('click', function() {

    var id = {
        id: $(this).attr('id')
    }
    $.ajax({
        type: "POST",
        url: "/like/" + id.id,
        success: function (data) {

            var likes = data

            console.log(likes)

            $('#'+id.id).text(likes[0])
            $('#'+id.id).prepend('<i id="heart" class="fa fa-heart-o" aria-hidden="true"></i>')
            $('#heart').css("color", "red")
        }
    })
})

