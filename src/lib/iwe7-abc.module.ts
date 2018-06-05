import { AbcSpaceComponent } from './abc-space/abc-space';
import { AbcBlankComponent } from './abc-blank/abc-blank';
import { AbcLineComponent } from './abc-line/abc-line';
import { NgModule } from "@angular/core";

export const AbcComponents = [
  AbcLineComponent,
  AbcBlankComponent,
  AbcSpaceComponent
];

@NgModule({
  declarations: [
    ...AbcComponents
  ],
  exports: [
    ...AbcComponents
  ]
})
export class Iwe7AbcModule {}
