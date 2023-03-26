import {
    ActivatedRouteSnapshot,
    DetachedRouteHandle,
    RouteReuseStrategy,
} from '@angular/router';
import { PhotogridComponent } from '../components/photogrid/photogrid.component';

export class PhotoBrowserRouteReuseStrategy implements RouteReuseStrategy {
    private routeStore = new Map<string, DetachedRouteHandle>();
    private reuseComponentName = 'PhotogridComponent';

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        const shouldDetach = route.component!.name === this.reuseComponentName;
        return shouldDetach;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.routeStore.set(route.component!.name!, handle);
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const shouldAttach = route.component?.name === this.reuseComponentName;
        return shouldAttach && !!this.routeStore.get(route.component!.name);
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        const name = route.component!.name;
        return this.routeStore.get(name)!;
    }

    shouldReuseRoute(
        future: ActivatedRouteSnapshot,
        curr: ActivatedRouteSnapshot
    ): boolean {
        return future.routeConfig === curr.routeConfig;
    }
}
