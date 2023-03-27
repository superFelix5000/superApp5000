import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Data,
    DetachedRouteHandle,
    RouteReuseStrategy,
} from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class PhotoBrowserRouteReuseStrategy implements RouteReuseStrategy {
    private routeStore = new Map<string, DetachedRouteHandle>();
    private readonly reuseComponent = 'reuseComponent';

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return this.isReuseRoute(route.data);
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.routeStore.set(this.reuseComponent, handle);
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return (
            this.isReuseRoute(route.data) &&
            !!this.routeStore.get(this.reuseComponent)
        );
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        return this.routeStore.get(this.reuseComponent)!;
    }

    shouldReuseRoute(
        future: ActivatedRouteSnapshot,
        curr: ActivatedRouteSnapshot
    ): boolean {
        return future.routeConfig === curr.routeConfig;
    }

    private isReuseRoute(data: Data) {
        return data ? data['reuse'] : false;
    }
}
