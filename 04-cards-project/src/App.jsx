import React from "react";
import Card from "./components/Temp.jsx";

const App = () => {

    const jobs = [
  {
    brandLogo: "https://cdn.simpleicons.org/amazon",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/microsoft",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    name: "Apple",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    name: "Meta",
    datePosted: "10 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "UI Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/adobe",
    name: "Adobe",
    datePosted: "4 weeks ago",
    post: "UX Researcher",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/ibm",
    name: "IBM",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/salesforce",
    name: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Mumbai, India"
  }
];

console.log(jobs);

    return (
        <div className="parent">
            {jobs.map(function(elem){
                return <Card company={elem.name} logo={elem.brandLogo} datePosted={elem.datePosted}
                 post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
            })}
        </div>
    );
};

export default App;