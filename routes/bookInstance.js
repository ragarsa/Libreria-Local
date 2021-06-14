const express = require('express');
const router = express.Router();

const bookInstanceController = require('../controllers/bookinstance.controller');

/// BOOKINSTANCE ROUTES ///
router.get('/', bookInstanceController.index)

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', bookInstanceController.bookinstance_create_get);

// POST request for creating BookInstance.
router.post('/bookinstance/create', bookInstanceController.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', bookInstanceController.bookinstance_delete_get);

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', bookInstanceController.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', bookInstanceController.bookinstance_update_get);

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', bookInstanceController.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', bookInstanceController.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', bookInstanceController.bookinstance_list);

module.exports = router;