import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {

  projects : Array<any> = [ 
    { name: 'Western Union R3',
      client: 'Western Union',
      duration: '2022 - Present',
      domain: 'Finance / Payments',
      techanology: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'Git', 'firebase', 'Optimizely', 'Amplitude'],
      platform: ['iOS', 'Android'],
      desc: 'A global leader in cross-border, cross-currency money movement and payments.', 
      link: '',
      images : []
    },
    { name: 'RSA - Risk Summary App',
      client: 'OLYMPUS',
      duration: '2021 - 2022',
      domain: 'Risk Management',
      techanology: ['Ionic6', 'Angular', 'TypeSctipt', 'NodeJS', 'Azure', 'Git', 'Sentry', 'jquery'],
      platform: ['iOS', 'Android', 'Web', 'Desktop'],
      desc: 'A risk management application for financial institutions to monitor and manage risks.', 
      link: '',
      images : []
    },
    { name: 'CRAi OLT',
      client: 'charles river associates',
      duration: '2019 - 2021',
      domain: 'Workforce Management',
      techanology: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Git', 'Ionic', 'Oracle', 'Java'],
      platform: ['iOS', 'Android', 'Web', 'Desktop'],
      desc: 'A global leader in cross-border, cross-currency money movement and payments.', 
      link: '',
      images : []
    },
    { name: 'Customer 360',
      client: 'Infosenseglobal',
      duration: '2019 – 2022',
      domain: 'ERP / Enterprise Mobility',
      techanology: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Git', 'Ionic', 'Oracle', 'Java', 'SQLite'],
      platform: ['iOS', 'Android', 'Web'],
      desc: 'An ERP solution for small and medium-sized enterprises to manage their business processes.', 
      link: '',
      images : []
    },
    { name: 'AquaLogs',
      client: 'AtoZ Infoway LLP',
      duration: '2017 - 2020',
      domain: 'AgriTech / Aquaculture',
      techanology: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Git', 'Ionic', 'NodeJS', 'SQLite', 'IoT'],
      platform: ['iOS', 'Android', 'Web'],
      desc: 'An aquaculture management solution to monitor and manage fish and shrimp farms.', 
      link: '',
      images : []
    },
    { name: 'Visitor Sense',
      client: 'AtoZ Infoway LLP',
      duration: '2016 - 2019',
      domain: 'Security / Visitor Management',
      techanology: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Git', 'Ionic', 'SQLite'],
      platform: ['iOS', 'Android', 'Web'],
      desc: 'A visitor management solution to track and manage visitors in offices and buildings.', 
      link: '',
      images : []
    }
  ]

  constructor() {
   }

  ngOnInit() {




  }

}
