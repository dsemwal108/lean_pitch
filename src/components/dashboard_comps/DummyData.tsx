import PDM from "../asserts/OurTrainings.png";
import CSP from "../asserts/OurTrainings1.png";
import Bootcamp from "../asserts/OurTrainings2.png";
import DesignThink from "../asserts/OurTrainings3.png";
import Meetup from "../asserts/Meetup.png";
import StayHome from "../asserts/StayHome.png";
import Blog from "../asserts/blogs.png";

const TrainingsData = [
    { icon: DesignThink, title: "Design Thinking", date: "22th Sep, 2022" },
    { icon: CSP, title: "Certified Scrum Product Owner", date: "25th Sep, 2022" },
    { icon: PDM, title: "Product Management LaunchPad", date: "27th Sep, 2022" },
    { icon: CSP, title: "Advanced Certified Scrum Product Owner", date: "2th Oct, 2022" },
    { icon: Bootcamp, title: "Product Management Bootcamp", date: "9th Nov, 2022" },
];

const MeetUps = [
    { image: Meetup, title: "Capturing User Stories using impact Mapping", date: "11 Jun 2022", place: "Bengaluru" },
    { image: StayHome, title: "Stay Home 🏠! Stay Healthy 💜", date: "25 July 2022", place: "Chennai" },
    { image: Meetup, title: "The Art and Science of Behaviour Design", date: "1 Aug 2022", place: "Pune" },
    { image: StayHome, title: "Capturing User Stories using impact Mapping", date: "11 Jun 2022", place: "Bengaluru" },
];
const Webinars = [
    { image: StayHome, title: "Remaining in Problem Domain for User Needs - Summary", date: "30th Sep, 2021" },
    { image: Meetup, title: "Lean Startup & PM Summary", date: "9th Sep, 2021" },
    { image: StayHome, title: "Case Study: Ooloi Labs", date: "26th Aug, 2021" },
];
const Blogs = [
    { image: Blog, title: "Product Management Certifications", author: "Jayaprakash D B" },
    { image: StayHome, title: "The Blue psychology", author: "Pravat Ranjan" },
    { image: Blog, title: "Pravat Ranjan", author: "Satisha Venkataramaiah" },
];

const Videos = [
    { link: "https://www.youtube.com/embed/CgAZK3R_fTs", title: "Who is a Product Owner?" },
    { link: "https://www.youtube.com/embed/5X8LCqcc-PI", title: "What is Agile Manifesto?" },
    { link: "https://www.youtube.com/embed/aeNruMCoDDo", title: "CSM Certification | Certified Scrum Master (CSM) Certification Training - Leanpitch" },
];

const Conference = `Conferences are not just about learning from the speakers. It’s also about meeting new people, learning from attendees, making connections, getting to know each other and being part of a community.

Having hosted the conference online last year and after close consultation with the community, speakers, exhibitors and event partners, we have decided to host our next conference in person to make it more effective.
                    We will be back with more information once COVID subsides`;

export default TrainingsData;
export { MeetUps, Webinars, Videos, Conference ,Blogs};
