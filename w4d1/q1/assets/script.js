(function() {
  $(function() {
    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
      const [ name, value ] = cookie.split('=s%3A').map(c => c.trim());
      if (name && value) cookies[name] = value.slice(0, value.indexOf('.'));
      return cookies;
    }, {});

    const elements = Object.keys(cookies).map(key => $('<tr>').append($('<td>').text(key),$('<td>').text(cookies[key])));
    const E = elements.length > 0 ? elements : $('<p>').text('No cookies found');
    $('table').append(E);
  })
})();