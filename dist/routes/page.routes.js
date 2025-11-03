"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
// Home
pageRouter.get('/', (req, res) => {
    res.status(200).render('home', {
        title: "Home"
    });
});
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', {
        title: "About Us"
    });
});
pageRouter.get('/contact', (req, res) => {
    res.status(200).render('contact', {
        title: "Contact Us"
    });
});
exports.default = pageRouter;
