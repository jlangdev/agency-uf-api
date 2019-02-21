var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentsSchema = new Schema({
	id: String,
  name: String,
	major: String,
	school: String,
	graduation_semester: String,
	emails: {
		UFL: String,
		permanent: String
	},
	phone: String,
	personal_statement: String,
	pillar: {
		semester_joined: String,
		semester_left: String,
		pillar_name: String
	},
  positions: {
		current: String,
		past: [String]
	},
	profile_links: {
		linkedin_url: String,
		twitter: String,
		resume_link: String,
		github_link: String,
		personal_website: String,
		facebook: String
	},
	isAlumni: Boolean,
	isGraduating: Boolean,
	isHired: Boolean,
  current_employment: {
		employer: String,
		job_title: String
	},
	project_assignments: {
		first: String,
		second: String,
		third: String
	},
	birthdate: String,
	emergency_contact1: {
		contact1_name: String,
		contact1_phone: String,
		contact1_alt_phone: String
	},
	emergency_contact2: {
		contact2_name: String,
		contact2_phone: String,
		contact2_alt_phone: String
	},
	allergies: [String],
	race: {
		first: String,
		second: String
	},
	ethnicity: {
		first: String,
		second: String
	}
});

var Student = mongoose.model('students', studentsSchema,'students');
module.exports = Student;