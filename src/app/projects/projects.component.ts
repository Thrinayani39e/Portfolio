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

    // Force scroll to top of modal on open
    setTimeout(() => {
      const modal = this.el.nativeElement.querySelector('.modal');
      if (modal) {
        modal.scrollTop = 0;
        window.scrollTo(0, 0); // Ensure page doesn't stay scrolled
      }

      // Add body lock on mobile
      this.renderer.addClass(document.body, 'modal-open');
    }, 50);
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProject = null;
    this.renderer.removeClass(document.body, 'modal-open');
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
