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
pointLights:any[]=[]
pointLights1:any[]=[]
geometry!:THREE.BoxGeometry
material!:THREE.MeshBasicMaterial
cube!:THREE.Mesh
geometry1!:THREE.BoxGeometry
material1!:THREE.MeshBasicMaterial
cube1!:THREE.Mesh
ngOnInit(): void {
  localStorage.setItem('location','about')
this.initScene()
}

initScene(){
  this.canvas= document.getElementsByClassName('canvas')[0]

this.scene = new THREE.Scene()
this.camera = new THREE.PerspectiveCamera( 75, this.canvas.offsetWidth / this.canvas.offsetHeight, 0.1, 1000 );
this.renderer= new THREE.WebGLRenderer()
this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight );
this.renderer.setClearColor( 0xffffff, 1 );
this.camera.position.set(0,0,80)

this.canvas.appendChild( this.renderer.domElement );

this.geometry = new THREE.BoxGeometry( .1, .1, .1 );
this.material = new THREE.MeshBasicMaterial( {color: 0x000000} );
this.cube = new THREE.Mesh( this.geometry, this.material );

this.geometry1 = new THREE.BoxGeometry( .1, .1, .1 );
this.material1 = new THREE.MeshBasicMaterial( {color: 0x000000} );
this.cube1 = new THREE.Mesh( this.geometry1, this.material1 );

this.scene.add( this.cube,this.cube1 );




for(let i =0 ; i<=7000;i++){
    const geometry = new THREE.SphereGeometry( Math.random()*0.25,Math.random()*0.5, Math.random()*0.25 );
    const material = new THREE.MeshBasicMaterial( { color: 0xFFD700 } );
    const sphere = new THREE.Mesh( geometry, material ); this.scene.add( sphere );
	this.pointLights.push(sphere)

}
for ( let p of this.pointLights){

    let randomNumberTwentyOne = Math.random()*220-115
    let randomNumberTwentyTwo = Math.random()*221-115.5
    let randomNumberThirty = Math.random()*220-115

    p.position.x = randomNumberTwentyOne;
                p.position.y = randomNumberTwentyTwo;
                p.position.z = randomNumberThirty;
                this.cube.add(p)
    }

    for(let i =0 ; i<=7000;i++){
      const geometry = new THREE.SphereGeometry( Math.random()*0.25,Math.random()*0.5, Math.random()*0.25 );
      const material = new THREE.MeshBasicMaterial( { color: 0xFFD700 } );
      const sphere = new THREE.Mesh( geometry, material ); this.scene.add( sphere );
    this.pointLights1.push(sphere)

  }
  for ( let p of this.pointLights1){

      let randomNumberTwentyOne = Math.random()*220-115
      let randomNumberTwentyTwo = Math.random()*221-115.5
      let randomNumberThirty = Math.random()*220-115

      p.position.x = randomNumberTwentyOne;
                  p.position.y = randomNumberTwentyTwo;
                  p.position.z = randomNumberThirty;
                  this.cube1.add(p)
      }

this.animate()
}

animate() {
	requestAnimationFrame( ()=>this.animate() );
	this.renderer.render( this.scene, this.camera );
  this.scene.rotation.set(0.0001,0.0001,0.0001)
this.cube.rotateY(0.001)
this.cube1.rotateX(0.001)
 }
}
