[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

[![Travis Build Status][build-badge]][build]
[![Dependencies Status][dependencyci-badge]][dependencyci]
[![Make a pull request][prs-badge]][prs]
[![License](http://img.shields.io/badge/Licence-MIT-brightgreen.svg)](LICENSE)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

# Introduction

Bootstrap and package your project with Angular 7 and Electron (Typescript + SASS + Hot Reload) for creating Desktop applications.

Currently runs with:

- Angular v7.2.0
- Electron v5.0.0
- Electron Builder v20.28.1

With this sample, you can :

- Run your app in a local development environment with Electron & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac


If you want to generate Angular components with Angular-cli , you **MUST** install `@angular/cli` in global context.
Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

``` bash
yarn install -g @angular/cli
```

## To build for development

- **in a terminal window** -> yarn start

Voila! You can use your Angular + Electron app in a local development environment with hot reload !

The application code is managed by `main.ts`. In this sample, the app runs with a simple Angular App (http://localhost:4200) and an Electron window.
The Angular component contains an example of Electron and NodeJS native lib import.
You can disable "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## Included Commands

|Command|Description|
|--|--|
|`yarn ng:serve:web`| Execute the app in the browser |
|`yarn build`| Build the app. Your built files are in the /dist folder. |
|`yarn build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`yarn electron:local`| Builds your application and start electron
|`yarn electron:linux`| Builds your application and creates an app consumable on linux system |
|`yarn electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`yarn electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

**Your application is optimised. Only /dist folder and node dependencies are included in the executable.**

## You want to use a specific lib (like rxjs) in electron main thread ?

You can do this! Just by importing your library in yarn dependencies (not devDependencies) with `yarn install --save`. It will be loaded by electron during build phase and added to the final package. Then use your library by importing it in `main.ts` file. Easy no ?

## Browser mode

Maybe you want to execute the application in the browser with hot reload ? You can do it with `yarn ng:serve:web`.
Note that you can't use Electron or NodeJS native libraries in this case. Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.


[build-badge]: https://travis-ci.org/scottbot95/blink-monitor.svg?branch=master
[build]: https://travis-ci.org/scottbot95/blink-monitor
[dependencyci-badge]: https://dependencyci.com/github/scottbot95/blink-monitor/badge
[dependencyci]: https://dependencyci.com/github/scottbot95/blink-monitor
[license-badge]: https://img.shields.io/badge/license-Apache2-blue.svg?style=flat
[license]: https://github.com/scottbot95/blink-monitor/blob/master/LICENSE.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/scottbot95/blink-monitor.svg?style=social
[github-watch]: https://github.com/scottbot95/blink-monitor/watchers
[github-star-badge]: https://img.shields.io/github/stars/scottbot95/blink-monitor.svg?style=social
[github-star]: https://github.com/scottbot95/blink-monitor/stargazers
