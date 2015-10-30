requirejs.config({
  paths: {
    jquery: '/components/jquery/dist/jquery'
  }
});

requirejs([
  'modules/imagesBlock'
], function () {

});