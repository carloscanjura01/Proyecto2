const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const crypto = require("crypto");
const debug = require("debug")("app:user-model")

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    hashedpassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    }
    ,
    tokens: {
      type: [String],
      default: [],
    },
    roles : {
        type : [String],
        default: ["user"],
    },
    savedPosts: {
        type: [Schema.Types.ObjectId],
        ref: "Post",
        default: [],
    },
 },
  { timestamps: true });

userSchema.methods = {
    encryptPassword: function (password) {
        if (!password) return "";

        try {
            const _password = crypto.pbkdf2Sync(
                password,
                this.salt,
                1000, 64,
                `sha512`
            ).toString("hex");

            return _password;
        } catch (error) {
            debug({ error });
            return "";
        }
    },
    makeSalt: function () {
        return crypto.randomBytes(16).toString("hex");
    },
    comparePassword: function (password) {
        return this.hashedpassword === this.encryptPassword(password);
    }
}

userSchema
    .virtual("password")
    .set(function (password = crypto.randomBytes(16).toString()) {
        this.salt = this.makeSalt();
        this.hashedpassword = this.encryptPassword(password);
    });


module.exports = Mongoose.model("User", userSchema)