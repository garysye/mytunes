// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td> \
                        <td><%= title %></td> \
                        <td> \
                          <button class="dequeue mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Dequeue</button> \
                        <td>'),

  events: {
    'click .dequeue': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
