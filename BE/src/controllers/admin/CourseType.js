import CourseType from "../../../models/CourseType"
const getAll = async (request, response, next) => {
    const data = await CourseType.find();
    return response.json({
        status: 200,
        messages: "OK",
        data
    });
}
const createCourseType =  async (request, response, next) => {
    const { name } = request.body; 
    const newCourseType = new CourseType({ name, modified_date: Date.now(), created_date: Date.now() });
    const response = await newCourseType.save();
    return response.json({
        status: 200,
        messages: "OK",
        data: response
    })
}

const editCourseType = async (request, response, next) => {
    const { name } = req.body;
    const id = request.params.id
    try{
        const response = await CourseType.findByIdAndUpdate(id, {name}, {new: true});
        if(!response){
            return response.json({
                status: 404,
                messages: "Course Type Not Found",
                data
            });
        }
        return response.json({
            status: 200,
            messages: "OK",
            data: response
        });
    }catch(e){
        return response.json({
            status: 400,
            messages: "Error",
        });
    }
   
}

const deleteCourseType = async (request, response, next) => {
    const id = request.params.id;
    const courseType = await CourseType.findByIdAndDelete(id);
    if (!courseType) { return response.status(404).json({ messages: 'CourseType not found' }); }
    return response.json({ status: 200, messages: 'CourseType deleted successfully' });
}

export {deleteCourseType, editCourseType, createCourseType, getAll};