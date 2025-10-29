import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
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
  projects: any[] = [];
  selectedProject: any = null;
  showModal = false;

  constructor(
    private portfolioService: PortfolioService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    this.observeSections();
  }

  openProjectModal(project: any): void {
    this.selectedProject = { ...project };
    this.showModal = true;

    const scrollY = window.scrollY;

    setTimeout(() => {
      // Lock body scroll
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
      this.renderer.setStyle(document.body, 'position', 'fixed');
      this.renderer.setStyle(document.body, 'width', '100%');
      this.renderer.setStyle(document.body, 'top', `-${scrollY}px`);

      // Force modal into view
      window.scrollTo(0, 0);
      const modal = this.el.nativeElement.querySelector('.modal');
      if (modal) {
        modal.scrollTop = 0;
      }
    }, 100);
  }

  closeModal(): void {
    const scrollY = document.body.style.top;
    const scrollPosition = parseInt(scrollY || '0') * -1;

    // Unlock body
    this.renderer.setStyle(document.body, 'overflow', '');
    this.renderer.setStyle(document.body, 'position', '');
    this.renderer.setStyle(document.body, 'width', '');
    this.renderer.setStyle(document.body, 'top', '');

    this.showModal = false;
    this.selectedProject = null;

    // Restore scroll
    window.scrollTo(0, scrollPosition);
  }

  truncateDescription(desc: string[]): string {
    const full = desc.join(' ');
    return full.length > 120 ? full.substring(0, 120) + '...' : full;
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
