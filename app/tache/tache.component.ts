import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTacheService } from '../add-tache.service';
import { AddMembreService } from '../add-membre.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent  implements OnInit{
  addForm: FormGroup;
  membreList:any[]=[];

  constructor (private membreservice: AddMembreService,private addTacheService: AddTacheService, private builder: FormBuilder, private router: Router ){
    this.addForm= this.builder.group({
      "titre":[],
      "description":[],
      "statuts":[],
     "attributionDate":[]
    })

}  ngOnInit(): void {
  this.membreservice.getAllMembre().subscribe(res=>{
    console.log(res);
    this.membreList= res;
  })
   
  }
  addTache(){
    this.addTacheService.AddTache (this.addForm.value).subscribe(resultat=>{
       console.log('user created',resultat);
       if(resultat!=null){
         this.router.navigate(['/home']);
       }
       
     })
   }
}

