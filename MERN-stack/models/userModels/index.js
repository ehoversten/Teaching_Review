const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

//password hashing/encryption
userSchema.pre('save', async function(next) {
    const user = this;

    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;

    next();
});

userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
