import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema({
    name: {
      type: String,
    },
    professon: {
      type: String,
    },
    created_date: {
      type: Date,
    },
    modified_date: {
        type: Date,
      },
    status: {
        type: String,
    },

    // links: {
    //   images: [
    //     {
    //       url: {
    //         type: String,
    //       }
    //     }
    //   ]
    // }
  });
  
  const Course = mongoose.model('Course', courseSchema);

export default Course;