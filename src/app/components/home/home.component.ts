import { Component, HostListener, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/shared/services/background-service';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
numbers:number[]=[1,2,3,4,5,6,7,8]
numbers1:number[]=[1,2,3]
name:string[]=['S','P','A','C','E',' ','A','G','E','N','C','Y']
images:string[]= ['../../../assets/Images/icons/team.svg','../../../assets/Images/icons/rocket.svg.png',
'../../../assets/Images/icons/fuel-filling.svg','../../../assets/Images/icons/atoms-science.svg']

canvas :any;



scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera()
  renderer = new THREE.WebGLRenderer();
  loader = new GLTFLoader()
  model:any;
  background!:string

  constructor(private backgroundService:BackgroundService){
    this.backgroundService.bgClass.subscribe((bg:string)=>{
      this.background=bg
    })
    }


  ngOnInit(): void {
    localStorage.setItem('location',' ')
    this.render()
  }

render(){
this.canvas = document.getElementsByClassName('canvas-background')[0];
this.scene = new THREE.Scene()
this.camera = new THREE.PerspectiveCamera( 60, this.canvas.offsetWidth / this.canvas.offsetHeight, 1, 1000,)
this.camera.position.set(0, 0, 1);
this.renderer = new THREE.WebGLRenderer({ antialias: true});
this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
this.renderer.setClearColor( 0x000000, .0001);


this.canvas.appendChild( this.renderer.domElement);


this.loader.load( '../../../assets/models/planet_earth.glb', ( gltf:any )=> {

  this.model = gltf.scene;

this.model.scale.set(.1,.1,.1)
this.scene.add( this.model );
const light = new THREE.AmbientLight(0x404040,100000)
this.scene.add(light)
this.animate()
}, undefined, function ( error ) { console.error( error ); });
}

animate() {
	requestAnimationFrame( ()=>this.animate() );
	this.renderer.render( this.scene, this.camera );
 }


 @HostListener('window:resize', ['$event'])
 onResize(event:any) {

  this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
   this.camera.aspect = this.canvas.offsetWidth/ this.canvas.offsetHeight;
		this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
 }

 @HostListener('wheel', ['$event'])
onScroll(event:any){
  if(event.deltaY<0){
    this.model.rotation.y+=0.1
  }else{
    this.model.rotation.y-=0.1

  }
}

}
