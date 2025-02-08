const { default: mongoose } = require("mongoose")
const connection = {}
export const connectDB = async (params) => {
    try {
        if (connection.isConnected) {
            console.log('using existing connection')
            return;
        }
        const db =await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connection[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
}