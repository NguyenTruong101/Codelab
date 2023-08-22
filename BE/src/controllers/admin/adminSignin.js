import httpError from 'http-errors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import adminModel from '../../models/adminModel';

export default async (request, response, next) => {
    const { account, password } = request.body;

    if (!account || !password)
        return next(httpError(400, 'account & Password is required!'));

    const admin = await adminModel.findOne({ account: account });
    if (!admin)
        return next(httpError(401, 'Unauthorized.'));

    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch)
        return next(httpError(401, 'Unauthorized.'));

    const accessToken = jwt.sign({ id: user._id, account: user.account }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
    //const refeshToken = jwt.sign({ id: user._id }, process.env.REFESH_TOKEN_SECRET, { expiresIn: '365d' });

    await response.cookie('codelab/cookie', accessToken, { httpOnly: true, signed: true });
    return response.json({
        status: 200,
        message: 'Signin Admin suscess.',
        accessToken
    });
    
};