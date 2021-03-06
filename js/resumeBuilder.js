var bio = {
    "name": "Anton Matrosov",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "+97253-700-00-00",
        "email": "antmatr@yandex.ru",
        "github": "antmatr",
        "twitter": "@antmatr",
        "location": "Haifa, Israel"
    },
    "welcomeMessage": "Lorem Ipsum!",
    "skills": [
        "HTML", "CSS", "JavaScript", "Git and GitHub", "Web Design"
    ],
    "biopic": "https://s3.amazonaws.com/accredible-api-users/images/122883/original/data?1462825868"
},
    education = {
        "schools": [{
            "name": "Saint-Petersburg State University of Culture and Arts",
            "location": "Saint-Petersburg, Russia",
            "degree": "Master",
            "majors": [
                "Design", "CS"
            ],
            "dates": "2009 - 2014",
            "url": "http://www.spbgik.ru/"
        }],
        "onlineCourses": [{
            "title": "Udacity Front-End Developer Nanodegree",
            "school": "Udacity",
            "date": "2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }]
    },
    work = {
        "jobs": [{
            "employer": "Myself",
            "title": "Freelancer",
            "location": "Saint-Petersburg, Russia",
            "dates": "2012 - 2014",
            "description": "Flash-banners, 3d-modeling"
        }, {
            "employer": "Initflow",
            "title": "Front-End Developer",
            "location": "Saint-Petersburg, Russia",
            "dates": "2014 - 2015",
            "description": "Front-End developing using HTML5, CSS, JS"
        }, {
            "employer": "Myself",
            "title": "Freelancer",
            "location": "Haifa, Israel",
            "dates": "2015 - now",
            "description": "Email-newsletters, flash-banners"
        }]
    },
    projects = {
        "projects": [{
            "title": "Portfolio",
            "dates": "2016",
            "description": "Udacity Front-End Developer Nanodegree Project",
            "images": [
                "https://s3.amazonaws.com/accredible_api_evidence_items/previews/137807/large/1462894789958?1462894059"
            ]
        }]
    };

bio.display = function () {
    $("#header")
        .prepend(HTMLheaderName.replace("%data%", bio.name))
        .append(HTMLbioPic.replace("%data%", bio.biopic))
        .append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#name").append(HTMLheaderRole.replace("%data%", bio.role));

    $("#topContacts, #footerContacts")
        .append(HTMLmobile.replace("%data%", bio.contacts.mobile))
        .append(HTMLemail.replace("%data%", bio.contacts.email))
        .append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
        .append(HTMLgithub.replace("%data%", bio.contacts.github))
        .append(HTMLlocation.replace("%data%", bio.contacts.location));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }
};

education.display = function () {
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last")
            .append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree))
            .append(HTMLschoolDates.replace("%data%", school.dates))
            .append(HTMLschoolLocation.replace("%data%", school.location))
            .append(HTMLschoolMajor.replace("%data%", school.majors.join(", ")));
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function (course) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last")
            .append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school))
            .append(HTMLonlineDates.replace("%data%", course.date))
            .append(HTMLonlineURL.replace("%data%", course.url));
    });
};

work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last")
            .append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title))
            .append(HTMLworkDates.replace("%data%", job.dates))
            .append(HTMLworkLocation.replace("%data%", job.location))
            .append(HTMLworkDescription.replace("%data%", job.description));
    });
};


projects.display = function () {
    projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last")
            .append(HTMLprojectTitle.replace("%data%", project.title))
            .append(HTMLprojectDates.replace("%data%", project.dates))
            .append(HTMLprojectDescription.replace("%data%", project.description));
        project.images.forEach(function (image) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
        });

    });
};

addMap = function () {
    $("#mapDiv").append(googleMap);
};

bio.display();
work.display();
projects.display();
education.display();
addMap();