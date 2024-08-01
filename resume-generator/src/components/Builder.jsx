import { PersonInfo } from "./PersonInfo.jsx";
import { SchoolInfo } from "./SchoolInfo.jsx";
import { WorkInfo } from "./WorkInfo.jsx";
import { ShowResume } from "./Resume.jsx";
import { useState } from "react";
import "../styles/Builder.css";

function Builder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [educationContainer, setEducationContainer] = useState([]);
  const [workContainer, setWorkContainer] = useState([]);

  return (
    <>
      <div>
        <PersonInfo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
        <SchoolInfo
          school={school}
          setSchool={setSchool}
          degree={degree}
          setDegree={setDegree}
          schoolStartDate={schoolStartDate}
          setSchoolStartDate={setSchoolStartDate}
          schoolEndDate={schoolEndDate}
          setSchoolEndDate={setSchoolEndDate}
          container={educationContainer}
          setContainer={setEducationContainer}
        />
        <WorkInfo
          position={position}
          setPosition={setPosition}
          company={company}
          setCompany={setCompany}
          jobStartDate={jobStartDate}
          setJobStartDate={setJobStartDate}
          jobEndDate={jobEndDate}
          setJobEndDate={setJobEndDate}
          container={workContainer}
          setContainer={setWorkContainer}
        />
      </div>
      <ShowResume
        name={name}
        email={email}
        phone={phone}
        school={school}
        degree={degree}
        location={location}
        schoolStartDate={schoolStartDate}
        schoolEndDate={schoolEndDate}
        position={position}
        company={company}
        jobStartDate={jobStartDate}
        jobEndDate={jobEndDate}
        educationContainer={educationContainer}
        workContainer={workContainer}
      />
    </>
  );
}

export { Builder };
