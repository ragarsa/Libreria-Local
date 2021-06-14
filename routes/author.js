const express = require('express');
const router = express.Router()

const authorController = require('../controllers/author.controller');

/// AUTHOR ROUTES ///
router.get('/', authorController.index)
// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', authorController.author_create_get);

// POST request for creating Author.
router.post('/author/create', authorController.author_create_post);

// GET request to delete Author.
router.get('/author/:id/delete', authorController.author_delete_get);

// POST request to delete Author.
router.post('/author/:id/delete', authorController.author_delete_post);

// GET request to update Author.
router.get('/author/:id/update', authorController.author_update_get);

// POST request to update Author.
router.post('/author/:id/update', authorController.author_update_post);

// GET request for one Author.
router.get('/author/:id', authorController.author_detail);

// GET request for list of all Authors.
router.get('/authors', authorController.author_list);


module.exports = router