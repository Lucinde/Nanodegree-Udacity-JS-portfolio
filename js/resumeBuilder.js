var bio = {
  name: "Lucinde van Ballegooijen",
  role: "webdeveloper",
  contacts: {
    mobile: "0613047460",
    email: "lucinde@lucinde.nl",
    github: "Lucinde",
    twitter: "@atLucinde",
    location: "Brakel, The Netherlands"
  },
  welcomeMessage: "Welcome to @Lucinde!",
  skills: ["HTML", "CSS", "JavaScript"],
  biopic: "images/fry.jpg",

  display: function() {

    var formattedBio = HTMLheaderName.replace("%data%", bio.name);
    formattedBio += "<br/>" + HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    formattedBio += HTMLbioPic.replace("%data%", bio.biopic);

    for (var prop in bio.contacts) {
      var formattedContact = HTMLcontactGeneric.replace("%contact%", prop);
      formattedContact = formattedContact.replace("%data%", bio.contacts[prop]);
      formattedBio += formattedContact;
    }

    formattedBio += HTMLskillsStart;

    bio.skills.forEach(function(skill) {
      var formattedSkills = HTMLskills.replace("%data%", skill);
      formattedBio += formattedSkills;
    });
    $("#header").prepend(formattedBio);
  }
};

var education = {
  "schools": [{
    "name": "SintLucas",
    "location": "Boxtel, The Netherlands",
    "degree": "Media Designer",
    "majors": "Graphic Design",
    "dates": "2005-2009",
    "url": "http://www.sintlucas.nl"
  }, {
    "name": "Heerenlanden College",
    "location": "Leerdam, The Netherlands",
    "degree": "HAVO",
    "majors": "Culture and Society",
    "dates": "2000-2005",
    "url": "http://www.heerenlandencollege.nl"
  }],
  "onlineCourses": [{
    "title": "Front End Developer Nanodegree",
    "school": "Udacity",
    "dates": "2016-2017",
    "url": "<a href='http://www.udacity.com' target='_blank'>www.udacity.com</a>"
  }, {
    "title": "Javascript, CSS, HTML, PHP",
    "school": "Team Treehouse",
    "dates": "2012",
    "url": "<a href='http://www.teamtreehouse.com' target='_blank'>www.teamtreehouse.com</a>"
  }, {
    "title": "Make Art That Sells",
    "school": "Lilla Rogers Studio",
    "dates": "2015",
    "url": "<a href='http://www.lillarogers.com/' target='_blank'>www.lillarogers.com</a>"
  }],

  display: function() {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedSchool = formattedName + formattedLocation + formattedDegree + formattedMajor + formattedDates;

      $(".education-entry:last").append(formattedSchool);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
      $("#education").append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
      var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
      var formattedOnlineEducation = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineUrl;

      $(".education-entry:last").append(formattedOnlineEducation);
    });
  }
};

var work = {
  jobs: [{
    employer: "@Lucinde",
    title: "webdesigner and developer",
    location: "Brakel, The Netherlands",
    dates: "2006 - present",
    description: "Design and develop websites for small businesses"
  }, {
    employer: "HH-productions",
    title: "Graphic Designer",
    location: "Andel, The Netherlands",
    dates: "2008 - present",
    description: "Design corporate identities"
  }],

  display: function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

      $(".work-entry:last").append(formattedEmployerTitle);
    });
  }

};

var projects = {
  "experiences": [{
    "projectTitle": "portfolio Project Udacity",
    "projectDates": 2016,
    "projectDescription": "creating a portfolio website for my work",
    "projectImage": "images/wijkplatform-200.jpg"
  }, {
    "projectTitle": "Salt Organic",
    "projectDates": 2016,
    "projectDescription": "creating a corporate identity and website",
    "projectImage": "images/saltorganic-200.jpg"
  }],

  display: function() {
    projects.experiences.forEach(function(experience) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", experience.projectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", experience.projectDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", experience.projectDescription);
      var formattedProjectImage = HTMLprojectImage.replace("%data%", experience.projectImage);

      var formattedExperience = formattedProjectTitle + formattedProjectDates + formattedDescription + formattedProjectImage;

      $(".project-entry:last").append(formattedExperience);
    });
  }

};

$("header").append("test");

$("#main").append(internationalizeButton);

function inName() {
  if (bio.name.length > 0) {
    var firstName = bio.name.slice(0, bio.name.lastIndexOf(" "));
    var lastName = bio.name.slice(bio.name.lastIndexOf(" ") + 1);
    lastName = lastName.toUpperCase();
    var formattedName = HTMLheaderName.replace("%data%", firstName + " " + lastName);

    $("#header").append(formattedName);
  }
}

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);
