import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: { id: string; title: string; date: string; description: string[]; details: string[]; technologies: string[] }[] = [];
  selectedProject: { id: string; title: string; date: string; description: string[]; details: string[]; technologies: string[] } | null = null;
  showModal = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    this.observeSections();
  }

  openProjectModal(project: { id: string; title: string; date: string; description: string[]; details: string[]; technologies: string[] }): void {
    this.selectedProject = { ...project }; // Create a copy to avoid direct reference
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProject = null;
  }

  observeSections(): void {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
  }
}