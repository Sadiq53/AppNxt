const route = require('express').Router()
const counterModel = require('../models/CounterSchema')

route.get('/', async (req, res) => {
    try {
        const counterData = await counterModel.findOne({}); 

        if (!counterData) {
            return res.status(404).send({ success: false, message: 'No counter data found' });
        }

        return res.status(200).send({ success: true, data: counterData });
    } catch (error) {
        console.error('Error fetching counter data:', error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
});

route.get('/:id', async(req, res) => {

})

route.post('/', async (req, res) => {
    try {
        const { YE, SC, PD, IR } = req.body;

        if (YE === undefined || SC === undefined || PD === undefined || IR === undefined) {
            return res.status(400).send({ success: false, message: 'Missing required fields' });
        }

        const updatedCounter = await counterModel.findOneAndUpdate(
            {}, 
            { $set: { YE, SC, PD, IR } }, 
            { upsert: true, new: true } 
        );

        return res.status(200).send({ success: true, data: updatedCounter });
    } catch (error) {
        console.error('Error updating counter:', error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
});

route.put('/:id', async(req, res) => {

})

route.delete('/:id', async(req, res) => {

})


module.exports = route;