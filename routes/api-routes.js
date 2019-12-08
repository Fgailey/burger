var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // app.get("/", (req,res)=>{
  //     res.render('INDEX')
  // })
  app.get("/api/burger", (req, res)=>{
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then((dbBurger)=> {
      res.json(dbBurger);
    });
  });
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurgers) {
      res.render("index", {
        msg: "Welcome!",
        burger: dbBurgers
      });
    });
  });
};