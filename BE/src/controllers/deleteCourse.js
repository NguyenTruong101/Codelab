import User from '../models/userModel';
import jwt from 'jsonwebtoken';
import httpError from 'http-errors';

const ACCESS_TOKEN_SECRET = "7f302edb383631b8bfec2992cbfeddfb";

export default async (request, response, next) => {
    
    const accessToken = request.header('Authorization')?.split("Bearer ")[1];
    const _id = await jwt.verify(accessToken, ACCESS_TOKEN_SECRET).id
    const { list_course } = await User.findOne({ _id: _id });
    
    if (!request.params.id) {
        return next(
            httpError(
                400, "ID is required!."
            ));
    }

    else if (!list_course.includes(request.params.id))
        return next(
            httpError(
                404, "Song does not exist."s
            ));
    else
        await User.findByIdAndUpdate(_id, { $pull: { list_course: request.params.id } }, { new: true });

        return response.status(200).json({
            status: 200,
            message: "The song has been successfully deleted"
    })
};