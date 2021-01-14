import { User } from './user.model';
import { Profiles } from './profiles.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost/provaAPI/api';                                 //da modificare in base al path (cartella htdocs XAMPP)
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${this.url}/register`, user);
  }

  login(credentials: User): Observable<string> {
    return this.http.post<{ token: string }>(`${this.url}/login`, credentials).pipe(
      map(response => response.token)
    );
  }
  

  getAllProfiles() {
    return this.http.get<[Profiles]>(`${this.url}/profili`);
  }

  getProfile(id_profiles: Profiles) {
    return this.http.get<Profiles>(`${this.url}/profili` + "/" + id_profiles);
  }

  createProfile(profile: Profiles){
    return this.http.post(`${this.url}/profili`, profile);
  }

  updateProfile(profile: Profiles, id_profiles: string){
    return this.http.put(`${this.url}/profili` + "/" + id_profiles, profile);
  }

  deleteProfile(id_profiles: string){
    return this.http.delete(`${this.url}/profili` + "/" + id_profiles);
  }
}

