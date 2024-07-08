import { Route as ngRoute, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


/**
 * Provides helper methods to create routes.
 */
export class Route {

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return {Route} The new route using shell as the base.
   */
  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      component: LayoutComponent,
      children: routes,
      data: { reuse: true }
    };
  }

}
