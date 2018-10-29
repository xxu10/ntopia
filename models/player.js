var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
    personId: { type: String, unique: true, index: true },
  teamId: String,
  jersey: String,
    isActive: String,
  pos: String,
  heightFeet: String,
  heightInches: String,
  heightMeters: String,
  weightPounds: String,
  weightKilograms: String,
  dateOfBirthUTC: String,
    teams: Array,
    draft: Object,
  nbaDebutYear: String,
  yearsPro: String,
  collegeName: String,
  lastAffiliation: String,
  country: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  reports: { type: Number, default: 0 },
  random: { type: [Number], index: '2d' },
  voted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Player', playerSchema);
