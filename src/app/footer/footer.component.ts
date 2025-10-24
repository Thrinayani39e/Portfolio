import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { constants } from '../services/constants';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constant = constants;
  onHeartClick(): void {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.textContent = '❤️';
      heart.className = 'floating-heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 0.5}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }
  }
}
