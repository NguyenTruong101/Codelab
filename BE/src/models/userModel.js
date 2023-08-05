import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
    userEmail: {
        type: String,
        required: [true, 'Email không được để trống'],
    },
    userPassword: {
        type: String,
        required: [true, 'Mật khẩu không được để trống'],
        minlength: [8, 'Mật khẩu cảu bạn phải dài hơn 8 ký tự'],
    },
});

model.exports  = mongoose.model('User', User);

export default User;