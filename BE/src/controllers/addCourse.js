import User from '../models/userModel.js';
import Course from '../models/courseModel.js';
import httpError from 'http-errors';

export default async (request, response, next) => {

    const { name, professon, created_date, modified_date,status } = request.body;
    if (!name && !professon && !created_date && !modified_date && !status )
        return next(
            httpError(
                400, "Bad Request."
            ));

    const _id = request.userData.id
    const user = await User.findOne({ _id: _id });
    if (user) {

        const courseName = await (await Course.find({ _id: { $in: user.list_course } })).map(item => item?.name);
        if (courseName.includes(name))
            return next(
                httpError(
                    409, "Course already exists."
                ));

        const newCourse = new Course({
            name,
            professon,
            created_date,
            modified_date,
            status,
        });

        const course = await newCourse.save();
        await User.findByIdAndUpdate(user._id, { $push: { list_course: course._id } }, { new: true });
        user.list_course.push(course._id);
        const courseUpdate = await Course.find({ _id: { $in: user.list_course } });


        return response.json({
            status: 200,
            messages: "Updating song successfully.",
            list_course: courseUpdate


        });
    }
    else
        return next(
            httpError(
                500, "Updating song failed."
            ));

};