import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CollectionsRequest } from '../models/collections-request.models';
import { Observable } from 'rxjs';
import { Collections } from '../models/collections.models';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private http = inject(HttpClient);

  addCollection(collection: CollectionsRequest): Observable<Collections> {
      return this.http.post<Collections>(
        `${environment.collectionUrl}Dresses/`,
        collection
      );
    }

    getCollectionById(collectionId: string): Observable<Collections> {
      return this.http.get<Collections>(
        `${environment.collectionUrl}Dresses/${collectionId}`
      );
    }

    editCollection(collection: Collections): Observable<Collections> {
      return this.http.put<Collections>(
        `${environment.collectionUrl}Dresses/${collection.ItemId}`,
        collection
      );
    }

    getAllCollection(): Observable<Collections[]> {
      return this.http.get<Collections[]>(`${environment.collectionUrl}Dresses/`);
    }

    deleteCollection(collectionId: string): Observable<void> {
      return this.http.delete<void>(
        `${environment.collectionUrl}Dresses/${collectionId}`
      );
    }

}
