const Genre = require('../models/genre');
const Book = require('../models/book');

const data = {
    'genre': '',
    'genre_book': ''
}

exports.index = function(req, res) {
    res.send('Gender Home')
};

// Display list of all Genre.
exports.genre_list = async function(req, res) {
    try {
        let genres_list = await Genre.find().sort([['name', 'ascending']])
        res.render('genre_list', {title: 'Genre List', genre_list:genres_list})
    } catch (error) {
        res.send(error)
    }
};

// Display detail page for a specific Genre.
exports.genre_detail = async function(req, res) {
    try {
        let {id} = req.params
        let genre = await Genre.findById(id);
        let book_genre = await Book.find({'genre': id})
        data['genre'] = genre
        data['genre_book'] = book_genre
    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
    res.render('genre_detail', {title : 'Genre Detail', genre: data.genre, genre_book: data.genre_book})
    // console.log(data)
};

// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};