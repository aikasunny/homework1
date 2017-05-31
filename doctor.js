

$('nav').onePageNav();


$('#menu-button').click(function() {
	
	$('nav').slideToggle();

	$('body').toggleClass('move-down');

});

var menu = $('nav ul');

$(window).resize(function(){
   var w = $(window).width();
   if(w > 768 && menu.is(':hidden')) {
       menu.removeAttr('style');
   }
});

// function init() {
// 			// Introduce defaults that can be extended either
// 			// globally or using an object literal.
// 			this.config = $.extend({}, this.defaults, this.options, this.metadata);

// 			this.$nav = this.$elem.find(this.config.navItems);

// 			//Filter any links out of the nav
// 			if(this.config.filter !== '') {
// 				this.$nav = this.$nav.filter(this.config.filter);
// 			}

// 			//Handle clicks on the nav
// 			this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

// 			//Get the section positions
// 			this.getPositions();

// 			//Handle scroll changes
// 			this.bindInterval();

// 			//Update the positions on resize too
// 			this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

// 			return this;
// 		}

// 		function adjustNav(self, $parent) {
// 			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
// 			$parent.addClass(self.config.currentClass);
// 		}

// 		function bindInterval() {
// 			var self = this;
// 			var docHeight;

// 			self.$win.on('scroll.onePageNav', function() {
// 				self.didScroll = true;
// 			});

// 			self.t = setInterval(function() {
// 				docHeight = self.$doc.height();

// 				//If it was scrolled
// 				if(self.didScroll) {
// 					self.didScroll = false;
// 					self.scrollChange();
// 				}

// 				//If the document height changes
// 				if(docHeight !== self.docHeight) {
// 					self.docHeight = docHeight;
// 					self.getPositions();
// 				}
// 			}, 250);
// 		}

// 		function getHash($link) {
// 			return $link.attr('href').split('#')[1];
// 		}

// 		function getPositions() {
// 			var self = this;
// 			var linkHref;
// 			var topPos;
// 			var $target;

// 			self.$nav.each(function() {
// 				linkHref = self.getHash($(this));
// 				$target = $('#' + linkHref);

// 				if($target.length) {
// 					topPos = $target.offset().top;
// 					self.sections[linkHref] = Math.round(topPos);
// 				}
// 			});
// 		}

// 		function getSection(windowPos) {
// 			var returnValue = null;
// 			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

// 			for(var section in this.sections) {
// 				if((this.sections[section] - windowHeight) < windowPos) {
// 					returnValue = section;
// 				}
// 			}

// 			return returnValue;
// 		}

// 		function handleClick(e) {
// 			var self = this;
// 			var $link = $(e.currentTarget);
// 			var $parent = $link.parent();
// 			var newLoc = '#' + self.getHash($link);

// 			if(!$parent.hasClass(self.config.currentClass)) {
// 				//Start callback
// 				if(self.config.begin) {
// 					self.config.begin();
// 				}

// 				//Change the highlighted nav item
// 				self.adjustNav(self, $parent);

// 				//Removing the auto-adjust on scroll
// 				self.unbindInterval();

// 				//Scroll to the correct position
// 				self.scrollTo(newLoc, function() {
// 					//Do we need to change the hash?
// 					if(self.config.changeHash) {
// 						window.location.hash = newLoc;
// 					}

// 					//Add the auto-adjust on scroll back in
// 					self.bindInterval();

// 					//End callback
// 					if(self.config.end) {
// 						self.config.end();
// 					}
// 				});
// 			}

// 			e.preventDefault();
// 		}

// 		function scrollChange() {
// 			var windowTop = this.$win.scrollTop();
// 			var position = this.getSection(windowTop);
// 			var $parent;

// 			//If the position is set
// 			if(position !== null) {
// 				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();

// 				//If it's not already the current section
// 				if(!$parent.hasClass(this.config.currentClass)) {
// 					//Change the highlighted nav item
// 					this.adjustNav(this, $parent);

// 					//If there is a scrollChange callback
// 					if(this.config.scrollChange) {
// 						this.config.scrollChange($parent);
// 					}
// 				}
// 			}
// 		}

// 		function scrollTop(target, callback) {
// 			var offset = $(target).offset().top;

// 			$('html, body').animate({
// 				scrollTop: offset
// 			}, this.config.scrollSpeed, this.config.easing, callback);
// 		}

// 		function unbindInterval() {
// 			clearInterval(this.t);
// 			this.$win.unbind('scroll.onePageNav');
		



// }( jQuery, window , document );












// 	