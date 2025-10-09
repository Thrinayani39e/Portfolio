import { Injectable } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  startDate: Date;
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
        skills: ['Java', 'C#', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C/C++']
      },
      {
        icon: '<i class="fas fa-rocket"></i>',
        title: 'Frameworks',
        skills: ['.NET', 'ASP.NET', 'Angular', 'WPF', 'FastAPI', 'SQLAlchemy', 'Jasmine', 'Karma']
      },
      {
        icon: '<i class="fas fa-tools"></i>',
        title: 'Tools',
        skills: ['Azure DevOps', 'Git', 'Jira', 'Visual Studio', 'Postman']
      },
      {
        icon: '<i class="fas fa-brain"></i>',
        title: 'AI/ML',
        skills: ['Neural Networks', 'Spiking Neural Networks', 'Deep Learning']
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        degree: 'MS in Computer Science and Software Engineering',
        institution: 'University of Washington',
        duration: 'Expected: June 2027'
      },
      {
        degree: 'B.Tech in Computer Science',
        institution: 'Amrita Vishwa Vidyapeetham, India',
        duration: 'Sep 2020 - Jul 2024',
        details: 'Graduated with First Class with Distinction. Notable Coursework: Object-Oriented Programming (A+), Data Structures & Algorithms (A), Database Management Systems (A), Operating Systems (A), User Interface Design (A), Neural Networks & Deep Learning (A+)'
      }
    ];
  }

  getCertifications(): string[] {
    return [
      'Mathematics for Machine Learning Specialization',
      'Angular for Front End Engineers',
      'AI For Everyone',
      'Accelerated Computer Science Fundamentals',
      'Introduction to DevOps'
    ];
  }
}