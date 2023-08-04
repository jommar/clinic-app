import mongoose from 'mongoose'

const ConditionSchema = new mongoose.Schema({
  code: {
    coding: [
      {
        system: String,
        code: String,
        display: String,
      },
    ],
    text: String,
  },
  outcome: String,
  onsetAge: Number,
  onsetRange: String,
  onsetPeriod: String,
})

const FamilyMemberHistorySchema = new mongoose.Schema({
  identifier: [
    {
      use: String,
      type: {
        coding: [
          {
            system: String,
            code: String,
            display: String,
          },
        ],
        text: String,
      },
      system: String,
      value: String,
    },
  ],
  status: String,
  patient: {
    reference: String,
    display: String,
  },
  date: Date,
  name: String,
  relationship: {
    coding: [
      {
        system: String,
        code: String,
        display: String,
      },
    ],
    text: String,
  },
  gender: String,
  bornPeriod: String,
  age: Number,
  ageRange: String,
  ageString: String,
  estimatedAge: Boolean,
  deceasedBoolean: Boolean,
  deceasedAge: Number,
  deceasedRange: String,
  deceasedDate: Date,
  reasonCode: [
    {
      coding: [
        {
          system: String,
          code: String,
          display: String,
        },
      ],
      text: String,
    },
  ],
  reasonReference: [
    {
      reference: String,
      display: String,
    },
  ],
  note: [
    {
      authorString: String,
      time: Date,
      text: String,
    },
  ],
  condition: [ConditionSchema],
})

const FamilyMember = mongoose.model(
  'FamilyMemberHistory',
  FamilyMemberHistorySchema,
)

export default FamilyMember
