import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';


@Injectable({providedIn:  'root'})
export class CategoryService {
    baseUrl: string = "https://mystoreapi.com/catalog/categories";
    categories: Category[] = [];

    constructor(private httpClient: HttpClient) {

    }

    getCategories(): Observable<Category[]> {
        const result = this.httpClient.get<Category[]>(this.baseUrl);
        return result;
    }

}