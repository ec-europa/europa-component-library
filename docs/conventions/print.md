# How to handle print css rules in ECL

## Selected option

TBD

## Considered options

### Option 1: Separate screen and print

It means having all css rules related to screen display grouped together (in a separated file or not, to be discussed later), and all print rules grouped together somewhere else.

Example:
```
(media screen)
.my-component {
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}

(media print)
.my-component {
  color: black;
  display: flex;
  font: <font-print-m>;
  width: 100%;
}
```

Pros:
- Clear separation of styles

Cons:
- Have to specify all css rules in print (duplication)

### Option 2: Define common rules and override for print

It means having css rules without specific media target (the way it is now), and override what we need for print.

Example:
```
(no specific media, or media all)
.my-component {
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}

(media print)
.my-component {
  color: black;
  font: <font-print-m>;
}
```

Pros:
- Less duplication (only write needed rules for print)

Cons:
- Have to override css rules

### Option 3: Separate all styles

It means having first common rules for screen and print, then specific rules.

Example:
```
(no specific media, or media all)
.my-component {
  display: flex;
  width: 100%;
}

(media scren)
.my-component {
  color: <grey>;
  font: <font-m>;
}

(media print)
.my-component {
  color: black;
  font: <font-print-m>;
}
```

Pros:
- Clear separation of styles
- No duplication

Cons:
- Slightly harder to read and maintain
- Need to update existing css for all components
