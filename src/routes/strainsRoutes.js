import express from 'express';
const router = express.Router();

const strainsArr = JSON.parse(require('fs').readFileSync('public/misc/strains.json'));

router.get('/fetch', async (req, res) => {
    try {
        return res.json(strainsArr);
    } catch (err) {
        return res.json({ error: err });
    }
});

module.exports = router;