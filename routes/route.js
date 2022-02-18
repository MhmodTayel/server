const express = require("express");
const router = express.Router();

const controller = require('../controllers/controller')

// router.get("url", (req, res, next) => {
//   controller()
//     .then((doc) => res.json(doc))
//     .catch((e) => next(e));
// });

module.exports = router;
