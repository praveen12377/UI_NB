import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-businessoutsourcing',
  templateUrl: './businessoutsourcing.component.html',
  styleUrls: ['./businessoutsourcing.component.css']
})
export class BusinessoutsourcingComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'description', content: 'Business Outsourcing Services is a complete stack software development company containing skilled and experienced IT experts determined by the passion for invention and revolutionary technologies.' });
    this.meta.addTag({ name: 'keywords', content: 'Chakravuyha Business Outsourcing Services, Business Outsourcing, Blockchain development company, blockchain development services, Blockchain service, Blockchain Solutions and services, Blockchain Consulting, Blockchain IoT Development, Blockchain application, Virtual Currency, Token Development, blockchain application development company, Regular IT services, Product development, Web-Development service, App development' });
  }

  ngOnInit() {
    this.loadScripts();
    this.title.setTitle('Chakravuyha Business Outsourcing Services | Business Outsourcing');
  }

  loadScripts() {
    const dynamicScripts = [
      '../assets/js/anim.js'
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
