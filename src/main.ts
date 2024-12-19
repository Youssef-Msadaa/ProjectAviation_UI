import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';



import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configures the router with your app's routes
    provideHttpClient(withInterceptorsFromDi()), // Configures HttpClient with DI and interceptors
     // Add BrowserAnimationsModule to enable Angular animations
    ...appConfig.providers, provideAnimationsAsync(), // Spread the providers from appConfig if needed
  ],
}).catch((err) => console.error(err));
