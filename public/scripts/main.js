$('#likes').on('click', function(event) {
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: "/new/like",
    success: function () {
      
    }
  })
})
