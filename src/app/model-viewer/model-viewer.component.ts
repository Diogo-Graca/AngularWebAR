import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.css']
})
export class ModelViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  switchSrc(name: string): void {
    const modelViewer = document.querySelector('model-viewer');
    const base = './assets/models/' + name;
    modelViewer.setAttribute('src', base + '.glb');
    modelViewer.setAttribute('ios-src', '/iOS/' + base + '.usdz');
    // modelViewer.setAttribute('poster', base + '.png');

    const slides = document.querySelectorAll('.slide');
    const clickedSlide = document.getElementById(name);
    slides.forEach((e) => { e.classList.remove('selected'); });
    clickedSlide.classList.add('selected');

    document.querySelector('.slider').addEventListener('beforexrselect', (ev) => {
      // Keep slider interactions from affecting the XR scene.
      ev.preventDefault();
    });
  }
}
