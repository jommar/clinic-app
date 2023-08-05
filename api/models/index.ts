import User, { UserSchema } from './userModel'
import FamilyMember, { FamilyMemberHistorySchema } from './familyMemberModel'
import Patient, { PatientSchema } from './patientModel'
import Appointment, { AppointmentSchema } from './appointmentModel'
import Condition, { ConditionSchema } from './conditionModel'
import Observation, { ObservationSchema } from './observationModel'

export default {
  User,
  FamilyMember,
  Patient,
  Appointment,
  Condition,
  Observation,
}

export {
  UserSchema,
  FamilyMemberHistorySchema,
  PatientSchema,
  AppointmentSchema,
  ConditionSchema,
  ObservationSchema,
}
