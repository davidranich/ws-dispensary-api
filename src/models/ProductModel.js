import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Name: {
        type: String,
        unique: true,
        required: true
    },
    Description: {
        type: String,
        default: 'n/a'
    },
    ProductType: {
        type: String,
        required: true,
        enum: ['Flower', 'Vaporizers', 'Edibles', 'CBD', 'Concentrates', 'Topicals', 'Accessories']
    },
    THC: {
        type: String,
        default: "n/a"
    },
    Effects: {
        type: [String]
    },
    PricePerUnit: {
        OneGram: {
            type: Number,
            default: 0
        },
        TwoGrams: {
            type: Number,
            default: 0
        },
        ThreeHalfGrams: {
            type: Number,
            default: 0
        },
        SevenGrams: {
            type: Number,
            default: 0,
        },
        HalfOz: {
            type: Number,
            default: 0
        },
        Oz: {
            type: Number,
            default: 0
        }
    },
    Brand: {
        type: String,
        default: 'n/a'
    },
    DateAdded: {
        type: Date,
        default: Date.now
    }
});

// ProductTypeID: mongoose.Schema.Types.ObjectId,
// CompanyID: mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('product', ProductSchema, 'inventory');
