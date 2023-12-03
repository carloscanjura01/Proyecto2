const express = require ("express")
const router= express.Router();

const authController = require ("../controllers/auth.controller");
const runValidator = require ("../validators/index-middleware");
const {registerValidator} = require ("../validators/auth.validators");
const { authentication } = require("../middleware/auth.middlewares");

router.post ("/register",
registerValidator,
runValidator,
authController.register
);

router.post("/login", authController.login);

router.get("/whoami",
authentication,
authController.whoami
);
module.exports = router;