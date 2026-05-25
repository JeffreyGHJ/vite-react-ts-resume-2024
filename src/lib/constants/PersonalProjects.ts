const PersonalProjects = [
  {
    name: "Net-Hack Game",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/react-monster-cards",
    location: "",
    timeframe: "2026",
    role: "Full Stack - TypeScript (React + Next.js)",
    description: "A clone of the persistent browser-based game 'SlaveHack'",
    highlights: [
      "A simulated desktop OS experience where the user manages windows and applications to interact with the game",
      "Upgradable computer hardware determines the speed and efficiency of the player's actions",
      "Manage a queue of jobs/tasks, balancing hardware capacity and active jobs against execution speed",
      "Scan the network map and Hack into NPC systems with the appropriate software to gain access to their systems",
      "Steal programs, plant viruses, collect money, and upgrade your hardware to dominate the network",
      "ROADMAP: implement persistence, add money generation via viruses, enable hardware upgrades",
    ],
  },
  {
    name: "Tiny Soldiers Minecraft Mod",
    image_url: "",
    site_url: "https://www.curseforge.com/minecraft/mc-mods/tiny-soldiers",
    location: "",
    timeframe: "2025",
    role: "Full Stack - Java",
    description:
      "A Minecraft mod that allows players to create and control tiny soldiers that can be used to fight against other soldiers. Inspired by the 'Clay Soldiers' mod by SanAndreaP",
    highlights: [
      "Over 12K downloads on [CurseForge](https://www.curseforge.com/minecraft/mc-mods/tiny-soldiers) and [Modrinth](https://modrinth.com/mod/tiny-soldiers) in the 10 months since release",
      "Implemented multi-loader and multi-version builds, supporting 8 versions of Minecraft across 2 loaders (Fabric and NeoForge)",
      "Developed procedural generation and registration of 137 different soldier skins/materials sampled from the game's block textures",
      "Leveraged Minecraft's internal entity models and rendering systems to align custom soldier implementation with the game's pre-existing design philosphies",
      "Created custom item models and textures and enabled compatibility with datapacks to allow for overriding custom weapon and armor models and textures",
    ],
  },

  {
    name: "EVE Online Market Browser Tool",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/eve-market-app",
    location: "",
    timeframe: "2025",
    role: "Full Stack - TypeScript (React + Next.js)",
    description: "A simple interface for browsing the EVE Online market and tracking prices of items",
    highlights: [
      "Exercise in utilizing AI-only tooling to generate a complete web application from scratch",
      "Architected a UI for navigating through market item categories and subcategories in order to browse all items visually",
      "Integrated public EVE Online API endpoints to fetch live market item data so users can track price changes and trends",
      "Designed to be easily cloned and self-hosted for personal use to spread traffic of rate-limited, public, keyless API endpoints",
      "Established complex relationships between items IDs, item categories, and item types to form a comprehensive item tree for easy navigation and filtering",
      "ROADMAP: search bar, get and cache item images via API, add a way to price items by station and identify profitable arbitrage opportunities",
    ],
  },
  {
    name: "Bad-Wrap",
    image_url: "",
    site_url: "https://bad-wrap.vercel.app/",
    location: "",
    timeframe: "2025",
    role: "Full Stack - TypeScript (React + Next.js)",
    description: "A chat interface wrapper for LLM models - similar to ChatGPT or Claude website interfaces",
    highlights: [
      "Experimental no-cost dive on integrating an LLM API into a web application using free tier MongoDB Atlas and developer tier Gemini models",
      "Designed backend API route to chunk and stream responses from the LLM API to the client as they are generated for a more responsive user experience",
      "Implemented authetication with MongoDB Atlas via Google OAuth to allow users to persist chat histories and individual account details",
      "Enabled vercel edge functions to extend connection timeout limits for lengthy or slow responses that stream chunks to the client over long periods of time",
      "ROADMAP: encrypt chats so text is not stored in plain text in the database, enable user to upload files and images to the chat, trivia bot mode",
    ],
  },
  {
    name: "React Monster Cards",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/react-monster-cards",
    location: "",
    timeframe: "2022",
    role: "Full Stack - JavaScript (React + Next.js)",
    description:
      "A React online game demo where users can login to create player accounts and battle monster cards for a spot on the leaderboard",
    highlights: [
      "Refactored multilevel component prop chains into reactive store slices using reducers via Redux Toolkit",
      "Reduced complexity of component code by creating and utilizing custom hooks to decouple business logic",
      "Migrated create-react-app to Next.js project for leveraging API routes in order to secure API request credentials",
      "Implemented authentication with Firebase to allow users to persist individual account details.",
    ],
  },
  {
    name: "Spring Boot User Authentication Web App",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/spring-users",
    location: "",
    timeframe: "2021 - 2022",
    role: "Full Stack - Java (Spring Boot)",
    description:
      "A Spring Boot web application that allows users to create a 'User', persist the User entity to a database, and securely log into an account represented by the saved 'User'",
    highlights: [
      "Designed SQL database tables to store registered User entities and enabled persistence of database between sessions",
      "Configured web security policies and developed custom validation procedures to allow for secure user authentication",
      "Exposed REST endpoints providing standard C.R.U.D operations for User database entities via HTTP requests",
    ],
  },
  {
    name: "Automated RuneScape Botting Farm",
    image_url: "",
    site_url: "https://github.com/JeffreyGHJ/RuneScapeBotting",
    location: "",
    timeframe: "2017 - 2020",
    role: "Full Stack - Java",
    description:
      "Authored libraries of scripts and utilities to automate gameplay for the MMORPG “OldSchool Runescape”",
    highlights: [
      "Contributed to an open-source repository available for public use following a rigorous approval process by admins",
      "Established scalability, ensured efficiency, and enabled remote access via SSH and VNC by deploying on AWS server",
      "Maintained quality and usability by adding and changing features based on user requests and game updates",
      "Evaluated advantages relating to efficiency, simplicity, and detectability for multiple botting clients and APIs",
    ],
  },
];

export default PersonalProjects;
