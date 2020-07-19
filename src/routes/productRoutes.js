import express from 'express';
const router = express.Router();
import productController from '../controllers/productController';

router.get('/fetch', productController.fetch_products);

router.get('/grab/:userID', productController.grab_product);

router.post('/add', productController.add_product);

router.delete('/delete/:productID', productController.delete_product);

module.exports = router;