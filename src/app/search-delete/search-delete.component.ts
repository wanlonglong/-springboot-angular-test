import { Component, OnInit } from '@angular/core';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  email:string;

  constructor(private service:UserRegService) { }

  public delteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }
   
   public findUserByEmailId(){
     let resp= this.service.getUserByEmail(this.email);
     resp.subscribe((data)=>this.users=data);
    }

  ngOnInit(): void {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
