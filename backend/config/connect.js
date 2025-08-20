import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/Emworks')
    .then(
        ()=>{
            console.log("data base connected succssfully");
        }
    )
    .catch(
        (Error)=>{
            console.log(Error);
        }
    )
    export default mongoose;