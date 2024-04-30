const express = require('express');
const router = express.Router();
const multer = require('multer');

const { getOwners, getSingleOwner, postOwner, updateOwner, deleteOwner } = require('../controllers/owner.controller.js');

// Configure multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Route for uploading owner information with multiple images
router.post('/', upload.array('images', 5), postOwner);

// Other routes remain the same
router.get('/', getOwners);
router.get('/:slug', getSingleOwner);
router.put('/:id', updateOwner);
router.delete('/:id', deleteOwner);

module.exports = router;