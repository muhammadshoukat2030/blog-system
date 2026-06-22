const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, default: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000' },
    category: { type: String, default: 'General' },
    author: { type: String, default: 'Admin' },
    // Analytics Triggers
    viewsCount: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);