import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-slot',
  templateUrl: './multiple-slot.component.html'
})
export class MultipleSlotComponent {
  visible = true;

  constructor() { }

  text() {
    if (this.visible) {
      return 'Close';
    } else {
      return 'Open';
    }
  }

  close() {
    this.visible = !this.visible;
  }

}
