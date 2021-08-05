import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import locations from './data/locations.js';

import Location from './models/locationModel.js';

import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Order.deleteMany();
    // await Product.deleteMany();
    // await User.deleteMany();

    // const createdUsers=  await User.insertMany(users);

    // const adminUser = createdUsers[0]._id;

    const sampleLocations = locations.map((location) => {
      return { ...location };
      //   return { ...location, user: adminUser };
    });

    await Location.insertMany(sampleLocations);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// const destroyData = async () => {
//     try{
//         await Order.deleteMany();
//         await Product.deleteMany();
//         await User.deleteMany();

//         console.log('Data Destroyed!'.red.inverse)
//         process.exit();
//     } catch (error) {
//         console.error(`${error}`.red.inverse);
//         process.exit(1);
//     }
// }
//delete when in production
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
