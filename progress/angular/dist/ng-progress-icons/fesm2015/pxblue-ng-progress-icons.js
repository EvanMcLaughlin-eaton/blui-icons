import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgProgressIconsService {
    constructor() { }
}
NgProgressIconsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgProgressIconsService.ctorParameters = () => [];
/** @nocollapse */ NgProgressIconsService.ngInjectableDef = defineInjectable({ factory: function NgProgressIconsService_Factory() { return new NgProgressIconsService(); }, token: NgProgressIconsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgProgressIconsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgProgressIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'progress-ng-progress-icons',
                template: `
    <p>
      ng-progress-icons works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
NgProgressIconsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
const getCoordinates = (/**
 * @param {?} percent
 * @param {?=} radius
 * @return {?}
 */
function (percent, radius = 12) {
    return {
        x: radius + (radius * Math.cos((percent / 100) * 2 * Math.PI)),
        y: radius + (radius * Math.sin((percent / 100) * 2 * Math.PI))
    };
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BatteryComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
        this.charging = false;
        this.outlined = false;
        this.basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
        this.chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
        this.singletonePath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
        this.baseID = 'pxb-battery-clip';
        this.chargeID = 'pxb-battery-clip-charge';
        this.rv = rangeValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getBasepath() {
        return (this.outlined ? this.singletonePath : this.basePath);
    }
    /**
     * @return {?}
     */
    getClipPath() {
        return (this.charging ? this.chargePath : this.basePath);
    }
    /**
     * @return {?}
     */
    getID() {
        return (this.charging ? this.chargeID : this.baseID);
    }
}
BatteryComponent.decorators = [
    { type: Component, args: [{
                selector: 'battery-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> 
    
    <defs>
      <mask id="hole">
        <rect width="100%" height="100%" fill="white" />
        <polygon fill="black" points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 " />
      </mask>
      <mask id="test">
        <rect width="100%" height="100%" fill="white" />
        <rect x="2" y="7" fill="black"  [attr.width]="rv(percent/100*18, 0, 100)" height="10" />
      </mask>
    </defs>
    <path [attr.fill]="color || 'currentColor'"  [attr.fill-opacity]="(outlined || percent >= 100) ? '1' : '0.3'" [attr.clip-path]="'url(#' + getID() + ')'" [attr.d]="getBasepath()"/>
      <clipPath [id]="getID()">
        <path overflow="visible" [attr.d]="getClipPath()"/>
      </clipPath>
      <g *ngIf = "percent > 0" [attr.fill]= "color || 'currentColor'">
      <rect [attr.fill]="color || 'currentColor'" x="2" y="7" [attr.clip-path]="'url(#' + getID() + ')'" [attr.width]="rv(percent/100*18, 0, 100)" height="10"  mask="outlined && charging ? url(#hole) : null"/>
      <polygon  *ngIf = "outlined && charging" points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13" mask="url(#test)" />
      </g>
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color', 'charging', 'outlined']
            },] },
];
/** @nocollapse */
BatteryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeartComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
        this.outlined = false;
        this.basePath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
        this.singletonePath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
        this.rv = rangeValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getPath() {
        return (this.outlined ? this.singletonePath : this.basePath);
    }
}
HeartComponent.decorators = [
    { type: Component, args: [{
                selector: 'heart-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path [attr.fill]="color || 'currentColor'" [attr.fill-opacity]="(outlined || percent >= 100) ? '1' : '0.3'" [attr.d]="getPath()"/>
      <clipPath id="pxb-heart-clip">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </clipPath>
      <rect [attr.fill]="color || 'currentColor'" clip-path="url(#pxb-heart-clip)" x="2" [attr.y]="21.35-(rv(percent,0,100))*18.35/100" width="20" height="20" />
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color', 'outlined']
            },] },
];
/** @nocollapse */
HeartComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PieComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
        this.ring = 10;
        this.outlined = false;
        this.iconStroke = 2;
        // Ring properties
        this.centerX = 12;
        this.centerY = 12;
        // Outer ring
        this.outerRadiusLarge = 10;
    }
    /**
     * @return {?}
     */
    getPath() {
        return `M 12,12 H 24 A 12,12,0,${this.percent >= 50 ? 1 : 0},1,${getCoordinates(this.percent)['x']},${getCoordinates(this.percent)['y']}Z`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
        this.innerRadiusLarge = 10 - this.iconStroke;
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }
        this.outlineBase = `
  M ${this.centerX} ${this.centerY - this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY - this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY + this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY - this.innerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY - this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusSmall}
  Z
  M ${this.centerX} ${this.centerY - this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY + this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY - this.innerRadiusSmall}
  Z
`;
        this.twoToneBase = `
M ${this.centerX} ${this.centerY - this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusLarge}
Z
`;
        this.clipPath = `
M12,2
A10,10,0,1,0,22,12,
10,10,0,0,0,12,2
Z
m0,${20 - this.stroke} 
A ${10 - this.stroke},${10 - this.stroke},0,1,1,${22 - this.stroke},12,
${10 - this.stroke},${10 - this.stroke},0,0,1,12,${22 - this.stroke}
Z
`;
    }
}
PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'pie-progress',
                template: `
    <svg [attr.height]="size+'px'" 
    [attr.width]="size+'px'" 
    x="0px" y="0px" 
    viewBox="0 0 24 24" 
    style="transform: rotate(-.25turn)">

      <clipPath [attr.id]="'pxb-donut-clip-'+stroke">
        <path [attr.d]="clipPath"/>
      </clipPath>
      <path [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'"
      [attr.fill]="color || 'currentColor'" 
      [attr.fill-opacity]="outlined || percent >= 100 ? '1' : '0.3'"
      [attr.d]="outlined ? outlineBase : twoToneBase"
    />
    <path *ngIf="percent > 0 && percent < 100" 
    [attr.fill]="color || 'currentColor'" 
    [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" 
    [attr.d]= "getPath()"  />

      <circle *ngIf="percent === 100 && outlined" [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" cx="12" cy="12" r="10" [attr.fill]="color || 'currentColor'"></circle>
      
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color', 'ring', 'outlined']
            },] },
];
/** @nocollapse */
PieComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgProgressIconsModule {
}
NgProgressIconsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [NgProgressIconsComponent, BatteryComponent, HeartComponent, PieComponent],
                exports: [
                    NgProgressIconsComponent,
                    BatteryComponent, HeartComponent, PieComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgProgressIconsService, NgProgressIconsComponent, NgProgressIconsModule, BatteryComponent, HeartComponent, PieComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHhibHVlLW5nLXByb2dyZXNzLWljb25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9uZy1wcm9ncmVzcy1pY29ucy5zZXJ2aWNlLnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9uZy1wcm9ncmVzcy1pY29ucy5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL3V0aWxpdGllcy50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvYmF0dGVyeS9iYXR0ZXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvaGVhcnQvaGVhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9waWUvcGllLmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvbmctcHJvZ3Jlc3MtaWNvbnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdQcm9ncmVzc0ljb25zU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLW5nLXByb2dyZXNzLWljb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nLXByb2dyZXNzLWljb25zIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiZXhwb3J0IGNvbnN0IHJhbmdlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4odmFsdWUsbWF4KSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvb3JkaW5hdGVzID0gZnVuY3Rpb24ocGVyY2VudCwgcmFkaXVzID0gMTIpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLmNvcyggKHBlcmNlbnQvMTAwKSAqIDIqTWF0aC5QSSkgKSxcbiAgICAgICAgeTogcmFkaXVzICsgKHJhZGl1cyAqIE1hdGguc2luKCAocGVyY2VudC8xMDApICogMipNYXRoLlBJKSApXG4gICAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmF0dGVyeS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+IFxuICAgIFxuICAgIDxkZWZzPlxuICAgICAgPG1hc2sgaWQ9XCJob2xlXCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8cG9seWdvbiBmaWxsPVwiYmxhY2tcIiBwb2ludHM9XCIxMS41LDEzIDExLjUsMTUgNCwxMSA5LjUsMTEgOS41LDkgMTcsMTMgXCIgLz5cbiAgICAgIDwvbWFzaz5cbiAgICAgIDxtYXNrIGlkPVwidGVzdFwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHJlY3QgeD1cIjJcIiB5PVwiN1wiIGZpbGw9XCJibGFja1wiICBbYXR0ci53aWR0aF09XCJydihwZXJjZW50LzEwMCoxOCwgMCwgMTAwKVwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICAgIDwvbWFzaz5cbiAgICA8L2RlZnM+XG4gICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiICBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIuZF09XCJnZXRCYXNlcGF0aCgpXCIvPlxuICAgICAgPGNsaXBQYXRoIFtpZF09XCJnZXRJRCgpXCI+XG4gICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIFthdHRyLmRdPVwiZ2V0Q2xpcFBhdGgoKVwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8ZyAqbmdJZiA9IFwicGVyY2VudCA+IDBcIiBbYXR0ci5maWxsXT0gXCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiPlxuICAgICAgPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIHg9XCIyXCIgeT1cIjdcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjJyArIGdldElEKCkgKyAnKSdcIiBbYXR0ci53aWR0aF09XCJydihwZXJjZW50LzEwMCoxOCwgMCwgMTAwKVwiIGhlaWdodD1cIjEwXCIgIG1hc2s9XCJvdXRsaW5lZCAmJiBjaGFyZ2luZyA/IHVybCgjaG9sZSkgOiBudWxsXCIvPlxuICAgICAgPHBvbHlnb24gICpuZ0lmID0gXCJvdXRsaW5lZCAmJiBjaGFyZ2luZ1wiIHBvaW50cz1cIjExLjUsMTMgMTEuNSwxNSA0LDExIDkuNSwxMSA5LjUsOSAxNywxM1wiIG1hc2s9XCJ1cmwoI3Rlc3QpXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdjaGFyZ2luZycsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50Om51bWJlciA9IDEwMDtcbiAgc2l6ZTpudW1iZXIgPSAyNDtcbiAgY29sb3I6c3RyaW5nO1xuICBjaGFyZ2luZzpib29sZWFuID0gZmFsc2U7XG4gIG91dGxpbmVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBiYXNlUGF0aCA9ICdNMjAsMTBWOC4zQzIwLDcuNiwxOS40LDcsMTguNyw3SDMuM0MyLjYsNywyLDcuNiwyLDguM3Y3LjNDMiwxNi40LDIuNiwxNywzLjMsMTdoMTUuM2MwLjcsMCwxLjMtMC42LDEuMy0xLjNWMTRoMnYtNEgyMHonO1xuICBjaGFyZ2VQYXRoID0gJ00yMCwxMFY4LjMzYTEuMzE5LDEuMzE5LDAsMCwwLTEtMS4yNjNBMS4yNTcsMS4yNTcsMCwwLDAsMTguNjcsN0gzLjM0QTEuMzM4LDEuMzM4LDAsMCwwLDIsOC4zM3Y3LjMzQTEuMzM4LDEuMzM4LDAsMCwwLDMuMzMsMTdIMTguNjdhMS4yNTcsMS4yNTcsMCwwLDAsLjMzLS4wNjcsMS4zMTksMS4zMTksMCwwLDAsMS0xLjI2M1YxNGgyVjEwWm0tOC41LDN2Mkw0LDExSDkuNVY5TDE3LDEzWic7XG4gIHNpbmdsZXRvbmVQYXRoID0gJ00xOCw5djZINFY5SDE4bS43LTJIMy4zQTEuMzI0LDEuMzI0LDAsMCwwLDIsOC4zdjcuM0ExLjM0NywxLjM0NywwLDAsMCwzLjMsMTdIMTguNmExLjMyNCwxLjMyNCwwLDAsMCwxLjMtMS4zVjE0aDJWMTBIMjBWOC4zQTEuMzI0LDEuMzI0LDAsMCwwLDE4LjcsN1onO1xuICBiYXNlSUQgPSAncHhiLWJhdHRlcnktY2xpcCc7XG4gIGNoYXJnZUlEID0gJ3B4Yi1iYXR0ZXJ5LWNsaXAtY2hhcmdlJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIFxuXG4gIGdldEJhc2VwYXRoKCl7XG4gICAgcmV0dXJuICh0aGlzLm91dGxpbmVkID8gdGhpcy5zaW5nbGV0b25lUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIGdldENsaXBQYXRoKCl7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0SUQoKXtcbiAgICByZXR1cm4gKHRoaXMuY2hhcmdpbmcgPyB0aGlzLmNoYXJnZUlEIDogdGhpcy5iYXNlSUQpO1xuICB9XG5cbiAgcnYgPSByYW5nZVZhbHVlO1xuXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFydC1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICA8cGF0aCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIihvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCkgPyAnMScgOiAnMC4zJ1wiIFthdHRyLmRdPVwiZ2V0UGF0aCgpXCIvPlxuICAgICAgPGNsaXBQYXRoIGlkPVwicHhiLWhlYXJ0LWNsaXBcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1elwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8cmVjdCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgY2xpcC1wYXRoPVwidXJsKCNweGItaGVhcnQtY2xpcClcIiB4PVwiMlwiIFthdHRyLnldPVwiMjEuMzUtKHJ2KHBlcmNlbnQsMCwxMDApKSoxOC4zNS8xMDBcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ291dGxpbmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50Om51bWJlciA9IDEwMDtcbiAgc2l6ZTpudW1iZXIgPSAyNDtcbiAgY29sb3I6c3RyaW5nO1xuICBvdXRsaW5lZDpib29sZWFuID0gZmFsc2U7XG5cbiAgYmFzZVBhdGggPSAnTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6JztcbiAgc2luZ2xldG9uZVBhdGggPSAnTTE2LjUsNUEzLjQ2MiwzLjQ2MiwwLDAsMSwyMCw4LjVjMCwyLjg4NS0zLjEyNSw1LjcyNS03Ljg1NiwxMC4wMjRsLS4wMzUuMDMyLS4xLjA5NC0uMTI0LS4xMTNDNy4xMzUsMTQuMjM0LDQsMTEuMzkxLDQsOC41QTMuNDYyLDMuNDYyLDAsMCwxLDcuNSw1YTMuOTYsMy45NiwwLDAsMSwyLjk3NywxLjM4N0wxMiw4LjE3NWwxLjUyMy0xLjc4OEEzLjk2LDMuOTYsMCwwLDEsMTYuNSw1bTAtMkE1Ljk4OCw1Ljk4OCwwLDAsMCwxMiw1LjA5LDUuOTg4LDUuOTg4LDAsMCwwLDcuNSwzLDUuNDQ3LDUuNDQ3LDAsMCwwLDIsOC41YzAsMy43OCwzLjQsNi44Niw4LjU1LDExLjUzTDEyLDIxLjM1bDEuNDUtMS4zMUMxOC42LDE1LjM2LDIyLDEyLjI4LDIyLDguNUE1LjQ0Nyw1LjQ0NywwLDAsMCwxNi41LDNaJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldFBhdGgoKXtcbiAgICByZXR1cm4gKHRoaXMub3V0bGluZWQgPyB0aGlzLnNpbmdsZXRvbmVQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgcnYgPSByYW5nZVZhbHVlO1xuXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUsIGdldENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGllLXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBcbiAgICBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiBcbiAgICB4PVwiMHB4XCIgeT1cIjBweFwiIFxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBcbiAgICBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKC0uMjV0dXJuKVwiPlxuXG4gICAgICA8Y2xpcFBhdGggW2F0dHIuaWRdPVwiJ3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlXCI+XG4gICAgICAgIDxwYXRoIFthdHRyLmRdPVwiY2xpcFBhdGhcIi8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgICAgPHBhdGggW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiXG4gICAgICBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgXG4gICAgICBbYXR0ci5maWxsLW9wYWNpdHldPVwib3V0bGluZWQgfHwgcGVyY2VudCA+PSAxMDAgPyAnMScgOiAnMC4zJ1wiXG4gICAgICBbYXR0ci5kXT1cIm91dGxpbmVkID8gb3V0bGluZUJhc2UgOiB0d29Ub25lQmFzZVwiXG4gICAgLz5cbiAgICA8cGF0aCAqbmdJZj1cInBlcmNlbnQgPiAwICYmIHBlcmNlbnQgPCAxMDBcIiBcbiAgICBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgXG4gICAgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIFxuICAgIFthdHRyLmRdPSBcImdldFBhdGgoKVwiICAvPlxuXG4gICAgICA8Y2lyY2xlICpuZ0lmPVwicGVyY2VudCA9PT0gMTAwICYmIG91dGxpbmVkXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiPjwvY2lyY2xlPlxuICAgICAgXG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAncmluZycsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIFBpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6IG51bWJlciA9IDEwMDtcbiAgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHJpbmc6IG51bWJlciA9IDEwO1xuICBvdXRsaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICBvdXRsaW5lQmFzZTtcbiAgdHdvVG9uZUJhc2U7XG4gIGNsaXBQYXRoO1xuICBpY29uU3Ryb2tlID0gMjtcbiAgc3Ryb2tlO1xuICBcblxuICAvLyBSaW5nIHByb3BlcnRpZXNcbiAgY2VudGVyWCA9IDEyO1xuICBjZW50ZXJZID0gMTI7XG5cbiAgLy8gT3V0ZXIgcmluZ1xuICBvdXRlclJhZGl1c0xhcmdlID0gMTA7XG4gIGlubmVyUmFkaXVzTGFyZ2U7XG5cbiAgLy8gSW5uZXIgUmluZ1xuICBvdXRlclJhZGl1c1NtYWxsO1xuICBpbm5lclJhZGl1c1NtYWxsO1xuICBcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuZ2V0UGF0aCgpe1xuICByZXR1cm4gYE0gMTIsMTIgSCAyNCBBIDEyLDEyLDAsJHt0aGlzLnBlcmNlbnQgPj0gNTAgPyAxIDogMH0sMSwke2dldENvb3JkaW5hdGVzKHRoaXMucGVyY2VudClbJ3gnXX0sJHtnZXRDb29yZGluYXRlcyh0aGlzLnBlcmNlbnQpWyd5J119WmBcbn1cbm5nT25Jbml0KCkge1xuICB0aGlzLnN0cm9rZSA9ICBNYXRoLm1heCgxLCBNYXRoLm1pbigxMCwgTWF0aC5yb3VuZCh0aGlzLnJpbmcpKSk7XG4gIHRoaXMuc3Ryb2tlID0gdGhpcy5vdXRsaW5lZCA/IE1hdGgubWF4KHRoaXMuc3Ryb2tlLCAyICogdGhpcy5pY29uU3Ryb2tlICsgMSkgOiB0aGlzLnN0cm9rZTtcbiAgdGhpcy5pbm5lclJhZGl1c0xhcmdlID0gMTAgLSB0aGlzLmljb25TdHJva2U7XG4gIHRoaXMub3V0ZXJSYWRpdXNTbWFsbCA9IDEwIC0gdGhpcy5zdHJva2UgKyB0aGlzLmljb25TdHJva2U7XG4gIHRoaXMuaW5uZXJSYWRpdXNTbWFsbCA9IDEwIC0gdGhpcy5zdHJva2U7XG4gIGlmKHRoaXMuaW5uZXJSYWRpdXNTbWFsbCA9PT0gMClcbiAge1xuICAgIHRoaXMub3V0ZXJSYWRpdXNTbWFsbCA9IDA7XG4gIH1cbiBcbiBcbiAgdGhpcy5vdXRsaW5lQmFzZSA9IGBcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIFpcbmA7XG50aGlzLnR3b1RvbmVCYXNlID0gIGBcbk0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbkEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5aXG5gO1xudGhpcy5jbGlwUGF0aCA9IGBcbk0xMiwyXG5BMTAsMTAsMCwxLDAsMjIsMTIsXG4xMCwxMCwwLDAsMCwxMiwyXG5aXG5tMCwkezIwLXRoaXMuc3Ryb2tlfSBcbkEgJHsxMC10aGlzLnN0cm9rZX0sJHsxMC10aGlzLnN0cm9rZX0sMCwxLDEsJHsyMi10aGlzLnN0cm9rZX0sMTIsXG4kezEwLXRoaXMuc3Ryb2tlfSwkezEwLXRoaXMuc3Ryb2tlfSwwLDAsMSwxMiwkezIyLXRoaXMuc3Ryb2tlfVxuWlxuYFxuICB9XG5cblxufVxuXG5cbi8vIGV4cG9ydCBjb25zdCBnZXRDb29yZGluYXRlcyA9IChwZXJjZW50LCByYWRpdXMgPSAxMikgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHg6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLmNvcyggKHBlcmNlbnQvMTAwKSAqIDIqTWF0aC5QSSkgKSxcbi8vICAgICAgICAgeTogcmFkaXVzICsgKHJhZGl1cyAqIE1hdGguc2luKCAocGVyY2VudC8xMDApICogMipNYXRoLlBJKSApXG4vLyAgICAgfVxuLy8gfSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nOyAgXG5pbXBvcnQgeyBOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQgfSBmcm9tICcuL25nLXByb2dyZXNzLWljb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXR0ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9iYXR0ZXJ5L2JhdHRlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9oZWFydC9oZWFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGllQ29tcG9uZW50IH0gZnJvbSAnLi9waWUvcGllLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50LCBCYXR0ZXJ5Q29tcG9uZW50LCBIZWFydENvbXBvbmVudCwgUGllQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIE5nUHJvZ3Jlc3NJY29uc0NvbXBvbmVudCwgXG4gICAgQmF0dGVyeUNvbXBvbmVudCwgSGVhcnRDb21wb25lbnQsIFBpZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nUHJvZ3Jlc3NJY29uc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFLYSxzQkFBc0I7SUFFakMsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQsTUFXYSx3QkFBd0I7SUFFbkMsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7Ozs7QUNWRCxNQUFhLFVBQVU7Ozs7OztBQUFHLFVBQVMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzlDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtDQUMzQyxDQUFBOztBQUVELE1BQWEsY0FBYzs7Ozs7QUFBRyxVQUFTLE9BQU8sRUFBRSxNQUFNLEdBQUcsRUFBRTtJQUN2RCxPQUFPO1FBQ0gsQ0FBQyxFQUFFLE1BQU0sSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLE9BQU8sR0FBQyxHQUFHLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRTtRQUM1RCxDQUFDLEVBQUUsTUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsT0FBTyxHQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFO0tBQy9ELENBQUE7Q0FDSixDQUFBOzs7Ozs7QUNURCxNQStCYSxnQkFBZ0I7SUFhM0I7UUFaQSxZQUFPLEdBQVUsR0FBRyxDQUFDO1FBQ3JCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6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