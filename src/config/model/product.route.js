const express = require('express')
const productRoutes = express.Router()

let Product = require('./product.model')

productRoutes.route('/addd').post((req, res) => {
    let product = new Product(req.body)
    product.save()
        .then(product => {
            res.status(200).json({ 'product': 'product in added successfully!' })
        })
        .catch(error => {
            res.status(400).send('failed to save database')
        })
})

productRoutes.route('/').get((req, res) => {
    Product.find((error, product) => {
        if (error) {
            console.log(error)
        }
        else { res.json(product) }
    })
})

productRoutes.route('/edit/:id').get((req, res) => {
    let id = req.params.id
    Product.findById((error, product) => {
        res.json(product)
    })
})

productRoutes.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id, (error, product) => {
        if (!product) {
            res.status(404).send('data is not found')
        }
        else {
            console.log(product)
            product.name = req.body.name
            product.price = req.body.price
            product.url = req.body.url
            product.decreption = req.body.decreption

            product.save().then(business => {
                res.json('Update complete')
            })
                .catch(error => {
                    res.status(400).send('failed to update database')
                })
        }
    })
})

productRoutes.route('/delete/:id').post((req, res) => {
    Product.findByIdAndRemove({ _id: req.params.id }, (error, product) => {
        if (error) {
            res.json(error)
        } else {
            res.json('success removed')
        }


    })
})

module.exports = productRoutes