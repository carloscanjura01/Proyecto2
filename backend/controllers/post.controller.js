const Post = require("../models/post.model");
const debug = require("debug")("app:post-controller");
const controller = {};


controller.save = async (req, res, next) => {
  //Premisa - La ruta save debe de estar autenticada

  try {
    const { title, description, image } = req.body;
    const { identifier } = req.params;
    const { user } = req;
    //console.log(user + "hola")

    // debug({ user });

    // const post = new Post({
    //   title: title,
    //   description: description,
    //   image: image,
    // });

    let post = await Post.findById(identifier);

    if (!post) {
      post = new Post();
      post["user"] = user._id;
    } else {
      if (!post["user"].equals(user._id)) {
        return res.status(403).json({ error: "This is not your post" });
      }
    }

    post["title"] = title;
    post["description"] = description;
    post["image"] = image;

    const postSaved = await post.save();

    if (!postSaved) {
      return res.status(509).json({ error: "Error creating Post" });
    }
    return res.status(201).json(postSaved);
  } catch (error) {
    next(error);
  }
};

controller.findAll = async (req, res, next) => {
  try {
    const posts = 
    await Post.find({ hidden: false })
      .populate("user", "username email")
      .populate("comments.user", "username email")
      .populate("likes", "username email");







    return res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
}

controller.findOneById = async (req, res, next) => {
  try {
    const { identifier } = req.params;

    // TODO Verificar si esta visible
    const post = await Post.findOne({
      _id: identifier,
      hidden: false,
    })
      .populate("user", "username email _id")
      .populate("comments.user", "username email")
      .populate("likes", "username email");


    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

controller.findByUser = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const posts = await Post.find({ user: identifier, hidden: false })
      .populate("user", "username email _id")
      .populate("comments.user", "username email")
      .populate("likes", "username email");


    return res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
}

controller.findOwn = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;

    const posts = await Post.find({ user: userId })
      .populate("user", "username email _id")
      .populate("comments.user", "username email")
      .populate("likes", "username email");


    return res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
}

controller.findSavedPosts = async (req, res, next) => {
  try {
    const user = await req.user.populate({
      path: "savedPosts",
      populate: [
        {
          path: "user",
          select: "username email",
        },
        
        {
          path: "comments.user",
          select: "username email",
        },
      ],
    });

    return res.status(200).json({ posts: user["savedPosts"] });
  } catch (error) {
    next(error);
  }
}

controller.deleteById = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const user = req.user;

    const post = await Post.findOneAndDelete({
      _id: identifier,
      user: user._id,
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
}

controller.toggleHidden = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const user = req.user;

    //Obtener el post con el id
    //Verificar pertenencia del post al usuario
    const post = await Post.findOne({
      _id: identifier,
      user: user._id,
    })
      .populate("user", "username email ")
      .populate("comments.user", "username email")
      .populate("likes", "username email");


    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    //Cambiar el valor
    post.hidden = !post.hidden;
    //Commit los cambios
    const newPost = await post.save();
    //Cambio de post
    return res.status(200).json({ newPost });
  } catch (error) {
    next(error);
  }
}

controller.likeAPost = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const user = req.user;

    const post = await Post.findOne({
      _id: identifier,
      hidden: false,
    })
      .populate("user", "username email -_id ")
      .populate("likes", "username email")
      .populate("comments.user", "username email");

      
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      
      //DAR LIKE O DISLIKE
      let _likes = post ["likes"] || [];
      const alreadyLike = _likes.findIndex(_i => _i.equals(user._id)) >= 0;

  if(alreadyLike){
    _likes = _likes.filter(_i => !_i.equals(user._id));
  }else {
    _likes = [user._id, ..._likes];
  }

  post["likes"] = _likes;

  const newPost = await (await post.save())
  .populate("likes" , "username email"); 
    return res.status(200).json({ newPost });
  } catch (error) {
    console.error (error);
    return res.status(500).json({error: "Internal Server Error"});
  }
}

controller.saveAPost = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const user = req.user;

    const post = await Post.findOne({
      _id: identifier,
      hidden: false,
    })
      .populate("user", "username email ")
      .populate("likes", "username email");

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    let _posts = user["savedPosts"] || [];

    const alreadySaved = _posts.findIndex((_i) => _i.equals(post._id)) >= 0;

    if (alreadySaved) {
      _posts = _posts.filter((_i) => !_i.equals(post._id));
    } else {
      _posts = [post._id, ..._posts];
    }

    user["savedPosts"] = _posts;

    const newUser = await (
      await user.save()
    ).populate({
      path: "savedPosts",
      populate: [
        {
          path: "user",
          select: "username email",
        },
        {
          path: "likes",
          select: "username email",
        },
        {
          path: "comments.user",
          select: "username email",
        },
      ],
    });

    return res.status(200).json({ posts: newUser["savedPosts"] });
  } catch (error) {
    next(error);
  }
}

controller.saveComment = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const { content, _id: commentId } = req.body;
    const user = req.user;

    //Obtener el post {id,hidden}
    const post = await Post.findOne({ _id: identifier, hidden: false })
      .populate("user", "username email")
      .populate("likes", "username email")


    //Verificar que el post exista
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    //Buscar la existencia de un comentario previo en base a commentId
    let _comments = post["comments"];

    const prevIndex = _comments.findIndex((_c) => _c._id.equals(commentId));

    if (prevIndex >= 0) {
      //Comentario ya existe
      const _comment = _comments[prevIndex];
      _comment.history = [..._comment.history, _comment.content];
      _comment.content = content;

      _comments[prevIndex] = _comment;
    } else {
      //Comentario no existe
      _comments = [
        ..._comments,
        { user: user._id, timestamp: new Date(), content },
      ];
    }

    //Guardar el post => commit
    post["comments"] = _comments;

    const newPost = await (
      await post.save()
    ).populate("comments.user", "username email");
    //Retornamos el post actualizado
    return res.status(200).json(newPost);
  } catch (error) {
    next(error);
  }
}

module.exports = controller;
