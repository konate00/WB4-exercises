"use strict";
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00"
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }

];

    // For Course start date
function getCourseStartDate(CourseId) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId === CourseId) {
            return new Date(courses[i].StartDate).toLocaleString();
        }
    }
    return "course not found";
}


        // For Course title
function getCourseTitle(CourseId) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId == CourseId) {
            return courses[i].Title;
        }
    }
    return "Course not found";
}

            // For Course Title of course that Cost $50 or less 

var inexpensiveCourses = [];
for (let i = 0; i < courses.length; i++){
    if (courses[i].Fee <= 50){
        inexpensiveCourses.push(courses[i].Title);
    };
}


function findAffordableCourses(courseList) {
    const affordableCourses = [];

    for (let i = 0; i < courseList.length; i++) {
        const course = courseList[i];
        const fee = parseFloat(course.Fee);
        if (fee <= 50.00) {
            affordableCourses.push(course.Fee);
        }
    }

    return affordableCourses;
}

// const affordableCourseTitles = findAffordableCourses(courses);


function getCourseByLocation(location) {
    const locationCourseTitles = [];
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].Location === location) {
            locationCourseTitles.push(courses[i].Title);
        }
    }
    return locationCourseTitles;
}

console.log("Start date of PROG200 course: " + getCourseStartDate("PROG200"));
console.log("Title of PROJ500 course: " + getCourseTitle("PROJ500"));
// console.log("Titles of courses that cost $50 or less: " + getAffordableCourse);
console.log(findAffordableCourses(courses));
console.log("Courses that meet in Classroom 1: " + getCourseByLocation("Classroom 1").join(", "));
