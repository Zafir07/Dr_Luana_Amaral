const { Router } = require("express");
const { validateContact } = require("../middleware/validateContact");
const { submitContact } = require("../controllers/contact.controller");

const router = Router();

router.post("/contact", validateContact, submitContact);

module.exports = router;
