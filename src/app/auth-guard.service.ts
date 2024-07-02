import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';
import { AuthService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  // authService:AuthService= inject(AuthService);
  constructor(private route: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
   {
    if(this.authService.isLoggedIn())
      {
        return true;
        
      }
      else
      {
        alert("galt login hh ");
        this.route.navigate(['/login']);
        return false;

      }
  }
}
