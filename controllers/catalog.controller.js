
const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');
let data = {
    'book_count' : 0,
    'author_count' : 0,
    'genre_count' : 0,
    'bookInstance_count' : 0,
    'bookInstance_count_available' : 0
}
exports.index = async function (req, res,) {
    
    try {
        await Book.countDocuments({}, (err,count) => data['book_count']=count)
        await Author.countDocuments({}, (err,count) => data['author_count']=count)
        await Genre.countDocuments({}, (err,count) => data['genre_count']=count)
        await BookInstance.countDocuments({}, (err,count) => data['bookInstance_count']=count)
        await BookInstance.countDocuments({ status:'Available' }, (err,count) => data['bookInstance_count_available']=count)
        
    } catch (err) {
        res.status(500).send({ error: error.message })
    }
    res.render('index', {title:'Local Library', data})
    
}

// const async = require('async');

// exports.index = function (req, res) {
//     async.parallel({
//         book_count: function (callback) {
//             Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
//         },
//         book_instance_count: function (callback) {
//             BookInstance.countDocuments({}, callback);
//         },
//         book_instance_available_count: function (callback) {
//             BookInstance.countDocuments({ status: 'Available' }, callback);
//         },
//         author_count: function (callback) {
//             Author.countDocuments({}, callback);
//         },
//         genre_count: function (callback) {
//             Genre.countDocuments({}, callback);
//         }
//     }, function (err, results) {
//         res.render('index', { title: 'Local Library Home', error: err, data: results });
//     });

// }


