# Heads Up Poker

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.  This project is intended to allow players to play against different AI opponents in a cash-game-style match of Texas Hold'em. The idea is to allow players to test out different strategies and tactics against opponents who have various ranges, strategies, and playstyles. AI opponents have been modeled after opponents that you might commonly find in poker games such as TAGs (Tight-aggressive players), Lags (loose-aggressive players), hyper-aggressive players, tight-passive, tricky, etc. 

This project also intends to provide AI opponents with varying levels of skill. Part of this project is so provide a "battleground" for AI opponents to face against each other such that they can fine-tune ranges and betting strategy against one another and become stronger. Future work will hopefully involve allowing players input their own betting strategies and seeing how they perform against each other.  

Another key component of this project is to use a back-end server with NodeJS to get card information. The idea being that this platform might be used to scale to allow multi-player tables of texas hold-em. Using a back-end server would help to add a layer of security so that players can not cheat by viewing the value of cards in the deck or in their opponents hand. I intend to build the interaction with the Back-End server using web sockets for real-time action. Both for the learning experience as well as an improved user experience.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
