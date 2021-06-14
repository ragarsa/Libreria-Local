const express = require('express');
const router = express.Router();

const genreController = require('../controllers/gener.controller');

/// GENRE ROUTES ///
router.get('/', genreController.index)
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genreController.genre_create_get);

//POST request for creating Genre.
router.post('/genre/create', genreController.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genreController.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genreController.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genreController.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genreController.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genreController.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genreController.genre_list);


module.exports = router;