/******************************************
 * Websanova.com
 *
 * Resources for web entrepreneurs
 *
 * @author          Websanova
 * @copyright       Copyright (c) 2012 Websanova.
 * @license         These websanova selectors are dual licensed under the MIT and GPL licenses.
 * @link            http://www.websanova.com
 * @docs            http://www.websanova.com/plugins/websanova/selectors
 *
 ******************************************/
$.extend($.expr[':'],
{
	loaded: function(el)
	{
		return $(el).data('loaded');
	},

	width: function(el, i, m)
	{
		if(!m[3]||!(/^(<|>)\d+$/).test(m[3])) {return false;}
		return m[3].substr(0,1) === '>' ? $(el).width() > m[3].substr(1) : $(el).width() < m[3].substr(1);
	},

	height: function(el, i, m)
	{
		if(!m[3]||!(/^(<|>)\d+$/).test(m[3])) {return false;}
		return m[3].substr(0,1) === '>' ? $(el).height() > m[3].substr(1) : $(el).height() < m[3].substr(1);
	},

    leftOf: function(el, i, m)
    {
        var oe = $(el).offset();
        var om = $(m[3]).offset();

        return oe.left + $(el).width() < om.left;
    },

	rightOf: function(el, i, m)
	{
		var oe = $(el).offset();
		var om = $(m[3]).offset();

		return oe.left > om.left + $(m[3]).width();
	},

	external: function(el)
	{
		if(!el.href) {return false;}
		return el.hostname && el.hostname !== window.location.hostname;
	},

	target: function(el, i, m)
	{
		if(!m[3]) {return false;}
		return (m[3] === '_self' && ($(el).attr('target') == '' || !el.target)) || (m[3] === $(el).attr('target'));
	},

	inView: function(el)
	{
		var offset = $(el).offset();

		return !(
			(offset.top > $(window).height() + $(document).scrollTop()) || 
			(offset.top + $(el).height() < $(document).scrollTop()) || 
			(offset.left > $(window).width() + $(document).scrollLeft()) || 
			(offset.left + $(el).width() < $(document).scrollLeft())
		)
	},

	largerThan: function(el, i, m)
	{
		if(!m[3]) {return false;}
		return $(el).width() * $(el).height() > $(m[3]).width() * $(m[3]).height();
	},

	isBold: function(el)
	{
		return $(el).css("fontWeight") === '700';
	},

	color: function(el, i, m)
	{
		if(!m[3]) {return false;}
		return $(el).css('color') === m[3];
	},

	hasId: function(el)
	{
		return $(el).attr('id') !== undefined && $(el).attr('id') !== '';
	}
});
