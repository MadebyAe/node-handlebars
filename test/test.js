var fs              = require("fs");
var handlebars      = require("..");
var vows            = require("vows");
var assert          = require("assert");
// ======================================== 
// ! Global
// ========================================

var hbs = handlebars.create();

hbs.engine(__dirname + "/test.html", {name:"Jakob"}, function(err, html) {
  if (err) {
    throw err;
  }
  console.log(html);
});