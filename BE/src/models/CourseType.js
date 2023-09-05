import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseTypeSchema = new Schema({
    name: {
      type: String,
    },
    created_date: {
      type: Date,
    },
    modified_date: {
        type: Date,
      },
  });
  
  const CourseType = mongoose.model('CourseType', courseTypeSchema);

export default CourseType;