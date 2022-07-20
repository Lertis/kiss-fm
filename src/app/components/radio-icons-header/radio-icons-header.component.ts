import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'radio-radio-icons-header',
  templateUrl: './radio-icons-header.component.html',
  styleUrls: ['./radio-icons-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioIconsHeaderComponent {
  readonly radios = [
    { name: 'Kiss Fm', path: './assets/icons/radio-stations/kissfm_logo.png' },
    { name: 'Radio Rocks', path: './assets/icons/radio-stations/roks_logo.png' },
    { name: 'Classic', path: './assets/icons/radio-stations/classicradio.png' },
    { name: 'Гуляй радіо', path: './assets/icons/radio-stations/guliayradio.png' },
    { name: 'Hit FM', path: './assets/icons/radio-stations/hitfm_logo.png' },
    { name: 'Мелодія радіо', path: './assets/icons/radio-stations/melodia_logo.png' },
    { name: 'Наше радіо', path: './assets/icons/radio-stations/nasheradio_logo_top.png' },
    { name: 'Байрактар радіо', path: './assets/icons/radio-stations/radiobayraktar.png' },
    { name: 'Jazz radio', path: './assets/icons/radio-stations/radiojazz_top_logo.png' },
    { name: 'Relax radio', path: './assets/icons/radio-stations/relax_logo.png' }
  ]
}
