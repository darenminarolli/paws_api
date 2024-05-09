const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const os = require('os');

const { getOwners, getSingleOwner, postOwner, updateOwner, deleteOwner } = require('../controllers/owner.controller.js');

// Configure multer for handling file uploads
// const upload = multer({
//   dest: path.join(os.tmpdir(), 'uploads'), // Use a temporary directory
//   // limits: { fileSize: 1000000 }, // 1MB file size limit
// });

// Route for uploading owner information with multiple images
router.post('/', postOwner);

// Other routes remain the same
router.get('/', getOwners);
router.get('/:slug', getSingleOwner);
router.put('/:id', updateOwner);
router.delete('/:id', deleteOwner);

module.exports = router;