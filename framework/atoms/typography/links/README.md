# Links

## TODO

Should the external icon be underlined or not? This is not clear.

```scss
&::after {
  @extend .icon--after;

  @include icon('external');

  font-size: 75%;
  margin-left: 0.4em;
  margin-right: 0.2em;
  // Hack for IE to not display underline (this is on purpose).
  text-decoration: underline;
}
```

There's a line telling to underline the icon!
