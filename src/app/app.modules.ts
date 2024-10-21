import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';  // Asegúrate de importar tu componente

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent  // Declara tu componente principal
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MainViewComponent },  // Establece el componente como la vista principal
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]  // El componente principal de arranque
})
export class AppModule { }
