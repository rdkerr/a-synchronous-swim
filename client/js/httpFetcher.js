// (function() {

//   const serverUrl = 'http://127.0.0.1:3000/';

//   return $.ajax({
//       url: serverUrl,
//       type: 'GET',
//       data: '',
//       contentType: 'plain/text',
//       success: (d) => console.log('SUCCESS', d),
//       error: function (error) {
//         console.error('swimserver: Failed to fetch direction', error);
//       }
//     });

// })();

// I don't understand why this is an IIFE, how do you invoke anon?

var Parse = {
  serverUrl: `http://127.0.0.1:3000/`,

  fetch: function(successCB, errorCB) {
    $.ajax({
      url: Parse.serverUrl,
      type: 'GET',
      data: '',
      contentType: 'plain/text',
      success: (direction) => SwimTeam.move(direction),
      error: function (error) {
        console.error('swimserver: Failed to fetch direction', error);
      }
    });
  }
};
