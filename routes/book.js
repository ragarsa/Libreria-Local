const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');




//Get all the books
router.get('/', bookController.index)

//Creating a book
router.get('/book/create', bookController.book_create_get);

//Post reques for creating a book
router.post('/book/create', bookController.book_create_post); 

//Get request to delete a book
router.get('/book/:id/delete', bookController.book_delete_get);

//post request to delete a book 
router.post('/book/:id/delete', bookController.book_delete_post);

// GET request to update Book.
router.get('/book/:id/update', bookController.book_update_get);

// POST request to update Book.
router.post('/book/:id/update', bookController.book_update_post);

// GET request for one Book.
router.get('/book/:id', bookController.book_detail);

// GET request for list of all Book items.
router.get('/books', bookController.book_list);

module.exports = router;