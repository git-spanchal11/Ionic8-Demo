import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, Techanologies } from 'src/app/dataModels/model';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private mockProjects: Project[] = [
    {
      "name": "Western Union R3",
      "client": "Western Union",
      "duration": "2022 - Present",
      "domain": "Finance / Payments",
      "techanology": [
        "AngularJS",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
        "firebase",
        "Optimizely",
        "Amplitude"
      ],
      "platform": [
        "iOS",
        "Android"
      ],
      "desc": "<ul><li>Led frontend development for the R3 digital remittance platform using Angular, focusing on scalable, modular architecture. </li> <li>Designed and enforced reusable component libraries, state management, and performance optimizations for enterprise-grade applications. </li> <li>Mentored developers, conducted code reviews, and collaborated with backend, QA, and product teams to deliver secure, compliant financial solutions.</li></ul>",
      "link": "https://www.westernunion.com/us/en/mobile-app.html",
      "images": []
    },
    {
      "name": "RSA - Risk Summary App",
      "client": "OLYMPUS",
      "duration": "2021 - 2022",
      "domain": "Risk Management",
      "techanology": [
        "Ionic6",
        "Angular",
        "TypeSctipt",
        "NodeJS",
        "Azure",
        "Git",
        "Sentry",
        "jquery"
      ],
      "platform": [
        "iOS",
        "Android",
        "Web",
        "Desktop"
      ],
      "desc": "<ul><li>Led frontend architecture and development for the RSA Risk Summary App using <b>Angular</b>, focusing on scalable, secure, and maintainable UI design.</li><li>Implemented reusable component frameworks, role-based access controls, and optimized state management for complex risk data visualization.</li><li>Defined coding standards, conducted code reviews, and mentored team members to ensure high-quality enterprise-grade delivery.</li><li>Collaborated closely with product, backend, and security teams to deliver compliant, performance-optimized risk management solutions.</li></ul>",
      "link": "https://rsa.olympus.com/",
      "images": []
    },
    {
      "name": "CRAi OLT",
      "client": "charles river associates",
      "duration": "2019 - 2021",
      "domain": "Workforce Management",
      "techanology": [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "Ionic",
        "Oracle",
        "Java"
      ],
      "platform": [
        "iOS",
        "Android",
        "Web",
        "Desktop"
      ],
      "desc": "A global leader in cross-border, cross-currency money movement and payments.",
      "link": "",
      "images": []
    },
    {
      "name": "Transcom",
      "client": "Infosenseglobal",
      "duration": "2019-2021",
      "domain": "transportation tracking",
      "techanology": [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "NodeJS",
        "LeafletJS",
        "GPS Tracking"
      ],
      "platform": [
        "iOS",
        "Android",
        "Web"
      ],
      "desc": "Advance Operations Dashboard is an application where a user can see trip data analysis and current conditions of roadways caused by construction events. It contains real-time, as well as, historical travel time information for trips. Users can view trips, cameras, and events on a map etc. It also includes features like viewing travel time for selected trips.",
      "link": "",
      "images": []
    },
    {
      "name": "Danabazaar",
      "client": "AtoZ Infoway LLP",
      "duration": "2019 – 2021",
      "domain": "Ecommerce / Grocery market",
      "techanology": [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "Ionic",
        "SQLite",
        "Onesignal",
        "Sentry",
        "firebase"
      ],
      "platform": [
        "iOS",
        "Android"
      ],
      "desc": "online supermarket shopping app, It offers a convenient and reliable grocery shopping experience from the comfort of home.",
      "link": "",
      "images": []
    },
    {
      "name": "Customer 360",
      "client": "Infosenseglobal",
      "duration": "2019 – 2022",
      "domain": "ERP / Enterprise Mobility",
      "techanology": [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "Ionic",
        "Oracle",
        "Java",
        "SQLite"
      ],
      "platform": [
        "iOS",
        "Android",
        "Web"
      ],
      "desc": "An ERP solution for small and medium-sized enterprises to manage their business processes.",
      "link": "",
      "images": []
    },
    {
      "name": "HRMS - HR Sense",
      "client": "AtoZ Infoway LLP",
      "duration": "2017 – 2019",
      "domain": "Human Resource Management System",
      "techanology": [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "Ionic",
        "Oracle",
        "Java",
        "SQLite",
        "GEO Location"
      ],
      "platform": [
        "iOS",
        "Android"
      ],
      "desc": "HR application as a product for AtoZ INFOWAY LLP to manage internal HR workflows. Integrated payroll, leave, attendance and role management modules for real-time HR processing.",
      "link": "",
      "images": []
    },
    {
      "name": "AquaLogs",
      "client": "AtoZ Infoway LLP",
      "duration": "2017 - 2020",
      "domain": "AgriTech / Aquaculture",
      "techanology": [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "Ionic",
        "NodeJS",
        "SQLite",
        "IoT"
      ],
      "platform": [
        "iOS",
        "Android",
        "Web"
      ],
      "desc": "An aquaculture management solution to monitor and manage fish and shrimp farms.",
      "link": "",
      "images": []
    },
    {
      "name": "Visitor Sense",
      "client": "AtoZ Infoway LLP",
      "duration": "2016 - 2019",
      "domain": "Security / Visitor Management",
      "techanology": [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "Ionic",
        "SQLite"
      ],
      "platform": [
        "iOS",
        "Android",
        "Web"
      ],
      "desc": "A visitor management solution to track and manage visitors in offices and buildings.",
      "link": "",
      "images": []
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.mockProjects);
  }


  private mockTechnologies: Techanologies[] = [
    {
      "icon": "logo-angular",
      "skill": "Angular",
      "category_color": "danger"
    },
    {
      "icon": "code-working",
      "skill": "TypeScript",
      "category_color": "warning"
    },
    {
      "icon": "logo-javascript",
      "skill": "ES6",
      "category_color": "success"
    },
    {
      "icon": "logo-html5",
      "skill": "HTML",
      "category_color": "light"
    },
    {
      "icon": "logo-angular",
      "skill": "AngularJS",
      "category_color": "danger"
    },
    {
      "icon": "logo-ionic",
      "skill": "Ionic",
      "category_color": "primary"
    },

    {
      "icon": "logo-sass",
      "skill": "SCSS",
      "category_color": "warning"
    },

    {
      "icon": "logo-javascript",
      "skill": "JavaScript",
      "category_color": "success"
    },
    {
      "icon": "logo-css3",
      "skill": "CSS",
      "category_color": "danger"
    },
    {
      "icon": "code-slash-outline",
      "skill": "Cordova",
      "category_color": "light"
    },
    {
      "icon": "logo-capacitor",
      "skill": "Capacitor",
      "category_color": "warning"
    },
    {
      "icon": "git-branch",
      "skill": "Git",
      "category_color": "light"
    },
    {
      "icon": "analytics",
      "skill": "Jira",
      "category_color": "primary"
    },
    {
      "icon": "logo-firebase",
      "skill": "Firebase",
      "category_color": "warning"
    },
    // {
    //   "skill": "Sentry",
    //   "category_color": "light"
    // },
    // {
    //   "skill": "Amplitude",
    //   "category_color": "danger"
    // },
    // {
    //   "skill": "Optimizely",
    //   "category_color": "warning"
    // },
    // {
    //   "skill": "Quantum Metric",
    //   "category_color": "light"
    // },
    {
      "icon": "cube-outline",
      "skill": "Agile",
      "category_color": "danger"
    },
    // {
    //   "skill": "Electron",
    //   "category_color": "danger"
    // },
    {
      "icon": "logo-apple",
      "skill": "iOS",
      "category_color": "light"
    },
    {
      "icon": "logo-android",
      "skill": "Android",
      "category_color": "success"
    }
  ];

  getTechnologies(): Observable<Techanologies[]> {
    return of(this.mockTechnologies);
  }
}
