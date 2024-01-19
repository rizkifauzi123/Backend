// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
router.get("/employee", EmployeeController.index);
router.post("/employee", EmployeeController.store);
router.put("/employee/:id", EmployeeController.update);
router.delete("/employee/:id", EmployeeController.destroy);
router.get("/employee/:id", EmployeeController.show);
router.get('/employees/search/:name', EmployeeController.search);
router.get("/employee/status/active", EmployeeController.search);


// export router
module.exports = router;
