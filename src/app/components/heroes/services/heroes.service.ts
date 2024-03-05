import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Hero, Page } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl = 'http://localhost:3000/api/heroes'; // Cambia la URL según la configuración de tu servidor Node.js

  constructor(private http: HttpClient) {}

  getHeroes(
    name: string = '',
    pageIndex: number,
    pageSize: number
  ): Observable<Page<Hero>> {
    const url = `${this.baseUrl}?name=${name}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.http.get<Page<Hero>>(url);
  }

  createHero(
    name: string,
    searchValue: string,
    pageIndex: number,
    pageSize: number
  ): Observable<Page<Hero>> {
    const body = { name };
    return this.http
      .post<Page<Hero>>(this.baseUrl, body)
      .pipe(switchMap(() => this.getHeroes(searchValue, pageIndex, pageSize)));
  }

  updateHero(
    hero: Hero,
    searchValue: string,
    pageIndex: number,
    pageSize: number
  ): Observable<Page<Hero>> {
    const url = `${this.baseUrl}/${hero.id}`;
    return this.http
      .put<Page<Hero>>(url, hero)
      .pipe(switchMap(() => this.getHeroes(searchValue, pageIndex, pageSize)));
  }

  deleteHero(
    id: number,
    searchValue: string,
    pageIndex: number,
    pageSize: number
  ): Observable<Page<Hero>> {
    const url = `${this.baseUrl}/${id}`;
    return this.http
      .delete<Page<Hero>>(url)
      .pipe(switchMap(() => this.getHeroes(searchValue, pageIndex, pageSize)));
  }
}
