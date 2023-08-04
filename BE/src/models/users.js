import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
    userName: {
        type: String,
        required: [true, 'Tên không được để trống'],
        maxLength: [30, 'Tên của bạn không được vượt quá 30 ký tự']
    },
    phoneNumber: {
        type: Number,
        require: true,
    },
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