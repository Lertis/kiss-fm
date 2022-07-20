import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'radio-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainWrapperComponent {}
