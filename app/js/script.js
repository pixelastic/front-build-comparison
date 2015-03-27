'use strict';

var App = {
  getFeatureWrapper: function getFeatureWrapper() {
    return $('.features');
  },
  getAllFeatures: function getAllFeatures() {
    return this.getFeatureWrapper().find('.feature');
  },
  randomizeFeatures: function randomizeFeatures() {
    var wrapper = this.getFeatureWrapper().find('.row');
    var features = _.shuffle(this.getAllFeatures());
    wrapper.html(features);
  },
  highlightFeature: function highlightFeature(featureIndex) {
    return $(this.getAllFeatures()[featureIndex]).addClass('feature-highlight');
  }
};

$(function() {
  // Highlight first feature, and randomize the order
  App.highlightFeature(0);
  App.randomizeFeatures();
});
