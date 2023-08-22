import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const Admin = new Schema({
    adminAccount: {
        type: String,
        required: [true, 'Email không được để trống'],
    },
    adminPassword: {
        type: String,
        required: [true, 'Mật khẩu không được để trống'],
        minlength: [8, 'Mật khẩu của bạn phải dài hơn 8 ký tự'],
    },
});
const AdminModel =  mongoose.model('Admin', Admin);
export default AdminModel;