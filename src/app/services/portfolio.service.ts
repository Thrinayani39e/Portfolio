import { Injectable } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  startDate: Date;
}
interface Certification{
  name:string,
  url:string
}
interface Project {
  id: string;
  title: string;
  date: string;
  description: string[];
  details: string[];
  technologies: string[];
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  getTimeline(): Experience[] {
    return [
      {
        title: 'Software Design Engineer',
        company: 'Schneider Electric - R&D',
        duration: 'Feb 2025 - Aug 2025',
        description: [
          'Developed a POC for the UMAC application\'s GSE license mechanism using C#/.NET and WPF, reducing validation time by 30%.',
          'Contributed to the Net Carbon Zero initiative with a sustainability project using Python and FastAPI.',
          'Designed user management features and dashboards for a cybersecurity portal using Angular, ASP.NET, and SQL.'
        ],
        startDate: new Date('2025-02-01')
      },
      {
        title: 'Graduate Engineer Trainee',
        company: 'Schneider Electric - R&D',
        duration: 'Aug 2024 - Jan 2025',
        description: [
          'Worked on Industry Services and Tool Platform projects, using ASP.NET, Python, and Angular.',
          'Improved project alignment by 20% through agile SCRUM practices.',
          'Optimized code to reduce application load times by 20% and enhanced database performance by 40% using SQLite and SQLAlchemy.'
        ],
        startDate: new Date('2024-08-01')
      },
      {
        title: 'Application Engineer - Intern',
        company: 'Schneider Electric - R&D',
        duration: 'Jan 2024 - Jul 2024',
        description: [
          'Mastered C#, Angular, and .NET in one month.',
          'Built an internal RBAC application (CAAS), contributing to all phases from design to code quality fixes with Sonar and Coverity.'
        ],
        startDate: new Date('2024-01-01')
      },
      {
        title: 'Research Scholar',
        company: 'Amrita School of Engineering',
        duration: 'Sep 2023 - Dec 2023',
        description: [
          'Published work under Dr. Rimjhim Padam Singh on leveraging Spiking Neural Networks for fashion dataset classification.'
        ],
        startDate: new Date('2023-09-01')
      },
      {
        title: 'Research Scholar',
        company: 'Amrita School of Engineering',
        duration: 'Apr 2023 - Jun 2023',
        description: [
          'Published work under Dr. Jyotsna C. on CNN-based neural networks for age estimation using diverse facial datasets.'
        ],
        startDate: new Date('2023-04-01')
      }
    ].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }

  getProjects(): Project[] {
    return [
        {
        id: 'Portfolio',
        title: 'Portfolio',
        date: 'Sept 2025',
        description: [
          'A simple portfolio made using Angular'
        ],
        details: [
    
        ],
        technologies: ['Angular', 'HTML', 'SCSS', 'Typescript']
      },
      {
        id: 'NetworkAnomaliesSNN',
        title: 'Network Anomaly Detection using SNNs',
        date: 'July 2024',
        description: [
          'Developed an advanced system using Spiking Neural Networks for real-time threat identification.'
        ],
        details: [
          'Real-time anomaly detection with high accuracy.',
          'Optimized for low-latency processing.'
        ],
        technologies: ['Python', 'TensorFlow', 'Spiking Neural Networks']
      },
      {
        id: 'FashionItemsSNN',
        title: 'Fashion Product Labelling with SNNs',
        date: 'October 2024 - IEEE',
        description: [
          'Published research on optimized fashion product labelling using attention-based Spiking Neural Networks.'
        ],
        details: [
          'Attention mechanisms for improved accuracy.',
          'Efficient processing of large datasets.',
          'Published in IEEE.'
        ],
        technologies: ['Python', 'PyTorch', 'Spiking Neural Networks']
      },
      {
        id: 'AgeDetectionCNN',
        title: 'CNN-Based Age Estimation',
        date: 'November 2024 - IEEE',
        description: [
          'Developed a CNN-based system for accurate age estimation from diverse facial datasets.'
        ],
        details: [
          'High accuracy in age prediction.',
          'Robust handling of diverse datasets.',
          'Published in IEEE.'
        ],
        technologies: ['Python', 'TensorFlow', 'CNN']
      },
      {
        id: 'Automobile_Showroom',
        title: 'Automobile Management System',
        date: 'June 2023',
        description: [
          'Built a web application for automobile inventory and sales using HTML, CSS, JavaScript, PHP, and MySQL.'
        ],
        details: [
          'Responsive user interface.',
          'Efficient inventory management.',
          'Secure transaction processing.'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
      }
    ];
  }

  getSkills(): SkillCategory[] {
    return [
      {
        icon: '<i class="fas fa-code"></i>',
        title: 'Languages',
        skills: ['Java', 'C#', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C/C++', 'Node.js']
      },
      {
        icon: '<i class="fas fa-rocket"></i>',
        title: 'Frameworks',
        skills: ['.NET(ASP.NET)', 'Angular', 'React', 'WPF','REST Api', 'SQLAlchemy', 'Jasmine', 'Karma', 'Node.js']
      },
      {
        icon: '<i class="fas fa-tools"></i>',
        title: 'Tools',
        skills: ['Azure DevOps', 'Git', 'Visual Studio', 'Postman', 'Jira']
      },
      {
        icon: '<i class="fas fa-database"></i>', // Using a database icon as a placeholder
        title: 'Databases',
        skills: ['SQL', 'MySQL', 'SQLite']
      },
      {
        icon: '<i class="fas fa-cogs"></i>', // Using a cogs icon as a placeholder for methodologies
        title: 'Methodologies',
        skills: ['SCRUM', 'CI/CD', 'Agile Development', 'Code Reviews', 'Software Testing']
      },
      {
        icon: '<i class="fas fa-brain"></i>',
        title: 'AI/ML',
        skills: ['Neural Networks', 'Spiking Neural Networks', 'Deep Learning']
      }
    ];
  }
  getEducation(): { degree: string; institution: string; duration: string; details?: string; coursework?: string; achievements?: string; logo: string }[] {
    return [
      {
        degree: 'MS, Computer Science and Software Engineering',
        institution: 'University of Washington',
        duration: 'Expected: June 2027',
        details: '',
        coursework: 'Advanced Computer Vision, Algorithm Design and Analysis', 
        achievements: '', 
        logo: 'assets/uw-logo.png'
      },
      {
        degree: 'Bachelor of Technology, Computer Science and Engineering',
        institution: 'Amrita Vishwa Vidyapeetham',
        duration: 'Sep 2020 - Jul 2024',
        details: '',
        coursework: 'Object-Oriented Programming (A+), Data Structures and Algorithms (A), Database Management Systems (A), Operating Systems (A), User Interface Design (A), Neural Networks and Deep Learning (A+)',
        achievements: 'Graduated First class with Distinction', 
        logo: 'assets/avv-logo.png'
      }
    ];
  }

getCertifications(): Certification[] {
    return [
      { name: 'Mathematics for Machine Learning Specialization', url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/LRX7LY4YQ6GX' },
      { name: 'Angular for Front End Engineers', url: 'https://www.coursera.org/account/accomplishments/verify/8BLL6V7DT9IU' },
      { name: 'AI For Everyone', url: 'https://www.coursera.org/account/accomplishments/verify/A7VMQRCZS4RP' },
      { name: 'Accelerated Computer Science Fundamentals', url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/FHMLX2XWCQDR' },
      { name: 'Introduction to DevOps', url: 'https://www.coursera.org/account/accomplishments/verify/VA7NOFYMOW4I' }
    ];
  }

 
}