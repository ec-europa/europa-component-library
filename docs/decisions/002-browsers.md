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

TODO:

- depends on caniuse-lite (most be kept up-to-date)
- custom stats (per site?)
- if based on custom stats, how to export stats from webanalytics?

## Consequences

TODO:

- show list of browsers in ecl builder

(Describe the pros and cons of the proposed decision. Think about the people in the **Informed** line of the DACI table above. How will this decision affect them?)

## Alternatives Considered

Please be aware of browserslist'es [best practices](https://github.com/browserslist/browserslist#best-practices).

### Alternative 1: fixed versions

#### Alternative 1.1: predictable versions only

We can provide a pre-determined list of browsers we want to explicitly support:

```
ie 11
Chrome 55
safari 12
iOS 7
Firefox > 20
```

Check the list of browsers: https://github.com/browserslist/browserslist#browsers

It's a white list, which means browsers not listed here are not covered.

- Pro: it's predictable, it always produces the same result.
- Con: we have to keep the list up-to-date and not forget any browser.

#### Alternative 1.2: "last X versions"

Additionally, we can use "last X versions", or "last X BROWSER versions" queries in order to avoid targetting older browsers:

```
last 2 versions
last 2 Chrome versions
```

- Pro: old browsers are automatically dropped when they're not in the "last X versions" (especially useful for evergreen browsers).
- Con: some browsers might get dropped.

Note that it doesn't make sense to use both `last X Chrome versions` and `Chrome > Y` queries in the same configuration.

### Alternative 2: dynamic versions

We can also taget browsers based on their usage statistics

```
> 1%
> 1% in alt-EU
```

#### Alternative 2.1: based on caniuse stats

If we use the native queries like `> 1%` or `> 1% in alt-EU`, then the result will be based on stats from Can I Use.

#### Alternative 2.2: based on custom stats

We can also export stats from Matomo (ex-piwik) and use these stats to base our configuration on. The issue is: which website's stats should we use? Each website might have a different user base...

## Resources

- https://github.com/browserslist/browserslist
- https://caniuse.com/
- https://browserl.ist/
