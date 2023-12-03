const express = require("express");
const router = express.Router();

const ROLES = require("../data/rols.constants.json");

const { createPostValidator, idInParamsValidator, saveCommentValidator, } = require("../validators/post.validators");
const validateFields = require("../validators/index-middleware");

const {authentication, authorization} = require ("../middleware/auth.middlewares")

const postController= require ("../controllers/post.controller");



router.get("/", postController.findAll);
router.get("/own", 
authentication,
 authorization(ROLES.USER),
 postController.findOwn
 );
 router.get("/saved",
 authentication,
 authorization(ROLES.USER),
postController.findSavedPosts);

router.get("/user/:identifier",
idInParamsValidator,
validateFields,
postController.findByUser);

router.get("/:identifier",
idInParamsValidator,
validateFields,
postController.findOneById);


  router.post(["/","/:identifier"],
  authentication,
  authorization(ROLES.USER),
 createPostValidator,
  validateFields, 
  postController.save);

  router.patch("/visibility/:identifier",
  authentication,
  authorization(ROLES.USER),
 idInParamsValidator,
  validateFields, 
  postController.toggleHidden
  );


  router.patch("/like/:identifier",
    authentication,
    authorization(ROLES.USER),
    idInParamsValidator,
    validateFields,
    postController.likeAPost
  );

  router.patch("/save/:identifier",
    authentication,
    authorization(ROLES.USER),
    idInParamsValidator,
    validateFields,
    postController.saveAPost
  );

  router.patch(
    "/comment/:identifier",
    authentication,
    authorization(ROLES.USER),
    idInParamsValidator,
    saveCommentValidator,
    validateFields,
    postController.saveComment
  );

  router.delete("/:identifier",
  authentication,
  authorization(ROLES.USER),
  validateFields, 
  postController.deleteById);

module.exports = router;