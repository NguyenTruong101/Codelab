import User from '../models/userModel.js';
import Type from '../models/typesModel.js';
import httpError from 'http-errors';

export default async (request, response, next) => {

    const { course_id, type, created_date, modified_date } = request.body;
    if (!course_id && !type && !created_date && !modified_date  )
        return next(
            httpError(
                400, "Bad Request."
            ));

    const _id = request.userData.id
    const user = await User.findOne({ _id: _id });
    if (user) {

        const courseType = await (await Course.find({ _id: { $in: user.list_type } })).map(item => item?.name);
        if (courseType.includes(course_id))
            return next(
                httpError(
                    409, "Course already exists."
                ));

        const newType = new Type({
            course_id,
            professon,
            created_date,
            modified_date,
        });

        const type = await newType.save();
        await User.findByIdAndUpdate(user._id, { $push: { list_type: type._id } }, { new: true });
        user.list_type.push(type._id);
        const typeUpdate = await Type.find({ _id: { $in: user.list_type } });


        return response.json({
            status: 200,
            messages: "Updating type_course successfully.",
            list_type: typeUpdate
        });
    }
    else
        return next(
            httpError(
                500, "Updating course failed."
            ));

};