
@Injectable({
  providedIn: 'root'
})
export class ConfirmationResolverService implements Resolve<any> {
  FIRSTrequest$;
  SECONDrequest$;
  THIRDrequest$;

  constructor(public loader: LoaderService){ 
    this.loader.setLoaderStatus(true); 
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
  
    // STEP 1. 
    return this.FIRSTrequest$.pipe(
  
      // STEP 2. WAIT untill the 1st request succeed, then make a 2nd request
      concatMap(FIRSTresponse => this.SECONDrequest$),
      tap(
        // here we need to check if we received docPackages from the SECOND response
        // if yes: go to 3rd step to make a 3rd request
        // if no: repeat the same SECONDrequest$ call and check again
        // retry 100 times, and if still no docPackages available exit resolver by going to the error page (see catch error below)
        if (SECONDresponse.data.docPackages == []) {
          of(response);
        }
      ),
      retryWhen(errors => errors.pipe( // retry ONLY SECONDrequest$ in case of error returned from backend
        delay(3 * 1000), // retry every 3 seconds
        take(100) // retry 100 times
      ))
  
      // STEP 3. WAIT untill the 2nd request succeed, then make a 3rd request
      concatMap(SECONDresponse => this.THIRDrequest$),
      tap(THIRDresponse => {
        this.shoppingCart.setData(THIRDresponse['data']);  // set data 
        this.loader.setLoaderStatus(false);   // turn off loader on the page
        return ...;  // exit resolver successfully
      }),
    )
  
    // if ANY of 3 requests fails handle error here
    catchError(error => { 
      return this.handleCriticalError(error);  // error handler already implemented
    })
  
  }
  
