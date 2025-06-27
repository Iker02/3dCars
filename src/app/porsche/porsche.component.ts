import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styleUrls: ['./porsche.component.css'],
  standalone: true,
})
export class PorscheComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) private canvasRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initThree();
      this.loadModel();
      this.animate();
    }
  }

  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Luz ambiental intensa
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);

    // Luz direccional principal (tipo sol)
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight1.position.set(10, 15, 10);
    this.scene.add(directionalLight1);

    // Luz direccional secundaria (relleno suave)
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-10, 5, -10);
    this.scene.add(directionalLight2);

    // Luz hemisférica para luz de cielo/suelo
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x222222, 0.7);
    hemisphereLight.position.set(0, 20, 0);
    this.scene.add(hemisphereLight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load(
      '/assets/models/porsche/scene.gltf',
      (gltf) => {
        gltf.scene.position.set(0, -1, 0);
        gltf.scene.scale.set(0.5, 0.5, 0.5);
        this.scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error al cargar modelo:', error);
      }
    );
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
}
