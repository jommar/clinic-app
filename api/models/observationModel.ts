const mongoose = require('mongoose')

export const CodingSchema = new mongoose.Schema({
  system: String,
  version: String,
  code: String,
  display: String,
  userSelected: Boolean,
})

export const CodeableConceptSchema = new mongoose.Schema({
  coding: [CodingSchema],
  text: String,
})

export const ReferenceSchema = new mongoose.Schema({
  reference: String,
  type: String,
  identifier: {
    use: String,
    type: CodeableConceptSchema,
    system: String,
    value: String,
  },
  display: String,
})

export const PeriodSchema = new mongoose.Schema({
  start: Date,
  end: Date,
})

export const ObservationSchema = new mongoose.Schema({
  resourceType: {
    type: String,
    default: 'Observation',
    required: true,
  },
  identifier: [
    {
      use: String,
      type: CodeableConceptSchema,
      system: String,
      value: String,
      period: PeriodSchema,
      assigner: ReferenceSchema,
    },
  ],
  status: {
    type: String,
    required: true,
    enum: [
      'registered',
      'preliminary',
      'final',
      'amended',
      'corrected',
      'cancelled',
      'entered-in-error',
      'unknown',
    ], // Based on the defined values in the FHIR spec
  },
  category: [CodeableConceptSchema],
  code: {
    type: CodeableConceptSchema,
    required: true,
  },
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  effectiveDateTime: Date,
  effectivePeriod: PeriodSchema,
  issued: Date,
  performer: [ReferenceSchema],
  valueString: String,
  // ... And so on for other fields
})

export const Observation = mongoose.model('Observation', ObservationSchema)

export default Observation