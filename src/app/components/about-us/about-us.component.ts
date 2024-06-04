import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
stars:number[]=[1,2,3,4,5]
cards:string[]=['','','']
canvas:any
scene!:THREE.Scene
camera!:THREE.PerspectiveCamera
renderer!:THREE.WebGLRenderer
ngOnInit(): void {
this.initScene()
}

initScene(){
  this.canvas= document.getElementsByClassName('canvas')[0]

this.scene = new THREE.Scene()
this.camera = new THREE.PerspectiveCamera( 75, this.canvas.offsetWidth / this.canvas.offsetHeight, 0.1, 1000 );
this.renderer= new THREE.WebGLRenderer()
this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight );
this.renderer.setClearColor( 0xffffff, 1 );
this.camera.position.set(0,-100,150)

this.canvas.appendChild( this.renderer.domElement );

const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0x0ff00} );
const cone = new THREE.Mesh(geometry, material );
this.scene.add( cone );



this.animate()
}

animate() {
	requestAnimationFrame( ()=>this.animate() );
	this.renderer.render( this.scene, this.camera );
  this.scene.rotation.set(0.0001,0.0001,0.0001)
 }
}
