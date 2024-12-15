import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI; // Correct variable name
        console.log('Mongo URI:', uri); // Debugging line to see the URI

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
