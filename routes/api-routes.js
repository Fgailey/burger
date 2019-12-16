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
    console.log('body'+JSON.stringify(req.body));
    db.Burger.create(req.body)
      .then(function() {
        console.log('next')
        res.redirect('/')
      });
  });
  // Update the burger devour
  app.put("/api/update/:id", function(req, res) {
    db.Burger.update({devoured: 1},
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbBurger) {
        res.json(dbBurger);
        console.log('update?')
      });
  });
  // Delete the burger
  app.delete("/api/remove/:id", function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });
};