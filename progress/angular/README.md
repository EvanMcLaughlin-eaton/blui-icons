# PX Blue Progress Icons

[![](https://img.shields.io/npm/v/@pxblue/ng-progress-icons.svg?label=@pxblue/ng-progress-icons&style=flat)](https://www.npmjs.com/package/@pxblue/ng-progress-icons)
[![](https://img.shields.io/circleci/project/github/pxblue/icons/master.svg?style=flat)](https://circleci.com/gh/pxblue/icons/tree/master)

This is a library of icons with dynamic fill capabilities that can be used to show progress (similar to a traditional progress spinner or bar). These can be used to show health, battery life, etc.

Currently, we have icons available for:

-   battery
-   heart
-   pie
-   ups

## Installation

To install the PX Blue progress icons from NPM as a dependency for your project, you can run one of the following commands in your project root:

```
yarn add @pxblue/ng-progress-icons // for Angular components
```

## Using the progress icons in your application

The progress icon components can be imported and used like you would use any other component. You can manually set the desired color for the icon, otherwise it will inherit the text color of its parent container;

```
// app.module.ts
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';

...
imports: [
    NgProgressIconsModule
],
```

```
// app.component.html
<battery-progress percent="80" size="36" color="green" [charging]="true" [outlined]="true"></battery-progress>
<heart-progress percent="99" size="36" color="pink" [outlined]="true"></heart-progress>
<pie-progress percent="30" size="36" color="#0000ff" ring="4" [outlined]="true"></pie-progress>
<ups-progress percent="10" size="36" color="#0000ff"  [outlined]="true"></ups-progress>
```

## Available properties

-   `percent` (Number): the amount to fill the icon. **Default**: 100.
-   `size` (Number): the size of the icon (px). **Default**: 24.
-   `charging` (Boolean, _Battery only_): whether to show the charging indicator or not. **Default**: false.
-   `outlined` (Boolean): whether to show outlined style for icon. **Default**:false.
-   `color` (String): the color to use for the icon. **Default**: inherit. Color can also be set through the `style` property.
-   `ring` (Number, _Pie only_): the thickness of the outer ring (1 (thin ring) - 10 (full circle)). **Default**: 10.

## Building & Packaging

These progress icons are currently created manually by modifying the svg files from the design folder with various clip paths and fill algorithms. They are then packaged up for distribution via npm.

The Angular icons are built using the library packages built into the Angular CLI ([read more](https://github.com/angular/angular-cli/wiki/stories-create-library)).

To create a new component:

```
cd icons/progress/angular
ng generate component component-name --project=ng-progress-icons
```

And then to create the /dist version:

```
ng build ng-progress-icons
or
yarn build
```

Once you have built the library, you can publish to npm via:

```
cd dist/ng-progress-icons
npm version patch
npm publish
```
