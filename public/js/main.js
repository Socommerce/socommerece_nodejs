$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('a.video-watch').click(function(e) {
    e.preventDefault();
    $.post( "/api/youtube/togglepoll", {
      videoPrimaryId: $(e.target).data('videoPrimaryId'),
      _csrf: $('[name="_csrf"]').val()
    }, function(data) {
      if (data.status == 'ok')
        window.location.reload();
    });
  });
  $('a.video-remove').click(function(e) {
    e.preventDefault();
    $.post( "/api/youtube/removevideo", {
      videoPrimaryId: $(e.target).data('videoPrimaryId'),
      _csrf: $('[name="_csrf"]').val()
    }, function(data) {
      if (data.status == 'ok')
        window.location.reload();
    });
  })
  $('a.video-purge').click(function(e) {
    e.preventDefault();
    $.post( "/api/youtube/purgevideo", {
      videoPrimaryId: $(e.target).data('videoPrimaryId'),
      _csrf: $('[name="_csrf"]').val()
    }, function(data) {
      if (data.status == 'ok')
        window.location.reload();
    });
  })

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

 
   $('#jsoninput').change(function() {
      if($(this).val()) {
        $('#jsonupload').removeAttr("disabled");
      } else {
        $('#jsonupload').attr('disabled', true);
      }
    });
 

});
