const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Invalid email address',
    },
  },
  contactNumber: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^\d+$/.test(value),
      message: 'Invalid phone number',
    },
  },
  projectDescription: {
    type: String,
    maxlength: 250,
  },
  attachment: {
    type: Buffer, // You may want to store file data as Buffer or use GridFS for larger files
  },
});

const ContactFormModel = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactFormModel;
