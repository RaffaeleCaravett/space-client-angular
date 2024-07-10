import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BackgroundService } from 'src/app/shared/services/background-service';
import * as THREE from 'three'
@Component({
  selector: 'app-auth-forms',
  templateUrl: './auth-forms.component.html',
  styleUrls: ['./auth-forms.component.scss']
})
export class AuthFormsComponent  implements OnInit{

section:string=''
loginForm!:FormGroup
signupForm!:FormGroup
loginFormError:string=''
signupFormError:string=''
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
background:string =''
constructor(private authService:AuthService,private router:Router,private backgroundService:BackgroundService){
  this.backgroundService.bgClass.subscribe((bg:string)=>{
    this.background=bg
  })
}


ngOnInit(): void {
    this.section='login'

this.loginForm= new FormGroup({
  email:new FormControl('', [Validators.required]),
  password: new FormControl('',[Validators.required])
})

this.signupForm = new FormGroup({
  email:new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  nome: new FormControl('',Validators.required),
  cognome: new FormControl('',Validators.required),
  eta: new FormControl('',[Validators.required,Validators.min(18)])
})
this.initScene()
}

logIn(){
if(this.loginForm.valid && this.loginForm.controls['email'].value!='raffaelecaravetta13@gmail.com'){
this.authService.logIn
(
  {
    email:this.loginForm.controls['email'].value,
    password:this.loginForm.controls['password'].value
  }
).subscribe({
  next:(success:any)=>{
localStorage.setItem('accessTokenSpaceUser',success.tokens.accessToken)
localStorage.setItem('refreshTokenSpaceUser',success.tokens.refreshToken)
this.authService.verifyToken(success.tokens.accessToken).subscribe({
  next:(res:any)=>{
if(res&&res.role=='ADMIN'){
 this.loginFormError="Dovresti usare un'email diversa da quella dell'admin."
 localStorage.clear()
 this.loginForm.reset()
}else{
  this.loginFormError=""
  this.authService.authenticateUser(true)
  this.router.navigate(['/itinerari'])
}
  },
  error:(err)=>{

  },
  complete:()=>{

  }
})


  },
  error:(error:any)=>{
this.loginFormError="Qualcosa è successo nell'invio della richiesta."
if(error&&error.error.message){
  this.loginFormError=error.error.message
}else if(error&&error.error.messageList){
  this.loginFormError=error.error.messageList[0]
}
  },
  complete:()=>{

  }
}
)
}else{
  if(this.loginForm.controls['email'].value=='raffaelecaravetta13@gmail.com'){
    this.loginFormError="Dovresti usare un'email diversa da quella dell'admin."
  }
}
}

signUp(){
  if(this.signupForm.valid){
  this.authService.signUp
  (
    {
      email:this.signupForm.controls['email'].value,
      password:this.signupForm.controls['password'].value,
      nome:this.signupForm.controls['nome'].value,
      cognome:this.signupForm.controls['cognome'].value,
      eta:this.signupForm.controls['eta'].value
    }
  ).subscribe({
    next:(success:any)=>{
  console.log(success)
  this.signupFormError=""
  this.section='login'
    },
    error:(error:any)=>{
  this.signupFormError="Qualcosa è successo nell'invio della richiesta."
  if(error&&error.error.message){
    this.signupFormError=error.error.message
  }else if (error&&error.error.messageList){
    this.signupFormError=error.error.messageList[0]
  }
    },
    complete:()=>{

    }
  }
  )
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

}
