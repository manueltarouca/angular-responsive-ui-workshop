import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/fast-models';

@Component({
  selector: 'app-layout-responsive',
  templateUrl: './layout-responsive.component.html',
  styleUrls: ['./layout-responsive.component.scss']
})
export class LayoutResponsiveComponent implements OnInit {

  data: Item[] = [
    {
      imgMobile: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mobile-Smartphone-icon.png",
      img: "https://www.nicepng.com/png/detail/107-1074427_desktop-icon-mail-icon.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: `Curabitur volutpat facilisis magna a molestie. Aenean nulla nisl, ultricies id aliquam sit amet, iaculis at felis.
      Nulla lacus diam, auctor non metus vestibulum, ultrices pretium mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos.Donec suscipit, mauris at volutpat gravida, leo purus ornare massa.`
    },
    {
      imgMobile: "https://www.seekpng.com/png/detail/278-2783353_mobile-mobile-phone-icon-red-png.png",
      img: "https://www.pinclipart.com/picdir/big/558-5580585_hard-working-student-clipart.png",
      title: "Sed lobortis nisl nec mi fermentum, sit amet gravida justo.",
      description: `Donec facilisis, urna accumsan gravida consectetur, neque purus euismod turpis, vel ultrices neque velit at eros.
      Cras vehicula, mauris in sollicitudin egestas, felis diam mattis justo, eget consectetur libero sapien a tortor.
      Phasellus eget arcu felis. Duis sed justo turpis. Pellentesque consequat accumsan erat dictum fermentum. Proin nunc sem, scelerisque.`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
