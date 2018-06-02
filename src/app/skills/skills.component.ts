import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  selectedSkill: Skill;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe( skills => this.skills = skills );
  }

  onSelect(s: Skill): void {
    this.selectedSkill = s;
  }
}
