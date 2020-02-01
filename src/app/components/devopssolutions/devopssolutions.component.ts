import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-devopssolutions',
  templateUrl: './devopssolutions.component.html',
  styleUrls: ['./devopssolutions.component.css']
})
export class DevopssolutionsComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'description', content: 'Chakravuyha, the keen data testing solution which programs data authentication and testing of critical data is the first-of-its-kind full DevOps solution for constant data testing.' });
    this.meta.addTag({ name: 'keywords', content: 'Chakravuyha DevOps Solutions, DevOps engineers, DevOps Solutions Services, Blockchain development company, blockchain development services, Blockchain service, Blockchain Solutions and services, Blockchain Consulting, Blockchain IoT Development, Blockchain application, Virtual Currency, Token Development, blockchain application development company, Regular IT services, Product development, Web-Development service, App development' });
  }

  ngOnInit() {
    this.loadScripts();
    this.title.setTitle('Chakravuyha DevOps Solutions | DevOps engineers | DevOps Solutions Services');
  }

  loadScripts() {
    const dynamicScripts = [
      '../assets/js/anim.js',
      '../assets/js/script.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }

  }

}
