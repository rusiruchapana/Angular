import { Component , signal } from '@angular/core';
import {GreetingComponent} from '../greeting/greeting.component';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import {CounterComponent} from '../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [
    GreetingComponent,
    CounterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    title = signal<string>("Parent title is work.")

  onKeyPressed(event: KeyboardEvent) {
    console.log("Key pressed" , event.key);
  }
}
