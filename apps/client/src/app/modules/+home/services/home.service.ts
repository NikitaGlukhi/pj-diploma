import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {  }

  public getContryName() {
    return this.http.get('http://localhost:3000/country/name')
      .pipe(
        catchError(err => err.code === 404
          ? throwError('Not found')
          : throwError(err)
        )
      );
  }
}
