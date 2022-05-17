import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  media$: Observable<MediaChange[]>;


  constructor(media: MediaObserver) {
    this.media$ = media.asObservable().pipe(
      tap(
        event => console.log(event)
      )
    );
  }

  ngOnInit(): void {
  }

}
