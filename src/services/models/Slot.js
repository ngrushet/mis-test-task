import mongoose, { Schema } from 'mongoose';

const Slot = new mongoose.Schema({
    doctor:     {type: Schema.Types.ObjectId, ref: 'Doctor, required: true'},
    user:       {type: Schema.Types.ObjectId, ref: 'User',  required: true},
    startAt:    {type: Date,   required: true},
    endAt:      {type: Date,   required: true},
})

export default mongoose.model('Slot', Slot)