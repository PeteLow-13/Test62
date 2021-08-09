import asyncHandler from 'express-async-handler';
import Location from '../models/locationModel.js';

// @desc   Fetch all locations
// @route  Get /api/locations
// @access  Public
const getLocations = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Location.countDocuments({ ...keyword });
  const locations = await Location.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ locations, page, pages: Math.ceil(count / pageSize) });
});

// @desc   Fetch single location
// @route  Get /api/locations/:id
// @access  Public
const getLocationById = asyncHandler(async (req, res) => {
  const location = await Location.findById(req.params.id);

  if (location) {
    res.json(location);
  } else {
    res.status(404);
    throw new Error('Location not found');
  }
});

// @desc   Delete a location
// @route  Delete /api/locations/:id
// @access  Private/admin
const deleteLocation = asyncHandler(async (req, res) => {
  const location = await Location.findById(req.params.id);

  if (location) {
    await location.remove();
    res.json({ message: 'location removed' });
  } else {
    res.status(404);
    throw new Error('Location not found');
  }
});

// @desc   Create new location
// @route  Post /api/locations
// @access  Private/admin
const createLocation = asyncHandler(async (req, res) => {
  const location = new Location({
    name: 'sample',
    user: req.user._id,
    //add image and other data as it is ready
  });

  const createLocation = await location.save();
  res.status(201).json(createdlocation);
});

//add update Location, dont forget Pedro!!

export { getLocations, getLocationById, deleteLocation, createLocation };
