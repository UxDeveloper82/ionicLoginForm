import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.page.html',
  styleUrls: ['./member-list.page.scss'],
})
export class MemberListPage implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MembersService) { }

  ngOnInit() {
    this.loadMembers();
  }

  async loadMembers() {
     this.memberService.getMembers().subscribe((res) => {
         this.members = res;
     });
  }

}
