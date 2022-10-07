const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true}); //This is so dope!  Also, it's automatic and does not have to be passed in as an argument.

const Blog = mongoose.model('Blog', blogSchema);
module.export = Blog;