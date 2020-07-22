import Product from '../models/ProductModel';

exports.fetch_products = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);

    } catch(err) {
        return res.json({ error: err });
    }
};

exports.grab_product = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productID);
        return res.json(product);
    } catch (err) {
        return res.json({ error: err });
    }
};

exports.add_product = async (req, res) => {
    const product = new Product({
        Name: req.body.name,
        Description: req.body.description,
        Manufacturer: req.body.manufacturer,
        ProductTypeID: req.body.producttypeid,
        THC: req.body.thc,
        Effects: req.body.effects,
        PricePerUnit: {
            OneGram: req.body.onegram,
            ThreeHalfGrams: req.body.threehalfgrams,
            SevenGrams: req.body.sevengrams,
            HalfOz: req.body.halfoz,
            Oz: req.body.oz
        },
        DateAdded: req.body.dateadded,
        CompanyID: req.body.companyid
    });

    try {
        const savedProduct = await product.save();
        return res.json(savedProduct);

    } catch (err) {
        return res.json({ error: err });
    }
};

exports.delete_product = async (req, res) => {
    try {
        const removedProduct = await Product.remove({ _id: req.params.productID });
        return res.json(removedProduct);
    } catch (err) {
        return res.json({ error: err });
    }
};