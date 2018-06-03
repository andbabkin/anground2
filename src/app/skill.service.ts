import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from './skill';
import { SKILLS } from './mock-skills';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private messageService: MessageService) { }

  getSkills(): Observable<Skill[]> {
    this.messageService.add('SkillService: fetched skills');
    return of(SKILLS);
  }

  getSkill(id: number): Observable<Skill> {
    this.messageService.add(`SkillService: fetched skill id=${id}`);
    return of(SKILLS.find(skill => skill.id === id));
  }
}
