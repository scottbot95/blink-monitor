import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { WebviewDirective } from './webview.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [WebviewDirective],
  exports: [CommonModule, MaterialModule, WebviewDirective, TranslateModule]
})
export class SharedModule {}
