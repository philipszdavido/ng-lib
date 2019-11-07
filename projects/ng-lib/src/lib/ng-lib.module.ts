import { NgModule } from '@angular/core';
import { NgLibComponent } from './ng-lib.component';
import { CountdownComponent } from './countdown/countdown.component';



@NgModule({
  declarations: [NgLibComponent, CountdownComponent],
  imports: [
  ],
  exports: [NgLibComponent,CountdownComponent]
})
export class NgLibModule { }
