import express from 'express';
const router = express.Router();
import Promotion from '../models/PromotionModel';

exports.fetch_promotions = async (req, res) => {
    try {
        const promotions = await Promotion.find();
        return res.json(promotions);
    } catch(err) {
        return res.json({ error: err });
    }
};

exports.grab_promotion = async (req, res) => {
    try {
        const promotion = await Promotion.findById(req.params.promotionID);
        return res.json(promotion);
    } catch (err) {
        return res.json({ error: err });
    }
};

exports.add_promotion = async (req, res) => {
    const test = new Date();
    const promotion = new Promotion({
        Name: req.body.name,
        Description: req.body.description,
        PercentageOff: req.body.percentageoff,
        DayOfWeek: req.body.dayofweek,
        PromotionStart: req.body.promotionstart,
        PromotionEnd: test,
        Products: req.body.products,
        ProductType: req.body.producttype,
        Brand: req.body.brand
    });

    try {
        const savedPromotion = await promotion.save();
        return res.json(savedPromotion);

    } catch (err) {
        return res.json({ error: err });
    }
};

exports.delete_promotion = async (req, res) => {
    try {
        const removedPromotion = await Promotion.remove({ _id: req.params.promotionID });
        return res.json(removedPromotion);
    } catch (err) {
        return res.json({ error: err });
    }
};