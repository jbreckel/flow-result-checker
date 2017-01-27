# flow-result-checker

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

```package.json
  "scripts": {
    "flow": "flow-result-checker",
    "flow-with-save": "flow-result-checker -d ./flow"
  },
```

`yarn flow` will only print errors in your code  
`yarn flow-with-save` will print errors in your code, but save the whole result in ./flow/results.txt
