import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mobileapplications',
  templateUrl: './mobileapplications.component.html',
  styleUrls: ['./mobileapplications.component.css']
})
export class MobileapplicationsComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({ name: 'description', content: 'From startups to huge scale businesses, every person is reliant on mobile applications for the strengthening of their trademark, to raise its reflectivity, availability, as well as for continuous development, among other things.' });
    this.meta.addTag({ name: 'keywords', content: 'Mobile Application Development Company, Mobile Based Applications, Chakravuyha Information Technology, IT service, IT planning, Trading Platform, Exchange Trading Software, Chakravuyha exchange platform, Blockchain development company, blockchain development services, Blockchain service, Solutions and services, Blockchain Consulting, Blockchain IoT Development, Blockchain application, Virtual Currency, Token Development, blockchain application development company, Regular IT services, Product development, Web-Development service, App development' });
  }

  ngOnInit() {
    this.loadScripts();
    this.title.setTitle('Mobile Application Development Company | Mobile Based Applications');
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
