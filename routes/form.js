const router = require('express').Router()
const FormMessage = require('../models/form')
router.post('/', async (req, res) => {
    try {
        const{state1, state2, state3, state4, state5, state6, state7,state8,state9,state10} =  req.body;
        const newFormMessage = new FormMessage({ question_1:state1,  question_2:state2,  question_3:state3,  question_4:state4,  question_5:state5,  question_6:state6,  question_7:state7, question_8:state8,  question_9:state9,  question_10:state10})
        await newFormMessage.save();
        res.status(201).json(newFormMessage );
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
}
)

router.get('/', async (req, res)=>{
    
    try {
        const newUser = await FormMessage.find()
        res.status(200).json(newUser)
        
    } catch (error) {
        res.status(409).json({message: error.message})
    }
})

module.exports = router;

