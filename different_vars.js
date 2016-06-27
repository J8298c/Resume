var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.GitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
/*append header name and email*/
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $("#skills").append(formattedSkills);
}
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs.dates);
var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs.location);
var formattedWorkDescrp = HTMLworkDescription.replace("%data%", work.jobs.description);

var formattedWorkTitle = formattedEmployer + formattedTitle;
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkTitle);
