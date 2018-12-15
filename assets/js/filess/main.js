(function ($) {
	"use strict";

	/*------------------------------------------------------------------
	[Table of contents]



	-------------------------------------------------------------------*/

	/*==========================================================
					1. my owl function
	======================================================================*/
	$.fn.myOwl = function (options) {

		var settings = $.extend({
			items: 1,
			dots: false,
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			nav: false,
			autoplay: false,
			navText: ['', ''],
			margin: 0,
			stagePadding: 0,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			autoplaySpeed: 3000,
			smartSpeed: 450,
			navRewind: false,
			responsive: {},
			animateOut: '',
			animateIn: '',
			center: '',
			merge: '',
			autoWidth: '',
		}, options);

		return this.owlCarousel({
			items: settings.items,
			loop: settings.loop,
			mouseDrag: settings.mouseDrag,
			touchDrag: settings.touchDrag,
			nav: settings.nav,
			navText: settings.navText,
			dots: settings.dots,
			margin: settings.margin,
			stagePadding: settings.stagePadding,
			autoplay: settings.autoplay,
			autoplayTimeout: settings.autoplayTimeout,
			autoplayHoverPause: settings.autoplayHoverPause,
			animateOut: settings.animateOut,
			animateIn: settings.animateIn,
			responsive: settings.responsive,
			navRewind: settings.navRewind,
			center: settings.center,
			merge: settings.merge,
			autoWidth: settings.autoWidth,
			autoplaySpeed: settings.autoplaySpeed,
			smartSpeed: settings.smartSpeed
		});
	};




	/*==========================================================
					4. email patern
	======================================================================*/
	function email_pattern(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}



	/*==========================================================
					9. custom number function
	======================================================================*/
	$.fn.customNumber = function (options) {
		var settings = $.extend({
			plusIcon: '',
			minusIcon: ''
		}, options);

		this.append('<span class="add">' + settings.plusIcon + '</span>');
		this.append('<span class="sub">' + settings.minusIcon + '</span>');

		return this.each(function () {
			let spinner = $(this),
				input = spinner.find('input[type="number"]'),
				add = spinner.find('.add'),
				sub = spinner.find('.sub');

			input.parent().on('click', '.sub', function (event) {
				event.preventDefault();
				if (input.val() > parseInt(input.attr('min'), 10)) {
					input.val(function (i, oldvalue) {
						return --oldvalue;
					})
				}
			});
			input.parent().on('click', '.add', function (event) {
				event.preventDefault();
				if (input.val() < parseInt(input.attr('max'), 10)) {
					input.val(function (i, oldvalue) {
						return ++oldvalue;
					})
				}
			});
		});
	}

	/*==========================================================
					11. select function
	======================================================================*/
	$.fn.mySelect = function (options) {
		let $this = $(this),
			numberOfOptions = $(this).children('option');

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		let styledSelect = $this.next('.select-styled');
		styledSelect.text($this.children('option').eq(0).text());

		let list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter(styledSelect);

		for (let i = 0; i < numberOfOptions.length; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo(list);
		}

		let listItems = list.children('li');

		styledSelect.on('click', function (e) {
			e.stopPropagation();
			$('.select-styled.active').not(this).each(function () {
				$(this).removeClass('active').next('.select-options').fadeIn();
			});
			$(this).toggleClass('active').next('.select-options').toggle();
			$(this).parent().toggleClass('focus');
		});

		listItems.on('click', function (e) {
			e.stopPropagation();
			styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			list.hide();
			if ($(this).parent().parent().hasClass('focus')) {
				$(this).parent().parent().removeClass('focus');
			}
		});

		$(document).on('click', function () {
			styledSelect.removeClass('active');
			list.hide();
		});
	}

	// function stickyHeader() {
	// 	let mainheader = $('.nav-sticky'),
	// 		height = mainheader.outerHeight(),
	// 		scroll = $(document).scrollTop();
	// 	$(window).on('load', function () {
	// 		if ($(document).scrollTop() > height) {
	// 			if (mainheader.hasClass('sticky-header')) {
	// 				mainheader.removeClass('sticky-header');
	// 			} else {
	// 				mainheader.addClass('sticky-header');
	// 			}
	// 		}
	// 	})
	// 	$(window).on('scroll', function () {
	// 		let scrolled = $(document).scrollTop(),
	// 			header = $('.sticky-header');
	// 		if (scrolled > scroll) {
	// 			header.addClass('sticky');
	// 		} else {
	// 			header.removeClass('sticky');
	// 		}
	// 		if (scrolled === 0) {
	// 			mainheader.removeClass('sticky-header');
	// 		} else {
	// 			mainheader.addClass('sticky-header');
	// 		}
	// 		scroll = $(document).scrollTop();
	// 	});
	// }

	let lastScrollTop = 0;
	function stickyMenu($targetMenu, $toggleClass) {
		var scrollTop = $(window).scrollTop();
		if ($(window).scrollTop() > 1000) {
			if (scrollTop > lastScrollTop) {
				// hide sticky menu on scroll down
				$targetMenu.removeClass($toggleClass);
			} else {
				// active sticky menu on scroll up
				$targetMenu.addClass($toggleClass);
			}
		} else {
			$targetMenu.removeClass($toggleClass);
		}
		lastScrollTop = scrollTop;
	}

	/*==========================================================
					8. scrool to top function
	======================================================================*/
	$.fn.scrollView = function () {
		return this.each(function () {
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
	}

	$(window).on('load', function () {

		/* sticky header init */
		// stickyHeader();

	}); // END load Function

	$(document).ready(function () {

		/* sticky header init */
		// stickyHeader();

		/*==========================================================
					16. contact form init
		======================================================================*/

		$(document).on('submit', '#xs-contact-form', function (event) {
			event.preventDefault(); /* Act on the event */

			/* declare a variable */
			var xs_contact_name = $('#xs_contact_name'),
				xs_contact_email = $('#xs_contact_email'),
				xs_contact_subject = $('#xs_contact_subject'),
				xs_contact_phone = $('#xs_contact_phone'),
				x_contact_massage = $('#x_contact_massage'),
				xs_contact_submit = $('#xs_contact_submit'),
				xs_contact_error = false;

			/* remove success massage */
			$('.xpeedStudio_success_message').remove();

			/* xs_contact_name */
			if (xs_contact_name.val().trim() === '') {
				xs_contact_name.addClass('invaild');
				xs_contact_error = true;
				xs_contact_name.focus();
				return false;
			} else {
				xs_contact_name.removeClass('invaild');
			}

			/* xs_contact_email */
			if (xs_contact_email.val().trim() === '') {
				xs_contact_email.addClass('invaild');
				xs_contact_error = true;
				xs_contact_email.focus();
				return false;
			} else if (!email_pattern(xs_contact_email.val().toLowerCase())) {
				xs_contact_email.addClass('invaild');
				xs_contact_error = true;
				xs_contact_email.focus();
				return false;
			} else {
				xs_contact_email.removeClass('invaild');
			}

			/* xs_contact_subject */
			if (xs_contact_subject.val().trim() === '') {
				xs_contact_subject.addClass('invaild');
				xs_contact_error = true;
				xs_contact_subject.focus();
				return false;
			} else {
				xs_contact_subject.removeClass('invaild');
			}

			/* xs_contact_phone */
			if (xs_contact_phone.val().trim() === '') {
				xs_contact_phone.addClass('invaild');
				xs_contact_error = true;
				xs_contact_phone.focus();
				return false;
			} else {
				xs_contact_phone.removeClass('invaild');
			}

			/* x_contact_massage  */
			if (x_contact_massage.val().trim() === '') {
				x_contact_massage.addClass('invaild');
				xs_contact_error = true;
				x_contact_massage.focus();
				return false;
			} else {
				x_contact_massage.removeClass('invaild');
			}

			/* ajax request */
			if (xs_contact_error === false) {
				xs_contact_submit.before().hide().fadeIn();
				$.ajax({
					type: "POST",
					url: "assets/php/contact-form.php",
					data: {
						'xs_contact_name': xs_contact_name.val(),
						'xs_contact_email': xs_contact_email.val(),
						'xs_contact_phone': xs_contact_phone.val(),
						'x_contact_massage': x_contact_massage.val(),
						'xs_contact_subject': xs_contact_subject.val(),
					},
					success: function (result) {
						xs_contact_submit.after('<p class="xpeedStudio_success_message">' + result + '</p>').hide().fadeIn();

						setTimeout(() => {
							$(".xpeedStudio_success_message").fadeOut(1000, function () {
								$(this).remove();
							});
						}, 5000);

						$('#xs-contact-form')[0].reset();
					}
				});
			}
		});




		/*==========================================================
				17. video popup init
		======================================================================*/
		if ($('.video-popup').length > 0) {
			$('.video-popup').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}

		/*==========================================================
			 18. Side Offset cart menu open
		======================================================================*/



		/*=============================================================
				 19. right click , ctrl+u and ctrl+shift+i disabled
		=========================================================================*/
		// $('body').on('contextmenu', function (e) {
		// 	// alert('right click disabled');
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// 	return false;
		// });
		// $(document).on('keydown', function(e) {
		// 	if (
		// 			(e.ctrlKey && (e.keyCode == 85)) ||
		// 			(e.ctrlKey && (e.shiftKey && e.keyCode == 73)) ||
		// 			(e.ctrlKey && (e.shiftKey && e.keyCode == 75))
		// 			) {
		// 		return false;
		// 	} else {
		// 		return true;
		// 	}
		// })

		/*=============================================================
				 20. modal popup
		=========================================================================*/
		if ($('.modal-popup').length > 0) {
			$('.modal-popup').magnificPopup({
				type: 'inline',
				fixedContentPos: false,
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: false,
				callbacks: {
					beforeOpen: function () {
						this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
					}
				}
			});
		}

		/*=============================================================
				 21. img default behavior off and dragable false
		=========================================================================*/
		if ($('img').length > 0) {
			$('img').each(function () {
				$(this).attr('draggable', 'false');
				$(this).on('mousedown', function (event) {
					if (event.preventDefault) {
						event.preventDefault()
					}
				})
			});
		}

		/*=============================================================
				 22. subscribe form
		=========================================================================*/
		if ($('.subscribe-form').length > 0) {
			$('.subscribe-form').ajaxChimp({
				url: 'https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b'
			});
		}

		/*=============================================================
				 23. wow function init
		=========================================================================*/


		/*=============================================================
				 24. current page add class active on a
		=========================================================================*/
		let url = window.location.pathname,
			activePage = url.substr(url.lastIndexOf('/') + 1);
		$('.menus .nav-menu li a').each(function (e, i) {
			var currentPage = this.href.substr(this.href.lastIndexOf('/') + 1);
			if (activePage == currentPage) {
				$([i]).addClass("active");
				if ($([i]).parents().closest('.nav-submenu').parent('li')) {
					$([i]).parents().closest('.nav-submenu').parent('li').addClass('active')
				}
				$([i]).parent().addClass('active');
			}
		});

		/*=============================================================
				 37. select init
		=========================================================================*/
		if ($('.select').length > 0) {
			$('.select').mySelect();
		}

		/*=============================================================
				 38. custom number init
		=========================================================================*/
		if ($('.custom_number').length > 0) {
			$('.custom_number').customNumber({
				plusIcon: '<i class="icon icon-up-arrow2"></i>',
				minusIcon: '<i class="icon icon-down-arrow2"></i>'
			});
		}

		/*=============================================================
				 39. floating btn
		=========================================================================*/
		if ($(".btn-floating").length > 0) {
			var content = $('.floating-icons-list');

			content.addClass('hidden');

			$('.btn-floating').each(function () {
				$(this).on('click', function (e) {
					e.preventDefault();

					$(this).next().toggleClass("open");
					$(this).next().toggleClass("hidden");

					if ($(this).hasClass('active')) {
						$(this).removeClass('active');
					} else {
						$(this).addClass('active');
					}
				});
			});
		}

		/*=============================================================
				 41. scrollview init
		=========================================================================*/
		$('.comment-reply-link').on('click', function (event) {
			event.preventDefault();
			$('#comment-form').scrollView();
		});


		$('.menu-close').on('click', function () {
			if ($('.offcanvas-collapse').hasClass('open')) {
				$('.offcanvas-collapse').removeClass('open')
			}
		})

		$(".navbar-nav").find('li').each(function (_, i) {
			if ($(i).children('.nav-submenu').length > 0) {
				$(i).addClass("has-submenu");
				$(i).children("a").append(
					"<span class='submenu-indicator'></span>"
				);
			}
		});

		$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
			var $el = $(this);
			var $parent = $(this).offsetParent(".dropdown-menu");
			if (!$(this).next().hasClass('show')) {
				$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
			}
			var $subMenu = $(this).next(".dropdown-menu");
			$subMenu.toggleClass('show');

			$(this).parent("li").toggleClass('show');

			$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
				$('.dropdown-menu .show').removeClass("show");
			});

			// if (!$parent.parent().hasClass('navbar-nav')) {
			// 	$el.next().css({
			// 		"top": $el[0].offsetTop,
			// 		"left": $parent.outerWidth() - 4
			// 	});
			// }

			return false;
		});


		if ($('.image-popup').length > 0) {
			$('.image-popup').magnificPopup({
				disableOn: 700,
				type: 'image',
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				removalDelay: 160,
				closeBtnInside: false,
				fixedContentPos: true,
				callbacks: {
					beforeOpen: function () {
						// just a hack that adds mfp-anim class to markup
						this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						this.st.mainClass = this.st.el.attr('data-effect');
					}
				},
				zoom: {
					// enabled: true,
					duration: 300, // don't foget to change the duration also in CSS
					opener: function (element) {
						return element.find('img');
					}
				},
			});
		}

		/*==========================================================
			number counter and skill bar animation
		=======================================================================*/



		/*==========================================================
				skill bar and number counter
		=======================================================================*/



		if ($('.back-top-top').length > 0) {
			$('.back-top-top').on('click', function (e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: 0
				}, 1500);
			});
		}

		if ($('.material-input').length > 0) {
			$('.material-input').find('input, textarea').each(function (__, e) {
				$(e).on('blur', function () {
					if ($(e).parents('.input-group').hasClass('focus')) {
						$(e).parents('.input-group').removeClass('focus');
					}
				})
				$(e).on('focus', function () {
					if (!$(e).parents('.input-group').hasClass('focus')) {
						$(e).parents('.input-group').addClass('focus');
					}
				})
				$(e).on('keyup', function () {
					if ($(e).val().trim()) {
						$(e).parents('.input-group').addClass('active')
					} else {
						$(e).parents('.input-group').removeClass('active')
					}
				})
			})
		}

		if ($('[data-toggle="offcanvas"]').length > 0) {
			$('[data-toggle="offcanvas"]').on('click', function () {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active')
				} else {
					$(this).addClass('active')
				}
				if ($(this).parents('.navbar').find('.offcanvas-collapse').hasClass('open')) {
					$(this).parents('.navbar').find('.offcanvas-collapse').removeClass('open')
				} else {
					$(this).parents('.navbar').find('.offcanvas-collapse').addClass('open')
				}
			})
		}

		if ($('.nav-search').length > 0) {
			$('.nav-search').on('click', function (e) {
				e.preventDefault();
				if ($(this).parents('body').find('.fullscreen-search').hasClass('active')) {
					$(this).parents('body').find('.fullscreen-search').removeClass('active')
				} else {
					$(this).parents('body').find('.fullscreen-search').addClass('active')
				}
			})
		}
		if ($('.cart-opener').length > 0) {
			$('.cart-opener').on('click', function (e) {
				e.preventDefault();
				if ($(this).parents('body').find('.sidebar-cart').hasClass('active')) {
					$(this).parents('body').find('.sidebar-cart').removeClass('active')
				} else {
					$(this).parents('body').find('.sidebar-cart').addClass('active')
				}
			})
		}
		if ($('.sidebar-opener').length > 0) {
			$('.sidebar-opener').on('click', function (e) {
				e.preventDefault();
				if ($(this).parents('body').find('.sidebar').hasClass('active')) {
					$(this).parents('body').find('.sidebar').removeClass('active')
				} else {
					$(this).parents('body').find('.sidebar').addClass('active')
				}
			})
		}

	}); // end ready function


	$(window).on('scroll', function () {
		if ($(".header-sticky").length> 0) {
			stickyMenu( $('.header-sticky'), "is-sticky" );
		}
	}); // END Scroll Function

	$(window).on('resize', function () {

	}); // End Resize

	/*==========================================================
				45. XpeedStudio Maps
	======================================================================*/


})(jQuery);