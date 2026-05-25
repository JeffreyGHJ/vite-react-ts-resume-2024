const SchoolProjects = [
  {
    name: "Voice-Controlled Virtual Reality App",
    image_url: "",
    site_url: "",
    location: "FIU",
    timeframe: "Aug. 2019 - Dec. 2019",
    role: "Full Stack Engineer - Course: Senior Project",
    description:
      "Architected and implemented a multi-platform VR/360 video player for Windows, Android, and iOS using Unity 3D",
    highlights: [
      "Ensured on-time feature delivery by following Agile practices and holding regular Scrum meetings",
      "Implemented speech recognition, VR display settings, file loading, playback control, and corresponding UI elements",
      "Tested and developed Java plugin for Android native file-selection interface using an emulated mobile environment",
    ],
  },
  {
    name: "Multi-Process Matrix Multiplier",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/Multi-ProcessMatrixMultiplication",
    location: "FIU",
    timeframe: "Apr. 2019",
    role: "Backend Engineer - Course: Parallel Computing",
    description:
      "Developed matrix multiplication program in C that shares work using a number of parallel processes specified by the user",
    highlights: [
      "Decomposed matrix data dynamically into horizontal rows determined by the user-specified number of processes",
      "Maximized efficiency by distributing rows evenly between processes in order to solve sub-problems concurrently",
      "Prevented race conditions and deadlock by organizing the flow of critical data between processes",
    ],
  },
  {
    name: "Multi-Threaded Office Hours Simulation",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/Multi-ThreadedOfficeHoursSimulator",
    location: "FIU",
    timeframe: "Jul. 2019",
    role: "Backend Engineer - Course: Operating Systems",
    description:
      "Simulates students entering a professor's office. The office capacity is limited and other students may not enter the office until the students inside the office have had their questions answered",
    highlights: [
      "Written using the POSIX thread library and rewritten using the OpenMP library to compare efficiency",
      "Protected the consistency of shared data through the use of mutex locks in critical sections",
      "Increased runtime efficiency by introducing random sleep times when threads attempt to access a resource shared by many other threads",
    ],
  },
  {
    name: "Windows Text Editor App",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/TextEditor",
    location: "FIU",
    timeframe: "Aug. 2019 - Dec. 2019",
    role: "Backend Engineer - Course: Adv. Windows Programming",
    description:
      "Developed core features for a Windows Forms application that transforms input text into movable objects similar to refrigerator magnets",
    highlights: [
      "Collaborated with multiple small teams remotely over two-week sprints via Slack and shared Git repositories",
      "Implemented responsive text wrapping, text dragging, and databinding tokenized strings to UI controls",
      "Handled serialization of text and document properties to be saved and loaded as a custom file type",
    ],
  },
  {
    name: "Windows Shape Editor App",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/ShapeEditor",
    location: "FIU",
    timeframe: "Aug. 2019 - Dec. 2019",
    role: "Backend Engineer - Course: Adv. Windows Programming",
    description:
      "Developed core features for a Windows Forms application that allows the user to draw, manipulate, and edit shapes, similar to MS Paint",
    highlights: [
      "Designed features and UI to make user-drawn shapes’ properties editable via a separate menu",
      "Enabled multi-SDI and single-instance interfaces and built controls for multi-window navigation and management",
      "Handled serialization of shape properties to be saved and loaded as a custom file type",
    ],
  },
];

export default SchoolProjects;
