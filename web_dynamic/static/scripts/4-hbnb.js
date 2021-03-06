$(document).ready(() => {
  $('button').click(function () {
    const list = [];
    const amenities = {};
    for (const id of Object.values(dict)) {
      list.push(id);
    }
    amenities.amenities = list;
    console.log(amenities);
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search',
      type: 'POST',
      data: JSON.stringify(amenities),
      dataType: 'json',
      contentType: 'application/json',
      success: function (places) {
        $('SECTION.places > article').remove();
        for (const place of places) {
          $('SECTION.places').append(`
          <article>

      <div class="title">

        <h2>${place.name}</h2>

        <div class="price_by_night">

    ${place.price_by_night}

        </div>
      </div>
      <div class="information">
        <div class="max_guest">
    <i class="fa fa-users fa-3x" aria-hidden="true"></i>

    <br />

    ${place.max_guest} Guests

        </div>
        <div class="number_rooms">
    <i class="fa fa-bed fa-3x" aria-hidden="true"></i>

    <br />

    ${place.number_rooms} Bedrooms
        </div>
        <div class="number_bathrooms">
    <i class="fa fa-bath fa-3x" aria-hidden="true"></i>

    <br />

    ${place.number_bathrooms} Bathroom

        </div>
      </div>

      <div class="user">

      </div>
      <div class="description">

        ${place.description}

      </div>

    </article>`);
        }
      }
    });
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    success: function (res) {
      if (res.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    }
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (places) {
      for (const place of places) {
        $('SECTION.places').append(`
          <article>

      <div class="title">

        <h2>${place.name}</h2>

        <div class="price_by_night">

    ${place.price_by_night}

        </div>
      </div>
      <div class="information">
        <div class="max_guest">
    <i class="fa fa-users fa-3x" aria-hidden="true"></i>

    <br />

    ${place.max_guest} Guests

        </div>
        <div class="number_rooms">
    <i class="fa fa-bed fa-3x" aria-hidden="true"></i>

    <br />

    ${place.number_rooms} Bedrooms
        </div>
        <div class="number_bathrooms">
    <i class="fa fa-bath fa-3x" aria-hidden="true"></i>

    <br />

    ${place.number_bathrooms} Bathroom

        </div>
      </div>

      <div class="user">

      </div>
      <div class="description">

        ${place.description}

      </div>

    </article>`);
      }
    }
  });

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
});
