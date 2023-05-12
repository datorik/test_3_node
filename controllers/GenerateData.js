import Employee from "../models/employee"

export const generateData = async (req, res) => {
    try {
        const array = []
        const employees = await Employee.find()
        for (let i = 0; i < 200; i++) {
            const temp = {
                name: getName(6),
                surname: getName(8),
                position: getName(8),
                email: getEmail(),
                phone: getPhone(),
                notes: getNotes(),
                boss_id: employees[Math.floor(Math.random() * employees.length)]['_id']
            }

            if ((Math.floor(Math.random() * 200)) == 1) {
                delete temp.boss_id
            }
            array.push(temp)
        }


        const result = await Employee.collection.insertMany(array)
        res.json({
            success: result
        })

    } catch (e) {
        res.status(500).json(e)
    }
}

const getName = (legend) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let word = ''
    for (let i = 0; i < legend; i++) {
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    return word
}
const getPhone = () => {
    const alphabet = '0123456789'
    let word = '+'
    for (let i = 0; i < 8; i++) {
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    return word
}

const getEmail = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let word = ''
    for (let i = 0; i < 6; i++) {
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    word += '@'
    for (let i = 0; i < 4; i++) {
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    word += '.'
    for (let i = 0; i < 3; i++) {
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    return word
}

const getNotes = () => {
    let word = ''
    for (let i = 0; i < 5; i++) {
        word += getName(6) + ' '
    }
    return word
}

