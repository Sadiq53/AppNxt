const route = require('express').Router()
const serviceModel = require('../models/ServiceSchema')
const { v4: uuidv4 } = require('uuid'); 

route.get('/', async (req, res) => {
    try {
        const services = await serviceModel.findOne({});

        if (!services) {
            return res.status(404).json({ success: false, message: 'No services found' });
        }

        return res.status(200).json({ success: true, data: services });
    } catch (error) {
        console.error('Error fetching services:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


route.get('/:id', async(req, res) => {

})

route.post('/', async (req, res) => {
    try {
        let { service } = req.body;

        if (!Array.isArray(service) || service.length !== 4) {
            return res.status(400).send({ success: false, message: 'Exactly 4 service objects are required' });
        }

        let existingServiceDoc = await serviceModel.findOne({});

        if (!existingServiceDoc) {
            service = service.map(item => ({
                uniqueId: uuidv4(),
                head: item.head,
                body: item.body
            }));

            await serviceModel.create({ service });
        } else {
            const existingServices = existingServiceDoc.service;

            const updatedServices = service.map(item => {
                const existingItem = existingServices.find(s => s.uniqueId === item.uniqueId);
                return existingItem 
                    ? { ...existingItem, head: item.head, body: item.body } 
                    : { uniqueId: uuidv4(), head: item.head, body: item.body }; 
            });

            await serviceModel.updateOne({}, { $set: { service: updatedServices } });
        }

        const services = await serviceModel.findOne({});

        return res.status(200).send({ success: true, message: 'Service updated successfully', data: services });
    } catch (error) {
        console.error('Error updating services:', error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
});

route.put('/:id', async(req, res) => {

})

route.delete('/:id', async(req, res) => {

})


module.exports = route;