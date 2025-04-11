const experienceData = [
  {
    image: "exp1.png",
    title: "Electrical Engineering Intern - Hyaxiom Inc.",
    duration: "June 2024 – August 2024",
    description: "Worked on HV pre-charge circuits, rectifier thermal design, and PLC integration.",
    github: "",
    skills: "AutoCAD Electrical, HV Circuits",
    technologies: "PLC, VFD, HV Stack",
    learnings: "System validation, FMEA"
  },
  {
    image: "exp2.png",
    title: "Teaching Assistant - SDSU",
    duration: "Aug 2023 – Present",
    description: "Conducted E&M labs, graded assignments, and supported mechatronics students.",
    github: "",
    skills: "Education, TA duties",
    technologies: "Oscilloscope, Sensors",
    learnings: "Communication, Instruction"
  },
  {
    image: "exp3.png",
    title: "Solar Subsystem Head - Team Hyperion",
    duration: "Sept 2021 – Jan 2023",
    description: "Led solar EV development. Designed converters and ECU communication systems.",
    github: "",
    skills: "MPPT, DC-DC, CAN, I2C",
    technologies: "Solar Panels, Battery",
    learnings: "Team management"
  },
  {
    image: "exp4.png",
    title: "Quality Engineer Intern - Electronet",
    duration: "Jan 2022 – Feb 2022",
    description: "Resolved issues in SMPS and level sensors, improved PCB size and efficiency.",
    github: "",
    skills: "SMPS, PCB Debugging",
    technologies: "Ultrasonic Sensors",
    learnings: "QA, debugging"
  }
];

const projectData = [
  {
    image: "proj1.png",
    title: "Wireless Charging System",
    duration: "Oct 2023 – Dec 2023",
    description: "Simulated resonant coupling WPT in MATLAB and Ansys.",
    github: "https://github.com/cranade7/WPT-for-small-Devices",
    skills: "Wireless Charging",
    technologies: "Simulink, Ansys",
    learnings: "Efficiency tuning",
    future: "Closed-loop misalignment control"
  },
  {
    image: "proj2.png",
    title: "Human Following Robot",
    duration: "Dec 2022 – Apr 2023",
    description: "Bluetooth + RSSI controlled luggage robot with ESP32.",
    github: "https://github.com/cranade7/-Human-Following-Luggage-Carrying-Robot",
    skills: "RSSI, ESP32, Embedded",
    technologies: "Solar, L298N, HMC5883L",
    learnings: "Navigation",
    future: "AI-based tracking"
  },
  {
    image: "proj3.png",
    title: "Microgrid + EV Charging",
    duration: "Jan 2024 – May 2024",
    description: "Designed bidirectional grid for EV using solar + battery.",
    github: "https://github.com/cranade7/Microgrid-V2G-and-G2V",
    skills: "Grid Control",
    technologies: "PV, Buck-Boost",
    learnings: "V2G & G2V control",
    future: "Real-time HIL"
  },
  {
    image: "proj4.png",
    title: "PCB Power Integrity Simulation",
    duration: "Aug 2024 – Dec 2024",
    description: "Used Cadence to reduce voltage ripple and optimize capacitor placement.",
    github: "https://github.com/cranade7/PCB-Simulation-and-Power-Integrity",
    skills: "Signal/Power Integrity",
    technologies: "PowerSI, Cadence",
    learnings: "EMI design",
    future: "WBG device support"
  },
  {
    image: "proj5.png",
    title: "Bidirectional DC-DC (GaN/SiC)",
    duration: "Oct 2024 – Dec 2024",
    description: "PLECS simulation of EV energy converter with thermal models.",
    github: "",
    skills: "WBG Switching",
    technologies: "PLECS, PWM",
    learnings: "Closed-loop PI",
    future: "Hardware test"
  },
  {
    image: "proj6.png",
    title: "Autonomous Parking System",
    duration: "May 2022 – Aug 2022",
    description: "Ultrasonic + IR based path following robot with servo steering.",
    github: "https://github.com/cranade7/Autonomous-Parking-System",
    skills: "Ultrasonic, Path Control",
    technologies: "ESP32, Servo",
    learnings: "Obstacle logic",
    future: "Camera enhancement"
  }
];

const loadCards = (data, containerId) => {
  const container = document.getElementById(containerId);
  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.image}" />
      <strong>${item.title}</strong><br />
      <small>${item.duration}</small>
    `;
    card.onclick = () => openModal(item);
    container.appendChild(card);
  });
};

const openModal = (item) => {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  modal.classList.remove("hidden");
  body.innerHTML = `
    <h3>${item.title}</h3>
    <p><strong>Duration:</strong> ${item.duration}</p>
    <p><strong>Description:</strong> ${item.description}</p>
    ${item.github ? `<p><strong>GitHub:</strong> <a href="${item.github}" target="_blank">${item.github}</a></p>` : ""}
    <p><strong>Skills:</strong> ${item.skills}</p>
    <p><strong>Technologies:</strong> ${item.technologies}</p>
    <p><strong>Learnings:</strong> ${item.learnings}</p>
    ${item.future ? `<p><strong>Future Work:</strong> ${item.future}</p>` : ""}
  `;
};

document.querySelector(".close").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

window.onload = () => {
  loadCards(experienceData, "experience-cards");
  loadCards(projectData, "project-cards");
};