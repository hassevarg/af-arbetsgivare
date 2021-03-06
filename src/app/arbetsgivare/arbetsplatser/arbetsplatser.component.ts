import { Component, OnInit } from '@angular/core';

import {StateService} from '../../services/state.service';

import {Organisation} from '../../model/organisation';
import {ArbetsplatsMini} from '../../model/arbetsplatsmini';

@Component({
  selector: 'app-arbetsplatser',
  templateUrl: './arbetsplatser.component.html',
  styleUrls: ['./arbetsplatser.component.css']
})
export class ArbetsplatserComponent implements OnInit {
  organisation: Organisation = new Organisation();
  errorMessage: string;
  private buttonTextExpand = 'Organisation-arbetsplatser - VISA';
  private buttonTextCollapse = 'Organisation-arbetsplatser - DÖLJ';
  public isCollapsed = false;
  public buttonText = this.buttonTextCollapse;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.organisation.subscribe(res => this.organisation = res);
    this.state.errorMessageArbetsplats.subscribe(res => this.errorMessage = res);
  }

  onClick(arbetsplatsMini: ArbetsplatsMini) {
    console.log('klickad arbetsplats: ' + arbetsplatsMini.namn);
    this.state.loadArbetsplats(arbetsplatsMini.kundnr);
  }

  toggle() {
    if (this.isCollapsed) {
      this.buttonText = this.buttonTextCollapse;
      this.isCollapsed = false;
    } else {
      this.buttonText = this.buttonTextExpand;
      this.isCollapsed = true;
    }
  }
}
