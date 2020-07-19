# ws-dispensary-api

The dispensary API for handling internal DB calls (basic CRUD operations).

The project is now hooked up with Babel, so you will be able to write how you want in the dev folder and it will transpile into the public folder.

### Instructions

Create a `.babelrc` file in the root, and add the following:

```sh
{
    "presets": [
      [
        "@babel/preset-env", {
            "useBuiltIns": "entry"
          }
      ]
    ]
}
```

Now run the following commands:

```sh
$ npm install
$ npm run build
$ npm run watch
$ npm run dev
```
Now you're ready to start working in the dev folder.
