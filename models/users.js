const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
  profile: {
    email: {
      type: String,
      required: true
    },
    user_handle: {
      type: String,
      required: true
    },
    user_name: {
      type: String,
      required: true
    },
    user_id: {
      type: String,
      required: true
    },
    // user_avatar:{

    // }

  },
  password: {
    type: String,
    required: true
  },
  birthday: {
    type: String
  },
  user_bio: {
    type: String,
    required: true
  },
  followers: {
    type: Array,
    default: []
  },
  following: {
    type: Array,
    default: []
  }

})

module.exports = mongoose.model('Users', UserSchema);
