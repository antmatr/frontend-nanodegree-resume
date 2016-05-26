var bio =
    {
        "name": "Anton Matrosov",
        "role": "Front-end Developer",
        "contacts": {
            "mobile": "+97253-700-00-00",
            "email": "antmatr@yandex.ru",
            "gitHub": "antmatr",
            "twitter": "@antmatr",
            "location": "Haifa, Israel"
        },
        "welcomeMessage": "Lorem Ipsum!",
        "skills": [
                "HTML", "CSS", "JS", "Git and GitHub", "Web Design"
        ],
        "biopic": "https://s3.amazonaws.com/accredible-api-users/images/122883/original/data?1462825868",
        "display": function () {
            $("#header")
            .prepend(HTMLheaderRole.replace("%data%", bio.role))
            .prepend(HTMLheaderName.replace("%data%", bio.name))
            .append(HTMLemail.replace("%data%", bio.contacts.email))
            .append(HTMLgithub.replace("%data%", bio.contacts.gitHub))
            .append(HTMLlocation.replace("%data%", bio.contacts.location))
            .append(HTMLbioPic.replace("%data%", bio.biopic))
            .append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage))
            .append(HTMLschoolName.replace("%data%", education.schools[0].name));

            if (bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                for (var i = 0; i < bio.skills.length; i++) {
                    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                    $("#skills").append(formattedSkill);
                }
            }
        }
    },
    education =
    {
        "schools":
            [
                {
                    "name": "State School #94",
                    "location": "Saint-Petersburg, Russia",
                    "degree": "High school",
                    "majors":
                        [
                            "IT", "English"
                        ],
                    "dates": "1997 - 2007",
                    "url": "http://www.school-94.narod.ru/"
                }
            ],
        "onlineCourses":
            [
                {
                    "title": "Udacity Front-End Developer Nanodegree",
                    "school": "Udacity",
                    "dates": "2016",
                    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
                }
            ],

        "display": function () {
            for (var school in education.schools) {
                if (education.schools.hasOwnProperty(school)) {
                    $("#education").append(HTMLschoolStart);

                    $(".education-entry:last")
                        .append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree))
                        .append(HTMLschoolDates.replace("%data%", education.schools[school].dates))
                        .append(HTMLschoolLocation.replace("%data%", education.schools[school].location))
                        .append(HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(", ")));
                }
            }
            $("#education").append(HTMLonlineClasses);
            for (var course in education.onlineCourses) {
                if (education.onlineCourses.hasOwnProperty(course)) {
                    $("#education").append(HTMLschoolStart);
                    $(".education-entry:last")
                        .append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school))
                        .append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates))
                        .append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
                }
            }
        }
    },
    work =
    {
        "jobs":
            [
                {
                    "employer": "Myself",
                    "title": "Freelancer",
                    "location": "Saint-Petersburg, Russia",
                    "dates": "2012 - 2014",
                    "description": "Flash-banners, 3d-modeling"
                },
                {
                    "employer": "Initflow",
                    "title": "Front-End Developer",
                    "location": "Saint-Petersburg, Russia",
                    "dates": "2014 - 2015",
                    "description": "Front-End developing using HTML5, CSS, JS"
                },
                {
                    "employer": "Myself",
                    "title": "Freelancer",
                    "location": "Haifa, Israel",
                    "dates": "2015 - now",
                    "description": "Email-newsletter layout, flash-banners"
                }
            ],
        "display": function () {
            for (var job in work.jobs) {
                if (work.jobs.hasOwnProperty(job)) {
                    $("#workExperience").append(HTMLworkStart);

                    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
                        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
                        formattedEmployerTitle = formattedEmployer + formattedTitle,
                        formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
                        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location),
                        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

                    $(".work-entry:last")
                        .append(formattedEmployerTitle)
                        .append(formattedDates)
                        .append(formattedLocation)
                        .append(formattedDescription);
                }
            }
        }
    },
    projects =
    {
        "projects":
            [
                {
                    "title": "Portfolio",
                    "dates": "2016",
                    "description": "Udacity Front-End Developer Nanodegree Project",
                    "images":
                        [
                            "https://s3.amazonaws.com/accredible_api_evidence_items/previews/137807/large/1462894789958?1462894059"
                        ]
                }
            ],
        "display": function () {
            for (var project in projects.projects) {
                if (projects.projects.hasOwnProperty(project)) {

                    $("#projects").append(HTMLprojectStart);

                    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
                        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
                        formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description),
                        images = projects.projects[project].images;

                    $(".project-entry:last")
                        .append(formattedTitle)
                        .append(formattedDates)
                        .append(formattedDescription);

                    for (var image in images)
                        if (images.hasOwnProperty(image)) {
                            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", images[image]));
                        }

                }
            }
        }
    },
    addMap = function () {
        $("#mapDiv").append(googleMap);
    };

bio.display();
work.display();
projects.display();
education.display();
addMap();

