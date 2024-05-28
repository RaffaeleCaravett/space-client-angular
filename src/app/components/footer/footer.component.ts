import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  canvas:any;
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera()
  renderer = new THREE.WebGLRenderer();
  loader = new GLTFLoader()
  model:any;

  ngOnInit(): void {
    this.render()
  }



render(){
this.canvas = document.getElementsByClassName('canvas')[0];
this.scene = new THREE.Scene()
this.camera = new THREE.PerspectiveCamera( 60, this.canvas.offsetWidth / this.canvas.offsetHeight, 1, 1000,)
this.camera.position.set(0, 0, 1);
this.renderer = new THREE.WebGLRenderer({ antialias: true});
this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
this.renderer.setClearColor( 0x000000, 0);


this.canvas.appendChild( this.renderer.domElement);


this.loader.load( '../../../assets/models/a_windy_day.glb', ( gltf:any )=> {

  this.model = gltf.scene;

this.model.scale.set(.4,.4,.4)
this.scene.add( this.model );
const light = new THREE.AmbientLight(0x404040,100000)
this.scene.add(light)
this.animate()

}, undefined, function ( error ) {

	console.error( error );

} );



}

animate() {
	requestAnimationFrame( ()=>this.animate() );
	this.renderer.render( this.scene, this.camera );
  this.model.rotateY(.01)
 }



}
