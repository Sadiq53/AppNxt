const routes = require('express').Router()


routes.use('/admin/project', require('../controllers/ProjectController'));
routes.use('/admin/home', require('../controllers/HomeBannerController'));
routes.use('/admin/counter', require('../controllers/CounterController'));
routes.use('/admin/slider', require('../controllers/SliderController'));
routes.use('/admin/procedure', require('../controllers/WorkProcessController'));
routes.use('/admin/service', require('../controllers/WhatWeDoController'));
routes.use('/admin', require('../controllers/AdminController'));

module.exports = routes;