const db = require("../models");
var express = require('express');
// Defining methods for the booksController
module.exports = {
  createProfile: function(req, res){
    console.log("running controller/userControllere.js - createProfile - req " + JSON.stringify(req.body));
    db.Profiles
    .create(req.body)
    .then(dbModel => {
      res.json(dbModel)
      console.log("running controller/userControllere.js - createProfile - res"  + dbModel)
    })
    .catch(err =>{ res.status(422).json(err),
      console.log("createProfile error: " +err)
    });

  },// end createProfile

  validateId: function(req, res){
    console.log("running controller/userControllere.js - validateId " + JSON.stringify(req.body));
    req.session.name = req.body.name;
    console.log("from usercontroller " + req.session.name)
    
    db.Profiles
    .find(req.body)
    .then(dbModel => {
      console.log(" from validate ss" + JSON.stringify(dbModel[0]._id));
      req.session.newId = dbModel[0]._id;
      req.session.tstId = "xx";
      console.log("from res in validateId " + req.session.newId + " " + req.session.tstId + " "  + req.session.name)
      res.json(dbModel)
    })
    .catch(err =>{ res.status(422).json(err),
      console.log("validateId error " +err)
    });

  },
    getMatches: function (req, res){
      console.log(" running from controller/userCongtroller.js  = getMatches - newID: " + req.session.newId)
      const getID = req.session.newId;
      db.Profiles
      .find({"_id":{$ne:getID}})
      .then(dbModel =>{
        console.log("from res in getMatches ")
        dbModel.tstValue = "xx";
        res.json({dbModel})

      })
      .catch(err => {res.status(422).json(err),
        console.log("getMatches error " + err)
      });


    },
    createOverture: function(req, res){
      console.log("running controller/userControllere.js - createOverture - req " + JSON.stringify(req.body));
      console.log("running controller/userControllere.js - createOverture - req " + JSON.stringify(req.session.newId));
     // adding the session value to the req object..
      req.body.senderId = req.session.newId;
      console.log("running controller/userControllere.js - createOverture - req " + JSON.stringify(req.body));
      db.Overtures
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
        console.log("running controller/userControllere.js - createProfile - res"  + dbModel)
      })
      .catch(err =>{ res.status(422).json(err),
        console.log("createProfile error: " +err)
      });
  
    }// end createOverture
      
      // end createProfile
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
