import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, HostListener, OnInit } from '@angular/core';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BackgroundService } from 'src/app/shared/services/background-service';

@Component({
  selector: 'app-mezzi',
  templateUrl: './mezzi.component.html',
  styleUrls: ['./mezzi.component.scss']
})
export class MezziComponent implements OnInit {

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
windowHeight= this.calculateHeightLess30()
background!:string
mezzi:any=
[
  {
    colore:"red"
  },
  {
    colore:"green"
  },
  {
    colore:"yellow"
  },
  {
    colore:"light-blue"
  },
  {
    colore:"pink"
  },
  {
    colore:"dark"
  },
]
canvas1:any

threeJsArray:any[]=
[
  {
    scene:THREE.Scene,
camera:THREE.PerspectiveCamera,
renderer:THREE.WebGLRenderer,
loader:GLTFLoader,
model:null,
light:THREE.AmbientLight,
orbit:OrbitControls
  },
  {
    scene:THREE.Scene,
    camera:THREE.PerspectiveCamera,
    renderer:THREE.WebGLRenderer,
    loader:GLTFLoader,
    model:null,
    light:THREE.AmbientLight,
    orbit:OrbitControls
  },
  {
    scene:THREE.Scene,
    camera:THREE.PerspectiveCamera,
    renderer:THREE.WebGLRenderer,
    loader:GLTFLoader,
    model:null,
    light:THREE.AmbientLight,
    orbit:OrbitControls
  },
  {
    scene:THREE.Scene,
    camera:THREE.PerspectiveCamera,
    renderer:THREE.WebGLRenderer,
    loader:GLTFLoader,
    model:null,
    light:THREE.AmbientLight,
    orbit:OrbitControls
  },
  {
    scene:THREE.Scene,
    camera:THREE.PerspectiveCamera,
    renderer:THREE.WebGLRenderer,
    loader:GLTFLoader,
    model:null,
    light:THREE.AmbientLight,
    orbit:OrbitControls
  },
  {
    scene:THREE.Scene,
    camera:THREE.PerspectiveCamera,
    renderer:THREE.WebGLRenderer,
    loader:GLTFLoader,
    model:null,
    light:THREE.AmbientLight,
    orbit:OrbitControls
  }
]
threeJsCheck:boolean=false

scene1!:THREE.Scene
camera1!:THREE.PerspectiveCamera
renderer1!:THREE.WebGLRenderer
canvases:any[] = []

constructor(private backgroundService:BackgroundService){
this.backgroundService.bgClass.subscribe((bg:string)=>{
  this.background=bg
})
}

  ngOnInit(): void {
localStorage.setItem('location','mezzi')
this.initScene()
  }



calculateHeightLess30():number{
  return window.innerHeight-(window.innerHeight*30/100)
}
getBackground(color:string){
  return `url("../../../assets/Images/svg/${color}.png")`
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

setTimeout(()=>{
  this.canvas1= document.getElementsByClassName('canvas-card')

  for (let cv1 of this.canvas1){
   this.canvases.push(cv1)

this.threeJsArray[this.canvases.indexOf(cv1)].scene=new THREE.Scene()
this.threeJsArray[this.canvases.indexOf(cv1)].camera = new THREE.PerspectiveCamera( 75, cv1.offsetWidth / cv1.offsetHeight, 0.1, 1000 );
this.threeJsArray[this.canvases.indexOf(cv1)].renderer= new THREE.WebGLRenderer()
this.threeJsArray[this.canvases.indexOf(cv1)].renderer.setClearColor( '#ffffff', .001 );
this.threeJsArray[this.canvases.indexOf(cv1)].renderer.setSize(cv1.offsetWidth ,cv1.offsetHeight);

this.threeJsArray[this.canvases.indexOf(cv1)].camera.position.set(0,0,80)

        cv1.appendChild( this.threeJsArray[this.canvases.indexOf(cv1)].renderer.domElement );

        this.threeJsArray[this.canvases.indexOf(cv1)].loader = new GLTFLoader()

        this.threeJsArray[this.canvases.indexOf(cv1)].loader.load( '../../../assets/models/helicopter_space_ship.glb', ( gltf:any )=> {

          this.threeJsArray[this.canvases.indexOf(cv1)].model = gltf.scene;

          this.threeJsArray[this.canvases.indexOf(cv1)].model.scale.set(10,10,10)
        this.threeJsArray[this.canvases.indexOf(cv1)].scene.add( this.threeJsArray[this.canvases.indexOf(cv1)].model );
        this.threeJsArray[this.canvases.indexOf(cv1)].light = new THREE.AmbientLight(this.canvases.indexOf(cv1)==0?'#FF0000':this.canvases.indexOf(cv1)==1?'#008000':this.canvases.indexOf(cv1)==2?
        '#FFFF00':this.canvases.indexOf(cv1)==3?'#ADD8E6':this.canvases.indexOf(cv1)==4?'#FFB6C1':this.canvases.indexOf(cv1)==5?0x000000:'0xffffff',10)
        this.threeJsArray[this.canvases.indexOf(cv1)].scene.add(this.threeJsArray[this.canvases.indexOf(cv1)].light)
        this.threeJsArray[this.canvases.indexOf(cv1)].orbit = new OrbitControls(this.threeJsArray[this.canvases.indexOf(cv1)].camera,this.threeJsArray[this.canvases.indexOf(cv1)].renderer.domElement)
        this.threeJsArray[this.canvases.indexOf(cv1)].orbit.update()
        setTimeout(()=>{
          this.threeJsCheck=true
        },1000)
      })
      }
},3000)


this.animate()
}

animate() {
  requestAnimationFrame( ()=>this.animate() );
  this.renderer.render( this.scene, this.camera );
  this.scene.rotation.set(0.0001,0.0001,0.0001)
  this.cube.rotateY(0.001)
  this.cube1.rotateX(0.001)

  if(this.threeJsCheck){
for(let i = 0; i<=5;i++){
  this.threeJsArray[i].renderer.render(this.threeJsArray[i].scene,this.threeJsArray[i].camera )
  this.threeJsArray[i].orbit.update()
}
  }
}


 @HostListener('window:resize', ['$event'])
 onResize(event:any) {
   this.windowHeight=this.calculateHeightLess30()
   this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
   this.camera.aspect = this.canvas.offsetWidth/ this.canvas.offsetHeight;
		this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
    for(let i = 0; i<=5;i++){
      this.threeJsArray[i].renderer.render(this.threeJsArray[i].scene,this.threeJsArray[i].camera )
      this.threeJsArray[i].orbit.update()
      this.threeJsArray[i].renderer.setSize(this.canvases[i].offsetWidth, this.canvases[i].offsetHeight);
      this.threeJsArray[i].camera.aspect = this.canvases[i].offsetWidth/ this.canvases[i].offsetHeight;
      this.threeJsArray[i].camera.updateProjectionMatrix();
      this.threeJsArray[i].renderer.render(this.threeJsArray[i].scene, this.threeJsArray[i].camera);
      if(window.innerWidth<=384){
        this.threeJsArray[i].model.scale.set(3,3,3)
      }else if(window.innerWidth<=900){
        this.threeJsArray[i].model.scale.set(5,5,5)
      }else{
        this.threeJsArray[i].model.scale.set(10,10,10)
      }
    }
 }




}
