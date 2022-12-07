(function(){
	$('.flex-container').waitForImages(function() {
		$('.spinner').fadeOut();
	}, $.noop, true);
	
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();

$(document).ready(function(){
    $(".labelImg").click(function(){
      var foto = $(this).css('background-image');
      $(".imgFull").css('background-image', foto);
      $(".lightbox").css("display","block");
    });
  
    $(".lightbox").click(function(){
      $(this).css("display","none");
   });
  });

  canvas.height = window.screen.height;
  canvas.width = window.screen.width;

  var columns = []
for (i = 0; i < 256; columns[i++] = 1);
function step() {
    canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
    canvas.getContext('2d').fillStyle = '#0F0';