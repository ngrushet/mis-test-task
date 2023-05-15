import mongoose, { Schema } from 'mongoose';

const Doctor = new mongoose.Schema({
    name:   {type: String, required: true},
    spec:   {type: String, required: true},
    slots:  [{
        type: Schema.Types.ObjectId,
        ref: "Slot",
        required: true
    }],
})

export default mongoose.model('Doctor', Doctor)