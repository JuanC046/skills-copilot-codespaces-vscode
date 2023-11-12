// Create web server

// Import express
const express = require('express');

// Import router
const router = express.Router();

// Import model
const Comment = require('../models/Comment');

// Import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Import controllers
const commentCtrl = require('../controllers/comment');

// Create routes
router.post('/new', auth, multer, commentCtrl.createComment);
router.get('/all', auth, commentCtrl.getAllComments);
router.get('/:id', auth, commentCtrl.getOneComment);
router.put('/:id', auth, multer, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

// Export router
module.exports = router;