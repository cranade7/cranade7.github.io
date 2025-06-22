const experienceData = [
  {
    image: "exp1.png",
    title: "Electrical Engineering Intern",
    company: "Hyaxiom (Doosan)",
    duration: "May 2024 – Aug 2024",
    description: "Worked on HV systems including pre-charge circuits, PLC integration, and VFDs.",
    responsibilities: "Created AutoCAD Electrical diagrams, performed HV stack testing.",
    tools: "AutoCAD, Oscilloscope, CAN Analyzer",
    skills: "System Integration, HV Safety",
    learnings: "Industrial-grade circuit development"
  },
  {
    image: "exp2.png",
    title: "Teaching Assistant",
    company: "San Diego State University",
    duration: "Jan 2024 – Present",
    description: "Assisted in E&M and Mechatronics labs. Helped students debug circuits.",
    responsibilities: "Setup experiments, guided students, graded lab reports.",
    tools: "Multimeter, Function Generator, Oscilloscope",
    skills: "Mentorship, Hands-on Circuits",
    learnings: "Reinforced concepts through teaching"
  },
  {
    image: "exp3.png",
    title: "Quality Assurance Intern",
    company: "Electronet",
    duration: "Jan 2022 – Feb 2022",
    description: "Tested flowmeters, debugged level sensor boards, improved SMPS efficiency.",
    responsibilities: "Circuit analysis, QA logs, PCB feedback",
    tools: "Multimeter, Lab PSU, Soldering",
    skills: "Troubleshooting, QA",
    learnings: "Real-world hardware validation"
  },
  {
    image: "exp4.png",
    title: "Solar Electrical Lead",
    company: "Team Hyperion",
    duration: "Jul 2021 – Aug 2023",
    description: "Led electrical team for solar EV. Designed MPPT, buck converters, and CAN modules.",
    responsibilities: "Managed solar subsystem, implemented ECU logic.",
    tools: "MPPT, ESP32, CAN, Solar Panels",
    skills: "Power Electronics, Leadership",
    learnings: "System integration in EV context"
  }
];

const projectData = [
  {
    image: "proj8.jpg",
    title: "Wireless Charging with Misalignment Resilience",
    duration: "Jan 2025 – May 2025",
    description: "Designed and simulated an EV wireless charging system using ZVS converters and CC–CV control, optimized for misalignment tolerance.",
    github: "",
    tools: "Simulink, MATLAB",
    skills: "Resonant Topologies, ZVS, PI Control, Battery Charging",
    keyFindings: "Maintained 78–81% efficiency under up to 5 cm vertical and 18 cm lateral coil misalignment.",
    learnings: "Resonance tuning and controller design under varying coupling coefficients.",
    future: "Hardware validation and adaptive real-time control for EV applications."
},
  {
    image: "proj1.png",
    title: "Wireless Charging for Devices",
    duration: "Oct 2023 – Dec 2023",
    description: "Simulated a resonant inductive wireless charging system using Ansys and Simulink.",
    github: "https://github.com/cranade7/WPT-for-small-Devices",
    tools: "Simulink, Ansys",
    skills: "WPT, Resonant Coupling",
    keyFindings: "Achieved 86% efficiency at optimal coupling distance.",
    learnings: "Tuned coils for max transfer",
    future: "Closed-loop battery integration"
  },
  {
    image: "proj2.png",
    title: "Microgrid + EV Charging",
    duration: "Jan 2024 – May 2024",
    description: "Modeled V2G + G2V EV charging with PV-based microgrid in MATLAB.",
    github: "https://github.com/cranade7/Microgrid-V2G-and-G2V",
    tools: "MATLAB, Simulink",
    skills: "Droop Control, Battery Modeling",
    keyFindings: "Bidirectional charging stabilized grid fluctuations.",
    learnings: "EV scheduling in smart grids",
    future: "Hardware controller testing"
  },
  {
    image: "proj3.jpg",
    title: "Bidirectional DC-DC Converter",
    duration: "Oct 2024 – Dec 2024",
    description: "PLECS simulation of GaN-based bidirectional converter with closed-loop PI.",
    github: "",
    tools: "PLECS, MATLAB, GaN",
    skills: "Thermal Modeling, High-Freq Control",
    keyFindings: "Reduced switching losses by 20%.",
    learnings: "Efficiency tuning via PI",
    future: "PCB prototyping"
  },
  {
    image: "proj4.jpg",
    title: "Autonomous Parking System",
    duration: "Feb 2022 – May 2022",
    description: "Built a robot that detects parking space using IR + ultrasonic sensors.",
    github: "https://github.com/cranade7/Autonomous-Parking-System",
    tools: "IR, Ultrasonic, Servo",
    skills: "Obstacle Avoidance, Embedded Logic",
    keyFindings: "Consistent 30cm margin precision.",
    learnings: "Sensor coordination",
    future: "Add camera + image detection"
  },
  {
    image: "proj5.jpg",
    title: "Microstrip Line Design (ADS)",
    duration: "Aug 2024 – Oct 2024",
    description: "Designed and matched a 50-ohm microstrip line using TX-Line and ADS.",
    github: "",
    tools: "ADS, HFSS",
    skills: "Impedance Matching, RF Layout",
    keyFindings: "VSWR < 1.1 at 2.4 GHz.",
    learnings: "Transmission line tuning",
    future: "Implement as PCB trace"
  },
  {
    image: "proj6.jpg",
    title: "Power/Ground Noise Optimization",
    duration: "Oct 2024 – Dec 2024",
    description: "Used Cadence PowerSI to optimize capacitor placement and reduce ripple.",
    github: "https://github.com/cranade7/PCB-Simulation-and-Power-Integrity",
    tools: "PowerSI, Cadence",
    skills: "Power Integrity, EMI Mitigation",
    keyFindings: "Ripple noise dropped 33%.",
    learnings: "Layer stackup impacts on EMI",
    future: "Integrate SI analysis"
  },
  {
    image: "proj7.jpg",
    title: "Human-Following Robot",
    duration: "Feb 2023 – May 2023",
    description: "Built a robot that follows a human using Bluetooth RSSI and avoids obstacles.",
    github: "https://github.com/cranade7/-Human-Following-Luggage-Carrying-Robot",
    tools: "ESP32, HC-05, Ultrasonic",
    skills: "RSSI, Navigation",
    keyFindings: "Smooth follow within 1.5m range.",
    learnings: "Wireless distance estimation",
    future: "Upgrade to vision model"
  }
  
];

function loadCards(data, containerId) {
  const container = document.getElementById(containerId);
  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <strong>${item.title}</strong><br>
      <small>${item.duration}</small>
    `;
    card.onclick = () => openModal(item, containerId.includes("experience") ? "exp" : "proj");
    container.appendChild(card);
  });
}

function openModal(item, type) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  modal.classList.remove("hidden");

  if (type === "exp") {
    body.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Company:</strong> ${item.company}</p>
      <p><strong>Duration:</strong> ${item.duration}</p>
      <p><strong>Description:</strong> ${item.description}</p>
      <p><strong>Responsibilities:</strong> ${item.responsibilities}</p>
      <p><strong>Tools:</strong> ${item.tools}</p>
      <p><strong>Skills:</strong> ${item.skills}</p>
      <p><strong>Learned:</strong> ${item.learnings}</p>
    `;
  } else {
    body.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Duration:</strong> ${item.duration}</p>
      <p><strong>Description:</strong> ${item.description}</p>
      ${item.github ? `<p><strong>GitHub:</strong> <a href="${item.github}" target="_blank">${item.github}</a></p>` : ""}
      <p><strong>Tools:</strong> ${item.tools}</p>
      <p><strong>Skills:</strong> ${item.skills}</p>
      <p><strong>Key Findings:</strong> ${item.keyFindings}</p>
      <p><strong>Learned:</strong> ${item.learnings}</p>
      <p><strong>Future Work:</strong> ${item.future}</p>
    `;
  }
}

document.querySelector(".close").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

window.onload = () => {
  loadCards(experienceData, "experience-cards");
  loadCards(projectData, "project-cards");
};
