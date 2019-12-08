var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurgers) {
      res.render("index", {
        msg: "Welcome!",
        burger: dbBurgers
      });
    });
  });
  app.get("/api/burger", (req, res)=>{
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then((dbBurger)=> {
      res.json(dbBurger);
    });
  });
  app.post("/api/add", function(req, res) {
    console.log('body'+req.body.burger_name);
    db.Burger.create({
      burger_name: req.body.burger_name,
    })
      .then(function(dbBurger) {
        // res.json(dbBurger);
        res.redirect('/')
      });
  });

  app.put("/api/burger", function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });
};