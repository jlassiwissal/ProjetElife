import { Component , OnInit} from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private builder: FormBuilder, private router: Router){
    this.loginForm= this.builder.group({
      "username":[],
	    "password":[]
    })
  }



  ngOnInit(): void {
  }

  login(){
   this.loginService.loginUser(this.loginForm.value).subscribe(resultat=>{
      console.log('user connected',resultat);
      if(resultat!=null){
        this.router.navigate(['/home']);
      }
      else{
        alert('verifier vos donnees');
      }
      
    })
  }

}
