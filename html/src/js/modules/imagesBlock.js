define([
  'jquery'
], function ($) {
  var resizeBlock = function (element) {
    var width = element.getBoundingClientRect().width;

    element.style.height = width + 'px';
  };

  $('[data-images-block]').each(function () {
    var imageBlock = this;

    resizeBlock(imageBlock);
    $(window).on('resize', function () {
      resizeBlock(imageBlock);
    });
  });
});
