import User, { UserSchema } from './userModel'
import FamilyMember, { FamilyMemberHistorySchema } from './familyMemberModel'
import Patient, { PatientSchema } from './patientModel'
import Appointment, { AppointmentSchema } from './appointmentModel'

export default {
  User,
  FamilyMember,
  Patient,
  Appointment,
}

export {
  UserSchema,
  FamilyMemberHistorySchema,
  PatientSchema,
  AppointmentSchema,
}
