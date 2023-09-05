import React, { useState } from "react";
import Select from "react-select";
import ClipLoader from "react-spinners/ClipLoader";

export default function SearchNotes() {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [button, setButton] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [heading, setHeading] = useState("");

  const courses = [
    { value: "cse", label: "Computer Science and Engineering" },
    { value: "aids", label: "Artificial Intelligence and Data Science" },
    { value: "civil", label: "Civil Engineering" },
    { value: "mechanical", label: "Mechanical Engineering" },
    { value: "electrical", label: "Electrical Engineering" },
    { value: "ece", label: "Electronics and Communication" },
  ];

  // Define subjects by branch
  const subjectsByBranch = {
    cse: {
      "1sem": [
        { value: "Engineering Maths 1", label: "Engineering Maths 1" },
        { value: "Chemistry", label: "Chemistry" },
        { value: "Human Values", label: "Human Values" },
        {
          value: "Programming for problem Solving",
          label: "Programming for problem Solving",
        },
        {
          value: "Basic Electrical Engineering",
          label: "Basic Electrical Engineering",
        },
      ],
      "2sem": [
        { value: "Engineering Maths 2", label: "Engineering Maths 2" },
        { value: "Engineering Physics", label: "Engineering Physics" },
        { value: "Communication Skills", label: "Communication Skills" },
        {
          value: "Basic Mechanical Engineering",
          label: "Basic Mechanical Engineering",
        },
        { value: "Basic Civil Engineering", label: "Basic Civil Engineering" },
      ],
      "3sem": [
        {
          value: "Advance Engineering Mathematics",
          label: "Advance Engineering Mathematics",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        { value: "Digital Electronics", label: "Digital Electronics" },
        {
          value: "Data Structures and Algorithms",
          label: "Data Structures and Algorithms",
        },
        {
          value: "Object Oriented Programming",
          label: "Object Oriented Programming",
        },
        { value: "Software Engineering", label: "Software Engineering" },
      ],
      "4sem": [
        {
          value: "Discrete Mathematics Structure",
          label: "Discrete Mathematics Structure",
        },
        {
          value: "Managerial Economics and Financial Accounting",
          label: "Managerial Economics and Financial Accounting",
        },
        {
          value: "Microprocessor & Interfaces",
          label: "Microprocessor & Interfaces",
        },
        {
          value: "Database Management System",
          label: "Database Management System",
        },
        { value: "Theory Of Computation", label: "Theory Of Computation" },
        {
          value: "Data Communication and Computer Networks",
          label: "Data Communication and Computer Networks",
        },
      ],
      "5sem": [
        {
          value: "Information Theory & Coding",
          label: "Information Theory & Coding",
        },
        { value: "Compiler Design", label: "Compiler Design" },
        { value: "Operating System", label: "Operating System" },
        {
          value: "Computer Graphics & Multimedia",
          label: "Computer Graphics & Multimedia",
        },
        { value: "Analysis of Algorithms", label: "Analysis of Algorithms" },
        { value: "Wireless Communication", label: "Wireless Communication" },
      ],
      "6sem": [
        {
          value: "Digital Image Processing",
          label: "Digital Image Processing",
        },
        { value: "Machine Learning", label: "Machine Learning" },
        {
          value: "Information Security System",
          label: "Information Security System",
        },
        {
          value: "Computer Architecture and Organization",
          label: "Computer Architecture and Organization",
        },
        { value: "Artificial Intelligence", label: "Artificial Intelligence" },
        { value: "Cloud Computing", label: "Cloud Computing" },
      ],
      "7sem": [{ value: "Internet of Things", label: "Internet of Things" }],
      "8sem": [{ value: "Big Data Analytics", label: "Big Data Analytics" }],
    },
    aids: {
      "1sem": [
        { value: "Engineering Maths 1", label: "Engineering Maths 1" },
        { value: "Chemistry", label: "Chemistry" },
        { value: "Human Values", label: "Human Values" },
        {
          value: "Programming for Problem Solving",
          label: "Programming for Problem Solving",
        },
        {
          value: "Basic Electrical Engineering",
          label: "Basic Electrical Engineering",
        },
      ],
      "2sem": [
        { value: "Engineering Maths 2", label: "Engineering Maths 2" },
        { value: "Engineering Physics", label: "Engineering Physics" },
        { value: "Communication Skills", label: "Communication Skills" },
        {
          value: "Basic Mechanical Engineering",
          label: "Basic Mechanical Engineering",
        },
        { value: "Basic Civil Engineering", label: "Basic Civil Engineering" },
      ],
      "3sem": [
        {
          value: "Advance Engineering Mathematics-I",
          label: "Advance Engineering Mathematics-I",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        { value: "Digital Electronics", label: "Digital Electronics" },
        {
          value: "Data Structures and Algorithms",
          label: "Data Structures and Algorithms",
        },
        {
          value: "Object Oriented Programming",
          label: "Object Oriented Programming",
        },
        { value: "Software Engineering", label: "Software Engineering" },
      ],
      "4sem": [
        {
          value: "Discrete Mathematics Structure",
          label: "Discrete Mathematics Structure",
        },
        {
          value: "Managerial Economics and Financial Accounting",
          label: "Managerial Economics and Financial Accounting",
        },
        {
          value: "Microprocessor & Interfaces",
          label: "Microprocessor & Interfaces",
        },
        {
          value: "Database Management System",
          label: "Database Management System",
        },
        { value: "Theory Of Computation", label: "Theory Of Computation" },
        {
          value: "Data Communication and Computer Networks",
          label: "Data Communication and Computer Networks",
        },
      ],
      "5sem": [
        {
          value: "Data Mining-Concepts and Techniques",
          label: "Data Mining-Concepts and Techniques",
        },
        { value: "Compiler Design", label: "Compiler Design" },
        { value: "Operating System", label: "Operating System" },
        {
          value: "Computer Graphics & Multimedia",
          label: "Computer Graphics & Multimedia",
        },
        { value: "Analysis of Algorithms", label: "Analysis of Algorithms" },
        {
          value: "Fundamentals of Blockchain",
          label: "Fundamentals of Blockchain",
        },
        {
          value: "Probability and Statistics for Data Science",
          label: "Probability and Statistics for Data Science",
        },
        {
          value: "Programming for Data Science",
          label: "Programming for Data Science",
        },
      ],
      "6sem": [
        {
          value: "Digital Image Processing",
          label: "Digital Image Processing",
        },
        { value: "Machine Learning", label: "Machine Learning" },
        {
          value: "Information Security System",
          label: "Information Security System",
        },
        {
          value: "Computer Architecture and Organization",
          label: "Computer Architecture and Organization",
        },
        {
          value: "Principles of Artificial Intelligence",
          label: "Principles of Artificial Intelligence",
        },
        { value: "Cloud Computing", label: "Cloud Computing" },
        {
          value: "Artificial Neural Network",
          label: "Artificial Neural Network",
        },
        {
          value: "Natural Language Processing (NLP)",
          label: "Natural Language Processing (NLP)",
        },
        {
          value: "Nature Inspired Computing",
          label: "Nature Inspired Computing",
        },
      ],
      "7sem": [{ value: "Big Data Analytics", label: "Big Data Analytics" }],
      "8sem": [
        {
          value: "Deep Learning and Its Applications",
          label: "Deep Learning and Its Applications",
        },
      ],
    },
    civil: {
      "1sem": [
        { value: "Engineering Maths 1", label: "Engineering Maths 1" },
        { value: "Chemistry", label: "Chemistry" },
        { value: "Human Values", label: "Human Values" },
        {
          value: "Programming for Problem Solving",
          label: "Programming for Problem Solving",
        },
        {
          value: "Basic Electrical Engineering",
          label: "Basic Electrical Engineering",
        },
      ],
      "2sem": [
        { value: "Engineering Maths 2", label: "Engineering Maths 2" },
        { value: "Engineering Physics", label: "Engineering Physics" },
        { value: "Communication Skills", label: "Communication Skills" },
        {
          value: "Basic Mechanical Engineering",
          label: "Basic Mechanical Engineering",
        },
        { value: "Basic Civil Engineering", label: "Basic Civil Engineering" },
      ],
      "3sem": [
        {
          value: "Advance Engineering Mathematics-I",
          label: "Advance Engineering Mathematics-I",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        {
          value: "Managerial Economics And Financial Accounting",
          label: "Managerial Economics And Financial Accounting",
        },
        { value: "ENGINEERING MECHANICS", label: "ENGINEERING MECHANICS" },
        { value: "SURVEYING", label: "SURVEYING" },
        { value: "FLUID MECHANICS", label: "FLUID MECHANICS" },
        {
          value: "BUILDING MATERIALS AND CONSTRUCTION",
          label: "BUILDING MATERIALS AND CONSTRUCTION",
        },
        { value: "ENGINEERING GEOLOGY", label: "ENGINEERING GEOLOGY" },
      ],
      "4sem": [
        {
          value: "Advance Engineering Mathematics-II",
          label: "Advance Engineering Mathematics-II",
        },
        {
          value: "Managerial Economics And Financial Accounting",
          label: "Managerial Economics And Financial Accounting",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        {
          value: "BASIC ELECTRONICS FOR CIVIL ENGINEERING APPLICATIONS",
          label: "BASIC ELECTRONICS FOR CIVIL ENGINEERING APPLICATIONS",
        },
        { value: "STRENGTH OF MATERIALS", label: "STRENGTH OF MATERIALS" },
        { value: "HYDRAULICS ENGINEERING", label: "HYDRAULICS ENGINEERING" },
        { value: "BUILDING PLANNING", label: "BUILDING PLANNING" },
        { value: "CONCRETE TECHNOLOGY", label: "CONCRETE TECHNOLOGY" },
      ],
      "5sem": [
        { value: "Computer Architecture", label: "Computer Architecture" },
        {
          value: "CONSTRUCTION TECHNOLOGY AND EQUIPMENT",
          label: "CONSTRUCTION TECHNOLOGY AND EQUIPMENT",
        },
        { value: "STRUCTURE ANALYSIS-I", label: "STRUCTURE ANALYSIS-I" },
        {
          value: "DESIGN OF CONCRETE STRUCTURES",
          label: "DESIGN OF CONCRETE STRUCTURES",
        },
        {
          value: "GEOTECHNICAL ENGINEERING",
          label: "GEOTECHNICAL ENGINEERING",
        },
        {
          value: "WATER RESOURCE ENGINEERING",
          label: "WATER RESOURCE ENGINEERING",
        },
        {
          value: "AIR & NOISE POLLUTION AND CONTROL",
          label: "AIR & NOISE POLLUTION AND CONTROL",
        },
        { value: "DISASTER MANAGEMENT", label: "DISASTER MANAGEMENT" },
        { value: "TOWN PLANNING", label: "TOWN PLANNING" },
        {
          value: "REPAIR AND REHABILITATION OF STRUCTURES",
          label: "REPAIR AND REHABILITATION OF STRUCTURES",
        },
        {
          value: "GROUND IMPROVEMENT TECHNIQUES",
          label: "GROUND IMPROVEMENT TECHNIQUES",
        },
        {
          value: "ENERGY SCIENCE AND ENGINEERING",
          label: "ENERGY SCIENCE AND ENGINEERING",
        },
      ],
      "6sem": [
        {
          value: "WIND AND SEISMIC ANALYSIS",
          label: "WIND AND SEISMIC ANALYSIS",
        },
        { value: "STRUCTURAL ANALYSIS-II", label: "STRUCTURAL ANALYSIS-II" },
        {
          value: "ENVIRONMENTAL ENGINEERING",
          label: "ENVIRONMENTAL ENGINEERING",
        },
        {
          value: "DESIGN OF STEEL STRUCTURES",
          label: "DESIGN OF STEEL STRUCTURES",
        },
        { value: "PRE‐STRESSED CONCRETE", label: "PRE‐STRESSED CONCRETE" },
        {
          value: "SOLID AND HAZARDOUS WASTE MANAGEMENT",
          label: "SOLID AND HAZARDOUS WASTE MANAGEMENT",
        },
        {
          value: "TRAFFIC ENGINEERING AND MANAGEMENT",
          label: "TRAFFIC ENGINEERING AND MANAGEMENT",
        },
        { value: "BRIDGE ENGINEERING", label: "BRIDGE ENGINEERING" },
        { value: "ROCK ENGINEERING", label: "ROCK ENGINEERING" },
        {
          value: "GEOGRAPHIC INFORMATION SYSTEM & REMOTE SENSING",
          label: "GEOGRAPHIC INFORMATION SYSTEM & REMOTE SENSING",
        },
      ],
      "7sem": [
        {
          value: "Transportation Engineering",
          label: "Transportation Engineering",
        },
      ],
      "8sem": [
        {
          value: "Project Planning and Construction Management",
          label: "Project Planning and Construction Management",
        },
      ],
    },
    mechanical: {
      "1sem": [
        { value: "Engineering Maths 1", label: "Engineering Maths 1" },
        { value: "Chemistry", label: "Chemistry" },
        { value: "Human Values", label: "Human Values" },
        {
          value: "Programming for Problem Solving",
          label: "Programming for Problem Solving",
        },
        {
          value: "Basic Electrical Engineering",
          label: "Basic Electrical Engineering",
        },
      ],
      "2sem": [
        { value: "Engineering Maths 2", label: "Engineering Maths 2" },
        { value: "Engineering Physics", label: "Engineering Physics" },
        { value: "Communication Skills", label: "Communication Skills" },
        {
          value: "Basic Mechanical Engineering",
          label: "Basic Mechanical Engineering",
        },
        { value: "Basic Civil Engineering", label: "Basic Civil Engineering" },
      ],
      "3sem": [
        {
          value: "Advance Engineering Mathematics-I",
          label: "Advance Engineering Mathematics-I",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        {
          value: "Managerial Economics And Financial Accounting",
          label: "Managerial Economics And Financial Accounting",
        },
        { value: "ENGINEERING MECHANICS", label: "ENGINEERING MECHANICS" },
        {
          value: "ENGINEERING THERMODYNAMICS",
          label: "ENGINEERING THERMODYNAMICS",
        },
        {
          value: "MATERIAL SCIENCE AND ENGINEERING",
          label: "MATERIAL SCIENCE AND ENGINEERING",
        },
        { value: "MECHANICS OF SOLIDS", label: "MECHANICS OF SOLIDS" },
      ],
      "4sem": [
        { value: "DATA ANALYTICS", label: "DATA ANALYTICS" },
        {
          value: "Managerial Economics And Financial Accounting",
          label: "Managerial Economics And Financial Accounting",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        { value: "DATA ANALYTICS", label: "DATA ANALYTICS" },
        { value: "DIGITAL ELECTRONICS", label: "DIGITAL ELECTRONICS" },
        {
          value: "FLUID MECHANICS AND FLUID MACHINES",
          label: "FLUID MECHANICS AND FLUID MACHINES",
        },
        { value: "MANUFACTURING PROCESSES", label: "MANUFACTURING PROCESSES" },
        { value: "THEORY OF MACHINES", label: "THEORY OF MACHINES" },
      ],
      "5sem": [
        {
          value: "MEASUREMENT and METROLOGY",
          label: "MEASUREMENT and METROLOGY",
        },
        {
          value: "COMPUTER INTEGRATED MANUFACTURING SYSTEMS (CIMS)",
          label: "COMPUTER INTEGRATED MANUFACTURING SYSTEMS (CIMS)",
        },
        { value: "MECHAN ICAL VIBRATIONS", label: "MECHAN ICAL VIBRATIONS" },
        {
          value: "DESIGN OF MACHINE ELEMENTS- II",
          label: "DESIGN OF MACHINE ELEMENTS- II",
        },
        { value: "QUALITY MANAGEMENT", label: "QUALITY MANAGEMENT" },
        {
          value: "REFRIGERATION AND AIR CONDITIONING",
          label: "REFRIGERATION AND AIR CONDITIONING",
        },
        {
          value: "NON CONVENTIONAL MACHINING METHODS",
          label: "NON CONVENTIONAL MACHINING METHODS",
        },
        {
          value: "MICRO ELECTRO AND MECHANICAL SYSTEMS (MEMS) and MICROSYSTEMS",
          label: "MICRO ELECTRO AND MECHANICAL SYSTEMS (MEMS) and MICROSYSTEMS",
        },
      ],
      "6sem": [
        { value: "MECHATRONIC SYSTEMS", label: "MECHATRONIC SYSTEMS" },
        { value: "HEAT TRANSFER", label: "HEAT TRANSFER" },
        {
          value: "MANUFACTURING TECHNOLOGY",
          label: "MANUFACTURING TECHNOLOGY",
        },
        {
          value: "DESIGN OF MACHINE ELEMENTS – I",
          label: "DESIGN OF MACHINE ELEMENTS – I",
        },
        {
          value: "PRINCIPLES OF MANAGEMENT",
          label: "PRINCIPLES OF MANAGEMENT",
        },
        { value: "STEAM ENGINEERING", label: "STEAM ENGINEERING" },
        { value: "AUTOMOBILE ENGINEERING", label: "AUTOMOBILE ENGINEERING" },
        {
          value: "NON DESTRUCTIVE EVALUATION AND TESTING",
          label: "NON DESTRUCTIVE EVALUATION AND TESTING",
        },
      ],
      "7sem": [
        { value: "I. C. Engines", label: "I. C. Engines" },
        { value: "OPERATIONS RESEARCH", label: "OPERATIONS RESEARCH" },
        { value: "TURBOMACHINES", label: "TURBOMACHINES" },
      ],
      "8sem": [
        {
          value: "Hybrid and Electric Vehicles",
          label: "Hybrid and Electric Vehicles",
        },
        {
          value: "SUPPLY AND OPERATIONS MANAGEMENT",
          label: "SUPPLY AND OPERATIONS MANAGEMENT",
        },
        { value: "ADDITIVE MANUFACTURING", label: "ADDITIVE MANUFACTURING" },
      ],
    },
    it: {
      "1sem": [
        { value: "Engineering Maths 1", label: "Engineering Maths 1" },
        { value: "Chemistry", label: "Chemistry" },
        { value: "Human Values", label: "Human Values" },
        {
          value: "Programming for Problem Solving",
          label: "Programming for Problem Solving",
        },
        {
          value: "Basic Electrical Engineering",
          label: "Basic Electrical Engineering",
        },
      ],
      "2sem": [
        { value: "Engineering Maths 2", label: "Engineering Maths 2" },
        { value: "Engineering Physics", label: "Engineering Physics" },
        { value: "Communication Skills", label: "Communication Skills" },
        {
          value: "Basic Mechanical Engineering",
          label: "Basic Mechanical Engineering",
        },
        { value: "Basic Civil Engineering", label: "Basic Civil Engineering" },
      ],
      "3sem": [
        {
          value: "Advance Engineering Mathematics-I",
          label: "Advance Engineering Mathematics-I",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        {
          value: "Managerial Economics And Financial Accounting",
          label: "Managerial Economics And Financial Accounting",
        },
        { value: "Digital Electronics", label: "Digital Electronics" },
        {
          value: "Data Structures and Algorithms",
          label: "Data Structures and Algorithms",
        },
        {
          value: "Object Oriented Programming",
          label: "Object Oriented Programming",
        },
        { value: "Software Engineering", label: "Software Engineering" },
      ],
      "4sem": [
        {
          value: "Discrete Mathematics Structure",
          label: "Discrete Mathematics Structure",
        },
        {
          value: "Managerial Economics and Financial Accounting",
          label: "Managerial Economics and Financial Accounting",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        {
          value: "Principles of Communication",
          label: "Principles of Communication",
        },
        {
          value: "Database Management System",
          label: "Database Management System",
        },
        { value: "Theory of Computation", label: "Theory of Computation" },
        {
          value: "Data Communication and Computer Networks",
          label: "Data Communication and Computer Networks",
        },
      ],
      "5sem": [
        {
          value: "Microprocessor And Interfaces",
          label: "Microprocessor And Interfaces",
        },
        { value: "Compiler Design", label: "Compiler Design" },
        { value: "Operating System", label: "Operating System" },
        {
          value: "Computer Graphics & Multimedia",
          label: "Computer Graphics & Multimedia",
        },
        { value: "Analysis of Algorithms", label: "Analysis of Algorithms" },
        { value: "Wireless Communication", label: "Wireless Communication" },
        {
          value: "Software Testing and Project Management",
          label: "Software Testing and Project Management",
        },
        { value: "Bioinformatics", label: "Bioinformatics" },
      ],
      "6sem": [
        {
          value: "Digital Image Processing",
          label: "Digital Image Processing",
        },
        { value: "Machine Learning", label: "Machine Learning" },
        {
          value: "Information Security System",
          label: "Information Security System",
        },
        {
          value: "Computer Architecture and Organization",
          label: "Computer Architecture and Organization",
        },
        { value: "Artificial Intelligence", label: "Artificial Intelligence" },
        { value: "Distributed System", label: "Distributed System" },
        {
          value: "Information Theory & Coding",
          label: "Information Theory & Coding",
        },
        { value: "Cloud Computing", label: "Cloud Computing" },
        { value: "Ecommerce & ERP", label: "Ecommerce & ERP" },
      ],
      "7sem": [{ value: "Big Data Analytics", label: "Big Data Analytics" }],
      "8sem": [{ value: "Internet of Things", label: "Internet of Things" }],
    },
    ece: {
      "1sem": [
        { value: "Engineering Maths 1", label: "Engineering Maths 1" },
        { value: "Chemistry", label: "Chemistry" },
        { value: "Human Values", label: "Human Values" },
        {
          value: "Programming for problem Solving",
          label: "Programming for problem Solving",
        },
        {
          value: "Basic Electrical Engineering",
          label: "Basic Electrical Engineering",
        },
      ],
      "2sem": [
        { value: "Engineering Maths 2", label: "Engineering Maths 2" },
        { value: "Engineering Physics", label: "Engineering Physics" },
        { value: "Communication Skills", label: "Communication Skills" },
        {
          value: "Basic Mechanical Engineering",
          label: "Basic Mechanical Engineering",
        },
        { value: "Basic Civil Engineering", label: "Basic Civil Engineering" },
      ],
      "3sem": [
        {
          value: "Advance Engineering Mathematics-I",
          label: "Advance Engineering Mathematics-I",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        {
          value: "Managerial Economics And Financial Accounting",
          label: "Managerial Economics And Financial Accounting",
        },
        { value: "Signals & Systems", label: "Signals & Systems" },
        { value: "Digital System Design", label: "Digital System Design" },
        { value: "Network Theory", label: "Network Theory" },
        { value: "Electronic Devices", label: "Electronic Devices" },
      ],
      "4sem": [
        {
          value: "Advance Engineering Mathematics-II",
          label: "Advance Engineering Mathematics-II",
        },
        {
          value: "Managerial Economics And Financial Accounting",
          label: "Managerial Economics And Financial Accounting",
        },
        { value: "Technical Communication", label: "Technical Communication" },
        { value: "Analog Circuits", label: "Analog Circuits" },
        { value: "Microcontrollers", label: "Microcontrollers" },
        {
          value: "Electronics Measurement & Instrumentation",
          label: "Electronics Measurement & Instrumentation",
        },
        {
          value: "Analog and Digital Communication",
          label: "Analog and Digital Communication",
        },
      ],
      "5sem": [
        { value: "Computer Architecture", label: "Computer Architecture" },
        { value: "Electromagnetics Waves", label: "Electromagnetics Waves" },
        { value: "Control System", label: "Control System" },
        {
          value: "Digital Signal Processing",
          label: "Digital Signal Processing",
        },
        {
          value: "Microwave Theory & Techniques",
          label: "Microwave Theory & Techniques",
        },
        { value: "Bio-Medical Electronics", label: "Bio-Medical Electronics" },
        { value: "Embedded Systems", label: "Embedded Systems" },
        {
          value: "Probability Theory & Stochastic Process",
          label: "Probability Theory & Stochastic Process",
        },
        { value: "Satellite Communication", label: "Satellite Communication" },
      ],
      "6sem": [
        { value: "Power Electronics", label: "Power Electronics" },
        { value: "Computer Network", label: "Computer Network" },
        {
          value: "Fiber Optics Communications",
          label: "Fiber Optics Communications",
        },
        {
          value: "Antennas and Propagation",
          label: "Antennas and Propagation",
        },
        {
          value: "Information Theory and Coding",
          label: "Information Theory and Coding",
        },
        { value: "Introduction to MEMS", label: "Introduction to MEMS" },
        { value: "Nano Electronics", label: "Nano Electronics" },
        {
          value: "Neural Network And Fuzzy Logic Control",
          label: "Neural Network And Fuzzy Logic Control",
        },
        { value: "High Speed Electronics", label: "High Speed Electronics" },
      ],
      "7sem": [
        { value: "VLSI Design", label: "VLSI Design" },
        { value: "Mixed Signal Signal", label: "Mixed Signal Signal" },
        { value: "CMOS Design", label: "CMOS Design" },
      ],
      "8sem": [
        {
          value: "ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEMS",
          label: "ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEMS",
        },
        {
          value: "Digital Image and Video Processing",
          label: "Digital Image and Video Processing",
        },
        {
          value: "Adaptive Signal Processing",
          label: "Adaptive Signal Processing",
        },
      ],
    },
  };

  const semster = [
    {
      value: "1sem",
      label: "1 Semester",
    },
    {
      value: "2sem",
      label: "2 Semester",
    },
    {
      value: "3sem",
      label: "3 Semester",
    },
    {
      value: "4sem",
      label: "4 Semester",
    },
    {
      value: "5sem",
      label: "5 Semester",
    },
    {
      value: "6sem",
      label: "6 Semester",
    },
    {
      value: "7sem",
      label: "7 Semester",
    },
    {
      value: "8sem",
      label: "8 Semester",
    },
  ];

  const branchChange = (val) => {
    setBranch(val.value);
    setSemester("");
    setSubject("");
    setSelectedSemester(null);
  };

  const subjectChange = (val) => {
    setSubject(val.value);
    setHeading(val.label);
  };

  const semChange = (selectedOption) => {
    setSemester(selectedOption.value);
    setSelectedSemester(selectedOption);
    setButton(true);
  };

  const getNotes = async () => {
    setIsLoading(true);
    let obj = {
      branch,
      semester,
      subject,
    };
    const response = await fetch("https://notevista.onrender.com/api/v1/getNotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const data = await response.json();
    setNotes(data);
    setIsLoading(false);
    console.log(data);
  };

  return (
    <div>
      <div className="heading">
        <h2>Search your Notes here!</h2>
      </div>
      <div className="searchFields">
        <Select options={courses} className="courses" onChange={branchChange} />
        <Select options={semster} className="courses" onChange={semChange} />
        {selectedSemester &&
          subjectsByBranch[branch] &&
          subjectsByBranch[branch][selectedSemester.value] && (
            <Select
              options={subjectsByBranch[branch][selectedSemester.value]}
              className="courses"
              onChange={subjectChange}
            />
          )}
        {button === true ? <button onClick={getNotes}>Search</button> : ""}
      </div>

      <div className="containt-2">
        <div className="course-categories">
          <h2>{heading}</h2>
        </div>
        <div className="cards-container">
          {isLoading ? (
            <ClipLoader color="#123abc" loading={isLoading} size={50} />
          ) : (
            notes.map((ele) => (
              <div className="card" key={ele.id}>
                <h3>{ele.name}</h3>
                <a href={ele.downloadUrl}>Download Notes</a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
