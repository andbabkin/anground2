import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Skills';
  themes = ['default', 'alt1', 'alt2', 'alt3'];
  @HostBinding('class') componentCssClass;

  constructor(public overlayContainer: OverlayContainer) {}

  onClickTheme(theme) {
    this.setTheme(theme);
  }

  private setTheme(theme) {
    this.componentCssClass = theme.toLowerCase() + '-theme';
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(this.componentCssClass);
  }
}
