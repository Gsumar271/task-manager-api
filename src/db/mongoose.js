const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const taskOne = new Task({
//     description: 'Go and see the room'
// })

// taskOne.save().then(() => {
//     console.log(taskOne)
// }).catch((error) => {
//     console.log('Error!', error)
// })


// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     password:{
//         type: String,
//         minlength: 7,
//         required: true,
//         trim: true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password is not valid')
//             }
//         }
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }  
// })

// const me = new User({
//     name: ' teilp ',
//     password: 'somethingto',
//     email: ' ltliman@gmail.com '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })