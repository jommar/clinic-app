import User, { UserSchema } from './userModel'
import FamilyMember, { FamilyMemberHistorySchema } from './familyMemberModel'
import Patient, { PatientSchema } from './patientModel'

export default {
  User,
  FamilyMember,
  Patient,
}

export { UserSchema, FamilyMemberHistorySchema, PatientSchema }
