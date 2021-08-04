(function(){
  $(function() {
      // hide container
      $('.container').hide();
      
      $('.btns #start-btn').click(function() {
          // validate input
          
          const width = parseInt($('.btns #width').val());
          const rate = parseInt($('.btns #rate').val());
          const amount = parseInt($('.btns #amount').val());
          const number = parseInt($('.btns #number').val());

          const containerWidth = $('.container').width();
          const colors = ['red', 'blue', 'yellow', 'green', 'purple'];
          
          let elements = $();
          for(let i = 0; i < amount; i++) {
              elements = elements.add($('<div>'));
          }

          elements.each(function(i, elem){
              $(elem).css({
                  'width': `${width}px`,
                  'height': `${width}px`,
                  'border-radius': '50%',
                  'background-color': colors[Math.floor(Math.random() * colors.length)],
                  'margin': 'auto',
                  'position': 'absolute',
                  'left': Math.floor( Math.random() * containerWidth ),
              }).on('mouseenter', function () {
                  $(this).animate({ opacity: 0.1 });
              }).on('mouseleave', function () {
                  $(this).animate({ opacity: 1 });
              }).click(function() {
                  $(this).remove();
              })
          });

          $('.container').append(elements).show();

          setInterval(function() {
              $('.container div').css('width', function(idx, oldValue) {
                  return parseInt(oldValue) + amount + "px";
              });
              $('.container div').css('height', function(idx, oldValue) {
                  return parseInt(oldValue) + amount + "px";
              });
          }, rate);
      })
  })
})();