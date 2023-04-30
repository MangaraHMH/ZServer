const express = require("express");
const PasienController = require("../controllers");
const router = express.Router();

router.get("/", PasienController.getPasien);
router.post("/", PasienController.addPasien);
router.get("/:id", PasienController.getPasienDetail);
router.put("/:id", PasienController.updatePasien);
router.delete("/:id", PasienController.deletePasien);

module.exports = router;
