import express from 'express';
const router = express.Router();
import promotionController from '../controllers/promotionController';

router.get('/fetch', promotionController.fetch_promotions);

router.get('/grab/:promotionID', promotionController.grab_promotion);

router.post('/add', promotionController.add_promotion);

router.delete('/delete/:promotionID', promotionController.delete_promotion);

module.exports = router;