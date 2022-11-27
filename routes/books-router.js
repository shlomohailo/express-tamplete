const router = require('express').Router();
const { getBooks, getBooksById, createBook, deleteBook, updateBook } = require('../controllers/book-ctrl');

router.get('/', getBooks);
router.get('/byId:id', getBooksById);
router.post('/crateBook', createBook);  
router.post('/deleteBook/:id', deleteBook);  
router.post('/updateBook/:id', updateBook);  




module.exports = router