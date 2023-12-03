const Mongoose = require ("mongoose");
const Schema = Mongoose.Schema;

const PostSchema = new Schema({
title: {
 type : String,
 trin: true,
 require: true,
},
description: {
type : String,
trin: true,
require: true,
},
image: {
type : String,
require: true,

},
hidden: {
type: Boolean,
default: false
},
user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes : {
    type : [Schema.Types.ObjectId],
    ref : "User",
    default: []
  },
  comments: {
    type: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      content : {
        type : String,
        required: true
      },
      timestamps : {
        type : Date,
        required : true
      },
      history : {
        type: [String],
        default:[]
      }
    }],
    default:[]
  }
} , {timestamps: true } );

module.exports = Mongoose.model("Post", PostSchema)