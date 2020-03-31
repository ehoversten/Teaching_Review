## Getting started Testing with Jest

### Install our desired Testing Package Library:

As this is not a package that an end user will need to download when they run our Node program,
we add the `--save-dev` (or `--dev` for yarn) to save this library as a Development Dependency in our
`package.json` file 


```javascript
$> npm install --save-dev jest

// or with yarn package manager
$> yarn add --dev jest
```

### Connect our new testing package to our program 

We can add or attach our new testing library by adding it to our `scripts` object within `package.json`

In the package.json file add the following:
```javascript
{
  "scripts": {
    "test": "jest"
  }
}
```

Now we can run the tests we code by running the command `npm run test` (or `yarn test` if you are running yarn)

