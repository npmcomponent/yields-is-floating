
/**
 * Check if `el` is floating.
 *
 * @param {Element} el
 * @return {Boolean}
 * @api public
 */

module.exports = function(el){
  var styl = window.getComputedStyle(el, null);
  return 'table-cell' == styl.display
    || 'inline' == styl.display
    || 'right' == styl.float
    || 'left' == styl.float;
};
