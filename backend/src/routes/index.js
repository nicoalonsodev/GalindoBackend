const { Router } = require("express");
const router = Router();
const multer = require("multer");

const { getAllPropertiesHandler } = require("../handlers/getAllPropertiesHandler");
const { getPropertyByIdHandler } = require("../handlers/getPropertyByIdHandler");
const { getUsersHandler } = require("../handlers/getUsersHandler");
const { deletePropertyHandler } = require("../handlers/deletePropertyHandler");
const { postPropertyHandler } = require("../handlers/postPropertyHandler");
const { postUserHandler } = require("../handlers/postUserHandler");
const { putUserHandler } = require("../handlers/putUserHandler");
const { putPropertyHandler } = require("../handlers/putPropertyHandler");

const { authenticateToken } = require('../helpers/authenticateToken');
const {loginHandler} = require('../handlers/authHandler');
const {protectedRouteHandler} = require('../handlers/authHandler');
const {deleteUserHandler} = require('../handlers/deleteUserHandler');

router.get("/properties", getAllPropertiesHandler);
router.get("/properties/:id", getPropertyByIdHandler);
router.get("/users", getUsersHandler);

router.post('/login', loginHandler);
router.get('/admin', authenticateToken, protectedRouteHandler);

router.post("/properties", postPropertyHandler);
router.post("/users", postUserHandler);

router.put("/properties/:id", putPropertyHandler);
router.put("/users/:id", putUserHandler);


router.delete("/properties/:id", deletePropertyHandler);
router.delete("/user/:id", deleteUserHandler);

module.exports = router;
