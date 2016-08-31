# tdd-mocha-template
Template for writing scripts using TDD and mocha

To initialize:
```
npm install
npm install -g mocha
```

To run tests:
```
npm test
```

## How to enable autocompletion for Chai assertions in IntelliJ/Webstorm ?
1. `File | Settings | Languages & Frameworks | JavaScript | Libraries`
2. Click `Download ` (select *TypeScript community stubs*)
3. Find `chai` and install.

 
## How to run only selected tests in IntelliJ/Webstorm (Using shortcut Ctrl + Shift + F10) ?
1. `Run/Debug Configurations | Defaults | Mocha`
2. Add `--compilers js:babel-core/register` in `Extra Mocha Options`
