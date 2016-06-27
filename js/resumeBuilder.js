
var bio = {
  "name": "Julio Mojica",
  "role": "Webdeveloper",
    "contacts": {
      "mobile": "347-997-0830",
      "email": "juliocmojica@gmail.com",
      "GitHub": "j8298c",
      "location": "New York, NY"
    },
    "welcomeMessage": "Do What Makes You Happy!",
    "skills": ["HTML5", " CSS ", " JavaScript ", " Bootstrap ", " Responsive Web Design ", " Project Management "],
    "bioPic": "images/fry.jpg"
  }

  var work = {
    "jobs" : [
      {
    "employer": "US Army",
    "title": "Civil Affairs Operations Sergeant",
    "dates": "2012 - Present",
    "location": "Fort Bragg, NC",
    "description": "Plan and corrdinate and execute civil affairs operations"
},
{
  "employer": "US Army",
  "title": "Recruiter",
  "dates": "2008 - 2012",
  "location": "Brooklyn, NY",
  "description": "Process and hire and match up jobs to applicants strengths"
},
{
  "employer": "US Army",
  "title": "Logistics Manager",
  "dates": "2002 - 2008",
  "location": "Aberdeen, MD",
  "description": "Manage issue and maintain orginizational property"
}
]
}
  var education = {
    "schools": [
      {
        "name": "Jamestown Community College",
        "location": "Jamestown, NY",
        "degree": "Associate",
        "major": "Information Technology",
        "dates": "2015 - Present",
        "url": "https://sunyjcc.edu"
      },
      {
        "name": "Fayettville Technical Communinty College",
        "location": "Fayettville",
        "degree": "Associates",
        "major": "General Education",
        "dates": "2013-2015",
        "url": "https://faytechcc.edu"
      }
    ],
    "onlineCourses": [
      {
      "title": "Front End Web Development",
      "school": "Udacity",
      "date": "2016",
      "url": "https://udacity.com"
      }
    ]
  }
  var projects = {
    "projects": [
      {
        "name": "Portfolio",
        "dates": "2016",
        "description": "Portfolio Project",
        "url": "https://github.com/j8298c"
      },
      {
        "name": "2nd Project",
        "dates": "2016",
        "description": "animal card",
        "url": "https://github.com/j8298c"
        }
    ]
  }

  bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage );
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.GitHub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedLocation);

    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      $("#skills").append(formattedSkills);
    }
};
bio.display();

work.display = function() {
  if (work.jobs.length >0) {
    $("#workExperience").append(HTMLworkStart);
    for(i in work.jobs) {
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
  var formattedWorkDescrp = HTMLworkDescription.replace("%data%", work.jobs[i].description);
  var formattedWorkTitle = formattedEmployer + formattedTitle;

  $(".work-entry").append(formattedWorkTitle);
  $(".work-entry").append(formattedWorkDates);
  $(".work-entry").append(formattedWorkLoc);
  $(".work-entry").append(formattedWorkDescrp);
}
}
};
work.display();

projects.display = function() {
  if(projects.projects.length > 0) {
    $("#projects").append(HTMLprojectStart);
    for(i in projects.projects) {
      var formattedProjectName = HTMLprojectTitle.replace("%data%", projects.projects[i].name);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedProjectDescript = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      var formattedProjectUrl = HTMLprojectImage.replace("%data%", projects.projects[i].url);
      $(".project-entry").append(formattedProjectName);
      $("project-entry").append(formattedProjectDates);
      $("project-entry").append(formattedProjectDescript);
    }
  }
};
projects.display();

education.display = function() {
  if(education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    for(i in education.schools) {
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry").append(formattedSchoolName);
      $(".education-entry").append(formattedSchoolDegree);
      $(".education-entry").append(formattedSchoolDates);
      $(".education-entry").append(formattedSchoolLocation);
      $(".education-entry").append(formattedSchoolMajor);

    }
      if(education.onlineCourses.length > 0) {
        $("#Online:last").append(HTMLonlineClasses);
        for(i in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDate);
        $(".education-entry:last").append(formattedOnlineUrl);

        }
      }
   }
};
education.display();

$("#mapDiv").append(googleMap);
