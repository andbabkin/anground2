import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = SKILLS;
  selectedSkill: Skill;

  constructor() { }

  ngOnInit() {
  }

  onSelect(s: Skill): void {
    this.selectedSkill = s;
  }
}
