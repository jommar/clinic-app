import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  relationship: String,
  name: {
    use: String,
    family: String,
    given: [String],
  },
  telecom: [
    {
      system: String,
      value: String,
      use: String,
    },
  ],
  address: {
    use: String,
    type: String,
    text: String,
    line: [String],
    city: String,
    district: String,
    state: String,
    postalCode: String,
    country: String,
  },
})

const patientSchema = new mongoose.Schema({
  resourceType: {
    type: String,
    default: 'Patient',
  },
  identifier: [
    {
      use: String,
      type: {
        coding: [
          {
            system: String,
            code: String,
          },
        ],
      },
      system: String,
      value: String,
    },
  ],
  active: Boolean,
  name: [
    {
      use: String,
      family: String,
      given: [String],
      prefix: [String],
      suffix: [String],
    },
  ],
  telecom: [
    {
      system: String,
      value: String,
      use: String,
    },
  ],
  gender: String,
  birthDate: Date,
  deceasedBoolean: Boolean,
  deceasedDateTime: Date,
  address: [
    {
      use: String,
      type: String,
      text: String,
      line: [String],
      city: String,
      district: String,
      state: String,
      postalCode: String,
      country: String,
    },
  ],
  maritalStatus: {
    coding: [
      {
        system: String,
        code: String,
      },
    ],
  },
  multipleBirthBoolean: Boolean,
  multipleBirthInteger: Number,
  contact: [contactSchema],
  communication: [
    {
      language: {
        coding: [
          {
            system: String,
            code: String,
          },
        ],
      },
      preferred: Boolean,
    },
  ],
})

const Patient = mongoose.model('Patient', patientSchema)

export default Patient
