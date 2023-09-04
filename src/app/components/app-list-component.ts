import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-component',
  template: `
    <div
      class="listElement"
      style="display: flex; margin-bottom: -5px; margin-top: -5px"
    >
      <img src="assets/images/icon-list.svg" style="margin-right: 15px;" />
      <p>{{ text }}</p>
    </div>
  `,
})
export class AppListComponent {
  @Input() text: string = '';
}
