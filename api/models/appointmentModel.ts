import mongoose, { Schema } from 'mongoose'

export const ParticipantSchema = new Schema({
  type: [{ coding: [{ system: String, code: String, display: String }] }],
  actor: { type: Schema.Types.ObjectId, ref: 'Resource' }, // A reference to another resource e.g. Patient, Practitioner, etc.
  required: {
    type: String,
    enum: ['required', 'optional', 'information-only'],
  },
  status: {
    type: String,
    enum: ['accepted', 'declined', 'tentative', 'needs-action'],
  },
})

export const AppointmentSchema = new Schema({
  resourceType: { type: String, default: 'Appointment' },
  identifier: [{ use: String, system: String, value: String }],
  status: {
    type: String,
    enum: [
      'booked',
      'cancelled',
      'fulfilled',
      'noshow',
      'entered-in-error',
      'pending',
      'proposed',
      'checked-in',
    ],
  },
  serviceCategory: [
    { coding: [{ system: String, code: String, display: String }] },
  ],
  serviceType: [
    { coding: [{ system: String, code: String, display: String }] },
  ],
  specialty: [{ coding: [{ system: String, code: String, display: String }] }],
  appointmentType: {
    coding: [{ system: String, code: String, display: String }],
  },
  reasonCode: [{ coding: [{ system: String, code: String, display: String }] }],
  reasonReference: [{ type: Schema.Types.ObjectId, ref: 'Resource' }],
  priority: Number,
  description: String,
  supportingInformation: [{ type: Schema.Types.ObjectId, ref: 'Resource' }],
  start: Date,
  end: Date,
  created: Date,
  comment: String,
  patientInstruction: String,
  basedOn: [{ type: Schema.Types.ObjectId, ref: 'Resource' }],
  participant: [ParticipantSchema],
  requestedPeriod: [{ start: Date, end: Date }],
})

export const Appointment = mongoose.model('Appointment', AppointmentSchema)

export default Appointment
