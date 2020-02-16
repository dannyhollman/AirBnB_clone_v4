$(document).ready(() => {
  let dict = {};
  $('input[type="checkbox"]').change(function () {
    let name = $(this).attr('data-name');
    let id = $(this).attr('data-id');
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
});
