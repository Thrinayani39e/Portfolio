import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

interface Certification {
  name: string;
  url: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.certifications = this.portfolioService.getCertifications();
    this.observeSections();
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