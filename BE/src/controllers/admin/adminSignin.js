import httpError from 'http-errors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AdminModel from '../../models/adminModel.js';

export default async (request, response, next) => {
    const { account, password } = request.body;
    if (!account || !password)
        return next(httpError(400, 'account & Password is required!'));

    // const admin = await AdminModel.findOne({ adminAccount: account });
    const admin = await AdminModel.findOne({adminAccount: account});
    console.log(await bcrypt.hash(password, 10))

    if (!admin)
        return next(httpError(401, 'Unauthorized.'));

    const isPasswordMatch = await bcrypt.compare(password, admin.adminPassword);
    if (!isPasswordMatch)
        return next(httpError(401, 'Unauthorized.'));

    const accessToken = jwt.sign({ id: admin._id, account: admin.adminAccount }, "truong", { expiresIn: '1d' });
    //const refeshToken = jwt.sign({ id: user._id }, process.env.REFESH_TOKEN_SECRET, { expiresIn: '365d' });

    await response.cookie('codelab/cookie', accessToken, { httpOnly: true, signed: true });
    return response.json({
        status: 200,
        message: 'Signin Admin suscess.',
        accessToken
    });
    
};