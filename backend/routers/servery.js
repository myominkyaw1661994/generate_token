const express = require('express');
const token_generator = require('../utils/token_generator');
const router = express.Router();
const db = require('../startup/db')();
const Joi = require('joi');

//create schema 
const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(3).required(),
    company_name: Joi.string().min(3).required(),
    designation: Joi.string().min(3).required()
})

router.get('/', (req, res)=>{
    let query = "select * from surveys;"
    db.query(query, (err, data) => {
        if(err) return res.status(500).json({message: "Something Fail"});
        return res.json(data);
    })
})

router.get('/:id', (req, res)=>{
    let query = "select * from surveys where id=?;"
    let value = req.params.id;
    db.query(query, [value], (err, data) => {
        if(err) return res.status(500).json({message: "Something Fail"});
        return res.json(data);
        
    })
})

router.post('/', (req, res)=>{
    const { error } = schema.validate(req.body)

    if(error) return res.status(400).send(error.message);
    const {name, phone, company_name, designation} = req.body;

    const query = "INSERT INTO surveys (`name`, `phone`, `company_name`, `designation`, `token_number`) VALUES (?)";
    const token = token_generator().toString();
    const value = [name, phone, company_name, designation, token];

    db.query(query, [value], (err, data) => {
        if(err) return res.json(err);

        let id = data.insertId;
        let select_query = "select * from surveys where id=?;"
        db.query(select_query, [id], (err, data) => {
            if(err) return res.json(err);
            return res.json(data);
        })
    })
})

module.exports = router;
