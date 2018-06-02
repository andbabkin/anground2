import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
