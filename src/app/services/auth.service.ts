import { inject, Injectable } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);
  authState$ = authState(this.auth);

  constructor() { }

  loginWithUser(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider);
  }

  logout() {
    signOut(this.auth);
  }
}
