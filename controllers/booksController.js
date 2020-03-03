const db = require("../models");
const axios = require("axios");

// "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes"

module.exports = {

    // function to use API from backend
    searchApi: (req, res) => {

        axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))

    },

    // find all books saved in db
    findAll: (req, res) => {
        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to save a book to the db
    save: (req, res) => {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: (req, res) => {
        db.Book
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to delete a book from the db
    remove: (req, res) => {
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

};