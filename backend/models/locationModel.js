import mongoose from 'mongoose';

const locationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    point1: { type: String, required: false },
    point2: { type: String, required: false },
    point3: { type: String, required: false },
    bonusPoint: { type: String, required: false },
    go1: {
      h3: { type: String },
      li: { type: String },
    },
    go2: {
      h3: { type: String },
      li: { type: String },
    },
    eat: { type: String, required: false },
    drink: { type: String, required: false },
    play: { type: String, required: false },
    stay: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model('Location', locationSchema);

export default Location;
