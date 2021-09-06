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
    goImage: { type: String, required: false },
    go1h3: { type: String, required: false },
    go1all: { type: String, required: false },
    go1li1: { type: String, required: false },
    go1li2: { type: String, required: false },
    go1li3: { type: String, required: false },
    go1li4: { type: String, required: false },
    go2h3: { type: String, required: false },
    go2all: { type: String, required: false },
    go2li1: { type: String, required: false },
    go2li2: { type: String, required: false },
    go2li3: { type: String, required: false },
    go2li4: { type: String, required: false },
    go3h3: { type: String, required: false },
    go3all: { type: String, required: false },
    go3li1: { type: String, required: false },
    go3li2: { type: String, required: false },
    go3li3: { type: String, required: false },
    go3li4: { type: String, required: false },
    eat: { type: String, required: false },
    drink: { type: String, required: false },
    play: { type: String, required: false },
    stay: { type: String, required: false },
    footerImage: { type: String, Required: true },
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model('Location', locationSchema);

export default Location;
