var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentsSchema = new Schema({
  name: String,
	major: String,
	personal_statement: String,
	headshot: String,
	pillar: [{
		semester_joined: String,
		semester_left: String,
		title: String
	}],
  positions: [String],
  email: [String],
	phone: String,
	profile_links: {
		linkedin_url: String,
		twitter: String,
		resume_link: String,
		github_link: String,
		personal_website: String,
		facebook: String
	},
  isAlumni: Boolean,
	isHired: Boolean,
  current_employment: {
		employer: String,
		job_title: String
	},
  isPlaced: Boolean,
	PlacedAt: String,
	skills: [String],
	project_assignments: [String]
});

var Student = mongoose.model('Students', studentsSchema);
module.exports = Student;