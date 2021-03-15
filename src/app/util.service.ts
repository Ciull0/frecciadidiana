import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private cachedContent = [];

  constructor(
    private http: HttpClient
  ) { }


  getContent(content:string){

    let address = "assets/content/"+content+".json";
    console.log(address);
    return new Promise( (resolve, reject) =>{

      //checks if element is cached

      for(let page of this.cachedContent ){
        if(page.id == content){
          resolve(page);
        }
      }

      //if not cached, loads it anche caches it

      this.http.get(address).subscribe(
        (success:any)=>{
          this.cachedContent.push(success);
          resolve(success);
        }, (error:any)=>{
          reject(error);
        }
      )
    })
  }
}
