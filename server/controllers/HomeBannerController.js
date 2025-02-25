const route = require('express').Router()
const homeModel = require('../models/HomeSchema')

route.get('/', async (req, res) => {
    try {
        const homeData = await homeModel.findOne({}, { banner: 1, _id: 0 });

        if (!homeData) {
            return res.status(404).send({ success: false, message: 'No banner data found' });
        }

        return res.status(200).send({ success: true, data: homeData.banner });
    } catch (error) {
        console.error('Error fetching banner data:', error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
});

route.get('/:id', async(req, res) => {

})

route.post('/', async (req, res) => {
    try {
        const { banner } = req.body;

        if (!banner) {
            return res.status(400).send({ success: false, message: 'Empty Data Not Accepted' });
        }

        await homeModel.updateOne({}, { $set: { banner } }, { upsert: true });

        return res.status(200).send({ success: true });
    } catch (error) {
        console.error('Error updating banner:', error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
});

route.put('/:id', async(req, res) => {

})

route.delete('/:id', async(req, res) => {

})


module.exports = route;