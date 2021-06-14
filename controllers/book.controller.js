const book = require('../models/book');
var Book = require('../models/book');
var BookInstance = require('../models/bookinstance');
data = {}
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all books.
exports.book_list = async function(req, res) {
    try {
        let list_books = await Book.find({},'title author summary').populate('author')
        res.render('book_list', { title: 'Book List', book_list : list_books })
        
    } catch (err) {
        res.send(err)
    }
};

// Display detail page for a specific book.
exports.book_detail =async function(req, res) {
    let {id} = req.params;
    try {
        let book = await Book.findById(id).populate('author').populate('genre')
        let book_instance = await BookInstance.find({'book':id})
        data['book'] = book
        data['book_instance'] = book_instance
    } catch (error) {
        res.status(400).send({error: error.message})
    }
    // let {title} = data.book
    res.render('book_detail', {title: data.book.title , book:data.book, book_instance:data.book_instance})
    
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};