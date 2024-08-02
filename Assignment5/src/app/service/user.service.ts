import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, User } from './Result';
import { map, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseURL = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}
  private users$ = new Subject<User[]>();
  userlist$ = this.users$.asObservable();

  getUsers(): Observable<User[]> {
    return this.http.get<Result>(this.baseURL).pipe(
      map((res: Result) => {
        return res.data;
      }),
      tap((users: User[]) => {
        this.users$.next(users);
      })
    );
  }
}
