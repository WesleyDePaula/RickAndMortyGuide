import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  display;

  visibleSidebar1;

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  goBack(){
    this.router.navigate(['..'], {relativeTo: this.activatedRoute})
  }

}
