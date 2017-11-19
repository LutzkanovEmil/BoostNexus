<script>
$.fn.corners = function() {
	return this.each(function() {
		var self = $(this);
		self.append($('<span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>'));
		if( self.css('position') == 'static' ) { self.addClass('relative'); }
	});
};
</script>
