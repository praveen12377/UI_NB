import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-informationtechnology',
  templateUrl: './informationtechnology.component.html',
  styleUrls: ['./informationtechnology.component.css']
})
export class InformationtechnologyComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'description', content: 'Chakravuyha assists the requirements of the public sector, IT service benefactors in state and local government organizations, comprising their wide variety of customers and investors.' });
    this.meta.addTag({ name: 'keywords', content: 'Chakravuyha Information Technology, IT service, IT planning, Trading Platform, Exchange Trading Software, Chakravuyha exchange platform, Blockchain development company, blockchain development services, Blockchain service, Solutions and services, Blockchain Consulting, Blockchain IoT Development, Blockchain application, Virtual Currency, Token Development, blockchain application development company, Regular IT services, Product development, Web-Development service, App development' });
  }

  ngOnInit() {
    this.loadScripts();
    this.title.setTitle('Chakravuyha Information Technology | IT service | IT planning');
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
