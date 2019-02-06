import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../user';
import { Repository } from '../repository';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
username=new User("")
repos=new Repository(0,0,0, 0,new Date(),"","")
  constructor(private http:HttpClient) { 
    this.repos=new Repository(0,0,0, 0,new Date(),"","")
  }
  

  
    check(){interface ApiResponse{
    
    public_repos:number
    public_gists:number
    followers:number
    following:number
    created_at:Date
    html_url:string
    avatar_url:string
}
this.http.get<ApiResponse>("https://api.github.com/users/"+
this.username.username+"?access_token=" +environment.api_key).subscribe((data:any)=>{
    this.repos.public_repos=data.public_repos;
    this.repos.public_gists=data.public_gists;
    this.repos.followers=data.followers;
    this.repos.following=data.following;
    this.repos.created_at=data.created_at;
    this.repos.html_url =data.html_url;
    this.repos.avatar_url=data.avatar_url;
});
console.log(this.repos);
  }
  ngOnInit() {}
}
    
    
    
