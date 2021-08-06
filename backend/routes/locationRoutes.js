import express from 'express';
const router = express.Router();
import {
  getLocations,
  getLocationById,
  // deleteLocation,
  // updateLocation,
  // createLocation,
} from '../controllers/locationController.js';

// import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getLocations);

// router.route('/').get(getLocations).post(protect, admin, createLocation);

router.route('/:id').get(getLocationById);
//   .delete(protect, admin, deleteLocation)
//   .put(protect, admin, updateLocation);

export default router;
