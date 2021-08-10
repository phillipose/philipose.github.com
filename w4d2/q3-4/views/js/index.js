
 (function() {
  $(function() {
      const addToCart = (id) => {
          return new Promise((resolve, reject) => {
              $.post(`/addToCart/${id}`)
              .done((res) => {
                  console.log(res);
                  resolve(res);
              }).fail((err) => reject("cannot add to cart"));
          });
      }
      $('#add-btn').click((event) => {
          event.preventDefault();
          const url = window.location.pathname;
          const id = url.substring(url.lastIndexOf('/') + 1);

         addToCart(id)
          .then(res => {
              $('#count').text(res.quantity);
              alert("Product added to cart successfully")
          }).catch(err => alert(err));
      });
  })
})();