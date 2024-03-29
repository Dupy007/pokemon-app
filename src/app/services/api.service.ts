import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Api = " https://mooc-2f58d-default-rtdb.europe-west1.firebasedatabase.app/";
  constructor(private http:HttpClient) { }
  public postPokemom(pokemon:Pokemon) {
    return this.http.post<PostResponse>(this.Api+"pokemon.json",pokemon)
  }
  public deletePokemom(pokemon:Pokemon) {
    return this.http.delete(this.Api+"pokemon/"+pokemon.id+".json")
  }
  public getPokemom() {
    return this.http.get<GetResponse>(this.Api+"pokemon.json")
  }
}
export interface PostResponse{
  name:string;
}
export interface GetResponse{
  [key:string]:Pokemon;
}