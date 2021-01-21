# Coop to FreeAgent CSV parser

Convert Coop Bank's CSV export to a compatible FreeAgent format to upload for bank reconciliation.

## Install

```
yarn
```

## Run

```
node index.js [./file.csv]
```

> Default input file is `./transactions.csv`.

## Output

A file with `-fa` appended to the name is created in the same directory. Upload this to FreeAgent.
