import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { constants } from '../services/constants'; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initTiltEffect();
  }
  constant = constants;
  onProfileClick(): void {
    const profile = document.querySelector('.decorative-header');
    profile?.classList.add('spin');
    setTimeout(() => profile?.classList.remove('spin'), 1000);
  }

  initTiltEffect(): void {
    const cards = document.querySelectorAll('.contact-item');
    cards.forEach(card => {
      const element = card as HTMLElement;
      element.addEventListener('mouseenter', () => {
        element.style.transition = 'none';
      });
      element.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;
        const maxTilt = 8;
        const tiltY = percentX * maxTilt;
        const tiltX = -percentY * maxTilt;
        element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        const glare = element.querySelector('.tilt-glare') as HTMLElement;
        if (glare) {
          glare.style.opacity = '1';
          glare.style.background = `radial-gradient(circle at ${(percentX + 1) * 50}% ${(percentY + 1) * 50}%, rgba(255,255,255,0.2), transparent)`;
        }
      });
      element.addEventListener('mouseleave', () => {
        element.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        const glare = element.querySelector('.tilt-glare') as HTMLElement;
        if (glare) {
          glare.style.opacity = '0';
        }
      });
      const glareElement = document.createElement('div');
      glareElement.className = 'tilt-glare';
      glareElement.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      element.style.position = 'relative';
      element.style.transformStyle = 'preserve-3d';
      element.appendChild(glareElement);
    });
  }
}
