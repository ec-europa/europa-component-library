# Define which browsers we support

| Status        | proposed   |
| ------------- | ---------- |
| **Proposed**  | 2019-04-09 |
| **Accepted**  |            |
| **Driver**    | @yhuard    |
| **Approver**  |            |
| **Consulted** |            |
| **Informed**  |            |

## Decision

We support the following browsers:

[...]

Here is the browserslist configuration we use:

[...]

## Context

The main tools we use (babel for the JavaScript, autoprefixer for the CSS) rely on [browserslist](https://github.com/browserslist/browserslist) in order to derive the list of browsers they are supposed to support.

Before creating this decision record, our `browserslist` configuration file contained:

```
> 1%
last 2 versions
not ie 10
not ie_mob 10
not safari < 10
```

Which roughly translated to this list of browsers (as of 9 April 2019, `caniuse-lite@1.0.30000957`):

```
and_chr 71
and_ff 64
and_qq 1.2
and_uc 11.8
android 67
android 4.4.3-4.4.4
baidu 7.12
bb 10
bb 7
chrome 73
chrome 72
chrome 71
edge 18
edge 17
firefox 66
firefox 65
ie 11
ie_mob 11
ios_saf 12.0-12.1
ios_saf 11.3-11.4
op_mini all
op_mob 46
op_mob 12.1
opera 58
opera 57
safari 12
safari 11.1
samsung 8.2
samsung 7.2-7.4
```

todo:

- depends on caniuse-lite (most be kept up-to-date)
- custom stats (per site?)
- if based on custom stats, how to export stats from webanalytics?

## Consequences

(Describe the pros and cons of the proposed decision. Think about the people in the **Informed** line of the DACI table above. How will this decision affect them?)

## Alternatives Considered

(Describe the research you did and the alternatives you considered when making this decision. In some cases it may be useful to include subsections for each of the alternatives.)

## Resources

- https://github.com/browserslist/browserslist
- https://caniuse.com/
