$(document).ready(() => {
  const dict = {};
  $('input[type="checkbox"]').change(function () {
    const name = $(this).attr('data-name');
    const id = $(this).attr('data-id');
    if (this.checked) {
      dict[name] = id;
    } else {
      delete dict[name];
    }
    if (Object.keys(dict).length > 0) {
      $('#am_h4').text(Object.keys(dict).join(', '));
    } else {
      $('#am_h4').html('&nbsp;');
    }
  });

  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (res) {
      if (res.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
