import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import locations from './data/locations.js';
import User from './models/userModel.js';
import Location from './models/locationModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    //clear out entire database
    await Location.deleteMany();
    await User.deleteMany();

    // add users to database from users.js
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    //add locations to database from locations.js
    const sampleLocations = locations.map((location) => {
      return { ...location, user: adminUser };
    });

    await Location.insertMany(sampleLocations);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Location.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
//delete when in production node backend/seeder -d
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
