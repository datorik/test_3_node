import Employee from "../models/employee"

export const getAll = async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)

    } catch (e) {
        res.status(500).json(e)
    }
}
export const getMainChildren = async (req, res) => {
    try {
        const employees = await Employee.find({
            boss_id: {$exists: false}
        })
        res.json(employees)


    } catch (e) {
        res.status(500).json(e)
    }
}
export const getChildren = async (req, res) => {
    try {
        const id = req.params.parent
        const employees = await Employee.find({
            'boss_id': id
        })
        res.json(employees)


    } catch (e) {
        res.status(500).json(e)
    }
}
export const getOne = async (req, res) => {
    try {
        const id = req.params.id
        const employees = await Employee.findById(id)
        res.json(employees)

    } catch (e) {
        res.status(500).json(e)
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const employees = await Employee.findByIdAndDelete(id)
        res.json(employees)

    } catch (e) {
        res.status(500).json(e)
    }
}

export const create = async (req, res) => {
    try {
        const doc = new Employee({
            name: req.body.name,
            surname: req.body.surname,
            position: req.body.position,
            email: req.body.email,
            phone: req.body.phone,
            notes: req.body.notes,
            boss_id: req.body.boss_id
        })
        const employee = await doc.save()
        res.json({
            success: employee
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        await Employee.updateOne(
            {
                _id: id
            },
            {
                name: req.body.name,
                surname: req.body.surname,
                position: req.body.position,
                email: req.body.email,
                phone: req.body.phone,
                notes: req.body.notes,
                boss_id: req.body.boss_id
            }
        )
        res.json({
            success: true
        })
    } catch (e) {
        res.status(500).json(e)
    }
}
