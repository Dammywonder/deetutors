import mongoose from 'mongoose'

const profileSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectID,
        required:true,
        ref:'User',
    },
image:{
    type:String,
        required:true,
},
balance:{
    type:String,
},
subjectCategory:{
    type:String,
    required:true,

},
subject:{
    type:String,
    required:true,
},
})
const Profile=mongoose.model('Profile',profileSchema)
export default Profile