import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{




  ngOnInit(): void {
    this.render()
  }



render(){
let canvas = document.getElementsByClassName('canvas')[0];
let scene = new THREE.Scene()
let render = new THREE.WebGL3DRenderTarget()
let camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000,)
camera.position.set(0, 0, 1);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

canvas.appendChild( renderer.domElement);

let loader = new GLTFLoader()

loader.load( 'path/to/model.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

}

}
