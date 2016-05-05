if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  }, {
    title: 'Meteor',
    url: 'http://meteor.com'
  }, {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
