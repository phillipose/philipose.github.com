(function() {
  $(function() {
      const eightBall = () => {
          return new Promise((resolve, reject) => {
              $.post('/8ball', {
                  data: JSON.stringify({question: $("#question").val(),}),
                  contentType:"application/json",
              }).done(res => {
                  resolve(res.answer);
              })
              .fail(() => reject("request faield"));
          });
      };
      
      const getAnswer = () => {
          if(!$('#question').val()) {
              alert("please enter question")
              return;
          }

          eightBall().then(res => $('#question').val(res).focus())
                      .catch(err => alert(err));
      };

      $("#ask").click((event) => {
          event.preventDefault();
          getAnswer();
      })

      $('#question').bind("enterKey",(e) => {
          getAnswer();
      }).on('focus', function() {
          $(this).select();
      })
  })
})();