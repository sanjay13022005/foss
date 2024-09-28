const express = require('express');
const BlogPost = require('../models/BlogPost');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create a blog post
router.post('/', protect, async (req, res) => {
    try {
        const { title, content } = req.body;
        const blogPost = await BlogPost.create({ title, content, author: req.user._id });
        res.status(201).json(blogPost);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create blog post' });
    }
});

// Get all blog posts
router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find().populate('author', 'username');
        res.json(blogPosts);
    } catch (error) {
        res.status(400).json({ message: 'Failed to retrieve blog posts' });
    }
});

// Update a blog post
router.put('/:id', protect, async (req, res) => {
    const blogPost = await BlogPost.findById(req.params.id);
    if (blogPost.author.toString() === req.user._id.toString()) {
        blogPost.title = req.body.title || blogPost.title;
        blogPost.content = req.body.content || blogPost.content;
        const updatedPost = await blogPost.save();
        res.json(updatedPost);
    } else {
        res.status(401).json({ message: 'Not authorized to update this post' });
    }
});

// Delete a blog post
router.delete('/:id', protect, async (req, res) => {
    const blogPost = await BlogPost.findById(req.params.id);
    if (blogPost.author.toString() === req.user._id.toString()) {
        await blogPost.remove();
        res.json({ message: 'Blog post removed' });
    } else {
        res.status(401).json({ message: 'Not authorized to delete this post' });
    }
});

module.exports = router;
