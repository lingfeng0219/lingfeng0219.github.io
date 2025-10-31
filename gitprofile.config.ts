// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lingfeng0219', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [

        {
          title: 'Research on Machine Vision-based Water Surface Search and Rescue Target Detection Technology',
          description:
            'This study develops an automated detection system for water surface rescue by integrating YOLOv5 object detection with binocular vision. The system achieves 90% mAP in identifying targets like floating objects and boats under complex conditions. Through stereo matching and depth map analysis, it enables precise spatial localization and distance measurement, significantly improving rescue efficiency and accuracy.',
          imageUrl:
            'https://lingfeng0219.github.io/public/boat.png',
          link: 'https://github.com/lingfeng0219/Research-on-Machine-Vision-based-Water-Surface-Search-and-Rescue-Target-Detection-Technology',
        },
        {
          title: 'Autonomous Fruit-Picking Robot',
          description:
            'Designed a motor-driven wheeled 5-DOF fruit-picking robot in SolidWorks, integrating a 2-DOF mobile platform with a 3-DOF manipulator and gripper, and performed motion simulation. Engineered the system by selecting and performing strength calculations for all drive motors and sensors.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          videoUrl: 'https://lingfeng0219.github.io/public/fruit.mp4',
          link: 'https://github.com/lingfeng0219/Autonomous-Fruit-Picking-Robot',
        },
        {
          title: 'AI and AR-based Fish Recognition Technology-Innovation and Entrepreneurship Training Program for College Students',
          description:
            'Developed an AI-AR fish recognition system that achieved 93.33% validation accuracy by integrating YOLO object detection with Vuforia for real-time 3D visualization.',
          imageUrl:
            'https://lingfeng0219.github.io/public/fish.jpg',
          link: 'https://lingfeng0219.github.io/public/AI and AR-based Fish Recognition Technology.pdf',
        },
        {
          title: '51 Microcontroller-based Digital Clock with Calibration',
          description:
            'Designed and built a digital clock using a 51 microcontroller, featuring a 6-digit display for 24-hour time. The system allows for real-time calibration through tactile buttons, enabling users to reset the seconds and adjust the hour and minute values.',
          videoUrl: 'https://lingfeng0219.github.io/public/51.mp4',
          link: 'https://github.com/lingfeng0219/51-Microcontroller-based-Digital-Clock-with-Calibration',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ling Feng', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'flts0219@gmail.com',
  },
  resume: {
    fileUrl:
      'https://lingfeng0219.github.io/public/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'ROS2',
    'Matlab',
    'Cad',
    'Solidworks',
    'Kukasimpro',
    'Keil',
    'Multisim',
    'Altisum Designer',
    'Labview',
    'Raspberry Pi',
    'PCB design',
    'Control System',
    'OpenCV',
  ],
  experiences: [
    {
      company: 'Shanghai Quicktron Intelligent Technology Co., Ltd.',
      position: 'Test Engineer',
      from: 'Jun.2025',
      to: 'Sep.2025',
    },
    {
      company: 'Suzhou Huibo Robot Co., Ltd.',
      position: 'Robotics Engineer',
      from: 'Jun.2024',
      to: 'Sep.2024',
    },
  ],
  educations: [
    {
      institution: 'University of Manchester',
      degree: 'Msc Robotics',
      from: 'Sep.2025',
      to: 'Jun.2026'
    },
    {
      institution: 'Shanghai Ocean University',
      degree: 'BEng Robotics',
      from: 'Sep.2021',
      to: 'Jun.2025',
    },
  ],
  publications: [
    {
      title: 'An Optimal-Path-Planning Method for Unmanned Surface Vehicles Based on a Novel Group Intelligence Algorithm',
      conferenceName: '',
      journalName: 'Journal of Marine Science and Engineering',
      authors: 'Shitu Chen, Ling Feng, Xuteng Bao, Zhe Jiang, Bowen Xing and Jingxiang Xu,',
      link: 'https://www.mdpi.com/2077-1312/12/3/477',
      description: 'This study introduces a novel collective intelligence algorithm for USV path planning that integrates dynamic obstacle avoidance, path smoothing, and eight-directional current resistance. Simulation results demonstrate an 8% improvement in path optimization, 50% faster computation, and near-perfect dynamic obstacle avoidance compared to conventional algorithms.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'cupcake',
      'light',
      'dark',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
