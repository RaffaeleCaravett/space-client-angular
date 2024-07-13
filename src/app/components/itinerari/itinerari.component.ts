import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BackgroundService } from 'src/app/shared/services/background-service';
import { ItinerariService } from 'src/app/shared/services/itinerari.service';
import { PrenotazioniService } from 'src/app/shared/services/prenotazioni.service';
import * as THREE from 'three'
@Component({
  selector: 'app-itinerari',
  templateUrl: './itinerari.component.html',
  styleUrls: ['./itinerari.component.scss']
})
export class ItinerariComponent implements OnInit{
background:string =''
pacchetti:any
idChecked!:number
disponibility:string=''
colorChecked:string=''
scene!:THREE.Scene
renderer!:THREE.WebGLRenderer
camera!:THREE.PerspectiveCamera
canvas:any
geometry:any
material:any
geometry1:any
material1:any
cube:any
cube1:any
pointLights:any[]=[]
pointLights1:any[]=[]


constructor(private backgroundService:BackgroundService,private itinerariService:ItinerariService,private ngxToast:ToastrService, private prenotazioniService:PrenotazioniService){
  this.backgroundService.bgClass.subscribe((bg:string)=>{
    this.background=bg
  })
}

ngOnInit(): void {
localStorage.setItem('location','itinerari')
this.itinerariService.getAllPaginated().subscribe(
  {
    next:(datas)=>{
 this.pacchetti=datas
 console.log(this.pacchetti)
 this.initScene()

},
error:(err)=>{
this.ngxToast.error(err.message||"Qualcosa è andato storto nel recupero dei pacchetti.")
},
complete:()=>{

}
})
}

calculateReservationbAvailable(pacchettoId:number, posti:number){
if(pacchettoId&&pacchettoId!=0){
  this.prenotazioniService.getByPacchettoId(pacchettoId).subscribe({
    next:(data:any)=>{
this.disponibility= `Sono disponibili ancora ${posti-data.length} posti su ${posti} per questa destinazione.`
this.idChecked=pacchettoId;
let disponibilità=posti-data.length
if(disponibilità<=4){
  this.colorChecked='text-red'
}else{
  this.colorChecked='text-success'
}
},
    error:(err:any)=>{
this.ngxToast.error(err.message||"Qualcosa è andato storto nell'elaborazione della richiesta.")
    },
    complete:()=>{}
  })
}
}
initScene(){
  this.canvas= document.getElementsByClassName('canvas')[0]

this.scene = new THREE.Scene()
this.camera = new THREE.PerspectiveCamera( 75, this.canvas.offsetWidth / this.canvas.offsetHeight, 0.1, 1000 );
this.renderer= new THREE.WebGLRenderer()
this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight );
this.renderer.setClearColor( 0xffffff, .001 );
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
 @HostListener('window:resize', ['$event'])
 onResize(event:any) {

  this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
   this.camera.aspect = this.canvas.offsetWidth/ this.canvas.offsetHeight;
		this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
 }

}
