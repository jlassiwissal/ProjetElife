import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriService } from '../inscri.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  
  inscriForm: FormGroup; 

  constructor (private inscriService: InscriService, private builder: FormBuilder, private router: Router ){
    this.inscriForm= this.builder.group({
      "nom":[],
      "prenom":[],
      "mail":[],
      "username":[],
      "password":[],
      "role":['ADMIN']
    })
  }
  ngOnInit(): void {
    
  }
  inscri(){
    this.inscriService.inscriUser (this.inscriForm.value).subscribe(resultat=>{
       console.log('user created',resultat);
       if(resultat!=null){
         this.router.navigate(['/home']);
       }
       else{
         alert('verifie your password  ');
       }
       
     })
   }
   }




