# Player Manager Console

It's a new version of PSP service without JSP with new version of React and new architecture.
Confluence: http/....

## Requirements

```
Node version >= 16.0.0
yarn
```

## How to start

```
1. yarn
2. create .env file in root folder and copypaste
   there are data from needed .env file in envs folder
3. yarn start
```

## Tests

```yarn test```

PS: No test's are provided yet

## What's need to be done in future

1. Add typescript
2. Add GraphQL Code Generator or same technology:
###### Only after typescript
```
yarn add -D @graphql-codegen/typescript @graphql-codegen/cli
```
3. Add tests

## Autogenerate GraphQL types

After adding GraphQL Code Generator
```
npx graphql-codegen init
```

## How to add new route

Open ```constants/routes``` and add into needed array of routes new one
```
PS:
Currently DEFAULT_HIDDEN_ROUTES - Routes that now rendering at
sidebar but if that needed we can add another rule

DEFAULT_VISIBLE_ROUTES - routes that rendering into sidebar
```

After that need create new folder into 'pages'.<br>
Then create ```index.jsx``` with function that have same name as folder
  and do <b>NOT</b> have default export of itself.

<b>Be care! There are strict semantic!</b> :<br>
  If you added route with name for example ```MY_LOVEST_BAR``` - you must create new folder into ```pages``` with name MyLovestBar. <br>
  ```
  route AAA_BBB_CCC - folder AaaBbbCcc
  // PS: So first letter and every after underscore - capitalized.
  ```
  <br>
  And there are add ```index.jsx``` with ```export const MyLovestBar = () => {...}```

Then open file ```pages/index.js``` and there are add new export like <br>```export { NewRoute } from './newRoute```

That's it. You have created a new router. Just add some JSX code into your index.jsx in new folder and you will see it.

##### Clear example of usage - creating new Route:
Here is example how to create new router ```My New Router``` into SideBar 
```
// Open 'constants/routes'
export const DEFAULT_VISIBLE_ROUTES = [
  'ACCOUNT_HOME',
  'ANOTHER_ROUTE',
  'TEST_GRAPH_QL',

  'MY_NEW_ROUTE', // Add it into array of visible routes
];
```

Then we should to create new pageComponent so into ```pages``` folder we creating new folder with name ```MyNewRoute``` and creating there are ```index.jsx```

Then we need to open our new ```index.jsx``` and add there
are component with same name as folder (MyNewRoute) without default export. Here is example:
```
export const MyNewRoute = () =>
  <div>Hey! Here is content of new route!</div>;
```

And last step - add export of this component in ```pages/index.js```:
```
export { AnotherRoute } from './AnotherRoute';
export { TestGraphQl } from './TestGraphQl';
export { ErrorPage } from './ErrorPage';
export { AccountHome } from './AccountHome';

export { MyNewRoute } from './MyNewRoute';
```

That's it. New route is done.


## Adding Secure Route
The way is pretty same as default route. Only one that changed - we need to add values in two constants in ```constants/route```

First one is 
```
SECURE_ROUTES = [
  'ADMIN_SETTINGS',
  // Here is a new route
];
```

And second one is 
```
secureRouteNeededPermissions = {
  ADMIN_SETTINGS: ['superAdmin'],
  // Here we need to add all rules that user need to open/see this route
};
```

That's it.
