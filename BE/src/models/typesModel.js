import mongoose from 'mongoose';

const { Schema } = mongoose;

const typesSchema = new Schema({
    course_id: {
      type: String,
    },
    type: {
      type: String,
    },
    created_date: {
      type: Date,
    },
    modified_date: {
        type: Date,
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
  
  const Types = mongoose.model('Types', typesSchema);

export default Types;