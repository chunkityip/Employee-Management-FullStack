import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistationService {

  private baseUrl = 'http://localhost:9090';

  constructor(private http:HttpClient) { }


  // For User controller
  createUser(user: UserDto): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/register`, user);
}

  updatePassword(username: string, newPassword: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/users/${username}/password`, newPassword);
  }

  validateUser(user: UserDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/users/validate`, user);
  }

  // For Employee controller
  createEmployee(employee: EmployeeDto): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/employees`, employee);
  }

  updateEmployee(employee: EmployeeDto): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/employees`, employee);
  }

  deleteEmployee(email: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/employees/${email}`);
  }

  findByEmail(email: string): Observable<EmployeeDto> {
    return this.http.get<EmployeeDto>(`${this.baseUrl}/employees/${email}`);
  }

  searchByFirstname(firstname: string): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(`${this.baseUrl}/employees/search/firstname/${firstname}`);
  }

  findByExperience(experience: number): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(`${this.baseUrl}/employees/search/experience/${experience}`);
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/employees/exists/${email}`);
  }
}