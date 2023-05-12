import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
    boss_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees',
        required: false,
    },
})

export default mongoose.model('Employee', EmployeeSchema)
