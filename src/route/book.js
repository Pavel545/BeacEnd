const router = require('express').Router();
const {
    getBooks,
    createBook,
    getBook,
    updateBook,
    deleteBook,
}=require('../controlles/book')
router.get('/books', getBook);
router.post('/books', createBook);
router.get('/books/:id', getBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;