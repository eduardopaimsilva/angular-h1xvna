import{Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<h1>hello {{name}}!<h1>',
  styles: ['h1 { font-family: Lato;}']
})
export class HelloComponet {
  @Input() name: string;
}