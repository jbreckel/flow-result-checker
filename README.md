# flow-result-checker

[![Build Status](https://travis-ci.org/jbreckel/flow-result-checker.svg?branch=master)](https://travis-ci.org/jbreckel/flow-result-checker) 
[![Build Status](https://ci.appveyor.com/api/projects/status/1yii01mrx6ied4bt/branch/master?svg=true)](https://ci.appveyor.com/project/jbreckel/flow-result-checker/branch/master) 
[![npm version](https://badge.fury.io/js/flow-result-checker.svg)](https://badge.fury.io/js/flow-result-checker)

This is a small helper script, that parses `flow` output and filters errors inside `node_modules`.
Afterwards returns the normal `flow` output for errors inside your package.

You can choose to store the whole result as a `txt` file by specifying a directory to save the results to.

### Options

| option | result | default |
|---|---|---|
| `-d, --dir` | specifies the directory where files should be saved. if not specified, files will not be saved | `undefined` |
| `-f, --file` | name of the file where results are saved | `results.txt` |
| `-e, --error-file` | name of the file, errors during script execution will be saved | `errors.txt` |


### Examples

Your `package.json`:
```
  "scripts": {
    "flow": "flow check --show-all-errors | flow-result-checker",
    "flow-with-save": "flow check --show-all-errors | flow-result-checker -d ./flow"
  },
  "dependencies": {
    "flow-bin": "x.x.x"
  }
```

with npm:  
`npm run flow` will only print errors in your code  
`npm run flow-with-save` will print errors in your code, but save the whole result in ./flow/results.txt


with yarn:  
`yarn flow` will only print errors in your code  
`yarn flow-with-save` will print errors in your code, but save the whole result in ./flow/results.txt
