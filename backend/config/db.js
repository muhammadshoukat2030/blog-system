const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Local MongoDB setup ke baad ye smooth connect hoga
        await mongoose.connect('mongodb://127.0.0.1:27017/blogdb');
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.error('Database Connection Failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;