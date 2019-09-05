import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable()
export class HomeService {
  private listOfCities = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {  }

  public getCountryName() {
    return this.http.get(`${environment.serverUrl}/country/name`)
      .pipe(
        catchError(err => err.code === 404
          ? throwError('Not found')
          : throwError(err)
        )
      );
  }

  public getCities1(countryIso: string) {
    const options = countryIso ?
      { params: new HttpParams().set('countryISO', countryIso) } : {};
    return this.http.get(`${environment.serverUrl}/country/cities`, options)
      .pipe(
        catchError(err => err.code === 404
          ? throwError('Nor found')
          : throwError(err)
        )
      )
      .subscribe((res: Object[]) => {
        this.listOfCities.next(res);
      })
  }

  public getCities(countryIso: string) {
    const options = countryIso ?
      { params: new HttpParams().set('countryISO', countryIso) } : {};
    return this.http.get(`${environment.serverUrl}/country/cities`, options)
      .pipe(
        catchError(err => err.code === 404
        ? throwError('Nor found')
        : throwError(err)
        )
      )
  }

  public get getListOfCities() {
    return this.listOfCities.asObservable();
  }

}
