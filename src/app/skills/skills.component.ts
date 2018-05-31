import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skill: Skill = {
    id: 1,
    name: 'Sql',
    desc: 'Experience in creating SQL queries starts from 2000. Till 2015 it was mostly Oracle SQL. '
      + 'Also worked on MySQL, MSSQL and PostgreSQL.'
  };
  constructor() { }

  ngOnInit() {
  }
}
