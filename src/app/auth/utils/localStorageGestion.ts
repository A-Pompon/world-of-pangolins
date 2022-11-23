import { HttpHeaders } from "@angular/common/http";

    export function getHeader() {
        var  httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
          
        return httpOptions;
    };

    export function getHeaderToken() {
       var  httpOptionsUpdate = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': localStorage.getItem("Token")! }),
          };
          
          return httpOptionsUpdate;
    }
