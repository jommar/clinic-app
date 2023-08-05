import mongoose from 'mongoose'

export const ConditionSchema = new mongoose.Schema({
  resourceType: {
    type: String,
    default: 'Condition',
    required: true,
  },
  identifier: [
    {
      use: String,
      value: String,
      system: String,
    },
  ],
  clinicalStatus: {
    coding: [
      {
        system: String,
        code: String,
        display: String,
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: String,
        code: String,
        display: String,
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: String,
          code: String,
          display: String,
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: String,
        code: String,
        display: String,
      },
    ],
  },
  code: {
    coding: [
      {
        system: String,
        code: String,
        display: String,
      },
    ],
  },
  bodySite: [
    {
      coding: [
        {
          system: String,
          code: String,
          display: String,
        },
      ],
    },
  ],
  subject: {
    reference: String,
    display: String,
  },
  encounter: {
    reference: String,
    display: String,
  },
  onsetDateTime: Date,
  abatementDateTime: Date,
  recordedDate: Date,
  recorder: {
    reference: String,
    display: String,
  },
  asserter: {
    reference: String,
    display: String,
  },
  stage: {
    summary: {
      coding: [
        {
          system: String,
          code: String,
          display: String,
        },
      ],
    },
    assessment: [
      {
        reference: String,
        display: String,
      },
    ],
  },
  evidence: [
    {
      code: {
        coding: [
          {
            system: String,
            code: String,
            display: String,
          },
        ],
      },
      detail: [
        {
          reference: String,
          display: String,
        },
      ],
    },
  ],
  note: [
    {
      authorString: String,
      time: Date,
      text: String,
    },
  ],
})

export const Condition = mongoose.model('Condition', ConditionSchema)

export default Condition
