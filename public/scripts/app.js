/* CLIENT-SIDE JS
 */

$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: handleSuccess,
    error: handleError
  });
});

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
    var albumHtml = (`

              <!-- one album -->
              <div class='row album' data-album-id='${album.id}'>
                <div class='col-md-10 col-md-offset-1'>
                  <div class='panel panel-default'>
                    <div class='panel-body'>

                    <!-- begin album internal row -->
                      <div class='row'>
                        <div class='col-md-3 col-xs-12 thumbnail album-art'>
                           <img src='../images/800x800.png' alt='album image'>
                        </div>
                        <div class='col-md-9 col-xs-12'>
                          <ul class='list-group'>
                            <li class='list-group-item'>
                              <h4 class='inline-header'>Album Name:</h4>
                              <span class='album-name'>${album.name}</span>
                          </li>
                            <li class='list-group-item'>
                              <h4 class='inline-header'>Artist Name:</h4>
                              <span class='artist-name'>${album.artistName}</span>
                            </li>
                         <li class='list-group-item'>
                              <h4 class='inline-header'>Released date:</h4>
                              <span class='album-name'>${album.releaseDate}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- end of album internal row -->
                    </div>
                    <div class='panel-footer'>
                    </div>
                  </div>
                </div>
                <!-- end one album -->
  `)
  $('#albums').append(albumHtml);
  console.log('The album is rendered!');
  };


  function handleSuccess(albums){
      albums.forEach(function(element){
          renderAlbum(element);
          console.log("Success in rendering: ", element);
      });
  };

  function handleError(err){
    console.log("Uh-oh, there was an err: ", err);
  };
