var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;

var Event = require('./event');

var applicationSchema = new Schema({

    title: String,
    text: String,
    homepage: String,
    downloadUrl: String,
    connectedEvent: {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    },
    published: Boolean,
    datasets: [{
      url: String,
      description: String
    }],
    images: [String],
    authors: [{
      name: String,
      email: String
    }],

});

module.exports = restful.model('Application', applicationSchema);
