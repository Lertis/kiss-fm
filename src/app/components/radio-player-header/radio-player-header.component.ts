import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-radio-player-header',
  templateUrl: './radio-player-header.component.html',
  styleUrls: ['./radio-player-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioPlayerHeaderComponent { }
