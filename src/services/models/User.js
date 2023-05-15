import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:   {type: String, required: true},
    phone:  {type: String, required: true},
    slots:  [{
        type: Schema.Types.ObjectId,
        ref: "Slot",
    }],
})

export default mongoose.model('User', UserSchema)