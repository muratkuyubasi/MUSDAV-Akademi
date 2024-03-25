import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class StorageService{
    private storageSub= new Subject<String>();

    watchStorage(): Observable<any> {
        return this.storageSub.asObservable();
      }
    
      setItem(key: string, data: any) {
        localStorage.setItem(key, data.toLowerCase());
        this.storageSub.next(data);
      }
    
      removeItem(key) {
        localStorage.removeItem(key);
        this.storageSub.next('changed');
      }

      getItem(key){
        return localStorage.getItem(key);

      }
}