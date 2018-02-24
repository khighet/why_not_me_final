const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
     console.log("running controller/articleController.js findAll() - send");
    db.Articles
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel)
        console.log("from controller/articleController.js findAll - db " + dbModel );
      }
      )
      .catch(err => res.status(422).json(err));
      console.log("from contoller/articleController.js finall() - return");
  }
  // },
  // findById: function(req, res) {
  //   db.Articles
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Articles
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Articles
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Articles
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
