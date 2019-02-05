import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../pro/profile.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  providers:[ProfileService],
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
