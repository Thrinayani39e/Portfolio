import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { FooterComponent } from './footer/footer.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarNavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  isDarkMode = false;
  private cursorElement!: HTMLElement;

  ngOnInit(): void {
    this.initCustomCursor();
  }

  ngAfterViewInit(): void {
    this.initParticles();
  }

  initCustomCursor(): void {
    this.cursorElement = document.createElement('div');
    this.cursorElement.className = 'custom-cursor';
    document.body.appendChild(this.cursorElement);

    document.addEventListener('mousemove', (e) => {
      this.cursorElement.style.left = `${e.clientX}px`;
      this.cursorElement.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
      this.cursorElement.classList.add('clicked');
    });

    document.addEventListener('mouseup', () => {
      this.cursorElement.classList.remove('clicked');
    });
  }

  initParticles(): void {
    if (typeof (window as any).particlesJS !== 'undefined') {
      (window as any).particlesJS('particles-js', {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ['#f7dde9', '#e3f0ff', '#f0e4f5'] },
          shape: { type: 'circle' },
          opacity: { value: 0.4, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: false },
          move: { enable: true, speed: 0.8, direction: 'none', random: true, out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { 
            onhover: { enable: true, mode: 'grab' }, 
            onclick: { enable: true, mode: 'push' } 
          },
          modes: { 
            grab: { distance: 120, line_linked: { opacity: 0.4 } }, 
            push: { particles_nb: 3 } 
          }
        }
      });
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (Math.random() > 0.85) {
      const dot = document.createElement('div');
      dot.className = 'paint-dot';
      dot.style.background = `hsl(${Math.random() * 360}, 70%, 80%)`;
      dot.style.left = `${event.clientX - 10}px`;
      dot.style.top = `${event.clientY - 10}px`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 2000);
    }
  }

  onFloatElementClick(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    element.classList.add('clicked');
    setTimeout(() => element.classList.remove('clicked'), 500);
  }

  getAnimationState(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'] || 'default';
  }
}