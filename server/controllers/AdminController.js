const route = require('express').Router()
const adminModel = require('../models/AdminSchema')
const sha = require('sha1')
const jwt = require('jsonwebtoken')
require('dotenv').config()

route.get('/', async(req, res) => {

})

route.get('/:id', async(req, res) => {

})

route.post('/', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const isAdminPresent = await adminModel.findOne({ email });

        if (!isAdminPresent) {
            return res.status(400).json({ success: false, message: 'Email Invalid' });
        }

        if (isAdminPresent.password !== sha(password)) {
            return res.status(402).json({ success: false, message: 'Password Invalid' });
        }

        const payload = { id: isAdminPresent._id };
        const token = jwt.sign(payload, process.env.TOKEN_KEY);

        return res.status(200).json({ success: true, token });

    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

route.put("/:id", async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const token = req.params.id; 
        
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.TOKEN_KEY);
        } catch (error) {
            return res.status(401).send({ success: false, message: "Invalid Token" });
        }

        const isAdminPresent = await adminModel.findOne({ _id: decoded.id });
        if (!isAdminPresent) {
            return res.status(400).send({ success: false, message: "Admin not found" });
        }

        if (isAdminPresent.password !== sha(oldPassword)) {
            return res.status(402).send({ success: false, message: "Current Password is Incorrect" });
        }

        await adminModel.updateOne({ _id: decoded.id }, { $set: { password: sha(newPassword) } });

        res.status(200).send({ success: true, message: "Password updated successfully" });

    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

route.delete('/:id', async(req, res) => {

})


module.exports = route;