Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.postsList.rendered = function() {
  $('.grid').imagesLoaded(function(){
      // images have loaded
      // Use the packery jquery plugin
      $('.grid').packery({
        //options
        itemSelector: '.item',
        gutter: 10
      });
  });
};
