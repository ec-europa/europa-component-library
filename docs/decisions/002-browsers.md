# Define which browsers we support

| Status        | proposed                      |
| ------------- | ----------------------------- |
| **Proposed**  | 2019-04-09                    |
| **Accepted**  | 2019-08-06                    |
| **Driver**    | @yhuard                       |
| **Approver**  | @degliwe                      |
| **Consulted** | @degliwe, @emeryro, @planctus |
| **Informed**  |                               |

## Decision

The final decision is a mix of alternatives 1.1 and 2.1 (see below).

We support the minimum browser versions [requested by the IPG](https://wikis.ec.europa.eu/pages/viewpage.action?spaceKey=WEBGUIDE&title=04.+Browser+support). We also support all the browsers which have more than 0.5% usage in Europe (according to StatCounter).

Here is the `browserslist` configuration we use:

```
# > 0.5% usage in Europe (StatCounter GlobalStats)
> 0.5% in alt-eu

# Minimum browser versions requested by the IPG (9 August 2019) - https://wikis.ec.europa.eu/pages/viewpage.action?spaceKey=WEBGUIDE&title=04.+Browser+support
Chrome >= 62
ChromeAndroid >= 55
Firefox >= 50
IE >= 11
Edge >= 16
Safari >= 10
Opera >= 52

# Support the latest Firefox ESR
Firefox ESR

# Not dead browsers ("dead" meaning "browsers without official support or updates for 24 months")
not dead
```

You can test the query by running: `npx browserslist '> 0.5% in alt-eu, Chrome >= 62, ChromeAndroid >= 55, Firefox >= 50, IE >= 11, Edge >= 16, Safari >= 10, Opera >= 52, Firefox ESR, not dead'`

<details>
 <summary>Query results (6 August 2019)</summary>

```
and_chr 75
chrome 75
chrome 74
chrome 73
chrome 72
chrome 71
chrome 70
chrome 69
chrome 68
chrome 67
chrome 66
chrome 65
chrome 64
chrome 63
chrome 62
chrome 49
edge 18
edge 17
edge 16
firefox 68
firefox 67
firefox 66
firefox 65
firefox 64
firefox 63
firefox 62
firefox 61
firefox 60
firefox 59
firefox 58
firefox 57
firefox 56
firefox 55
firefox 54
firefox 53
firefox 52
firefox 51
firefox 50
ie 11
ios_saf 12.2-12.3
ios_saf 12.0-12.1
ios_saf 11.3-11.4
opera 62
opera 60
opera 58
opera 57
opera 56
opera 55
opera 54
opera 53
opera 52
safari 12.1
safari 12
safari 11.1
safari 11
safari 10.1
safari 10
samsung 9.2
```

</details>

Please note the fact that a browser is not explicitly covered by the configuration doesn't mean the ECL won't work in this browser. It only means it might not work (lack of vendor prefixes for example).

## Context

The main tools we use (babel-preset-env for the JavaScript, autoprefixer for the CSS) rely on [browserslist](https://github.com/browserslist/browserslist) in order to derive the list of browsers they are supposed to support.

Before creating this decision record, our `browserslist` configuration file contained:

```
> 1%
last 2 versions
not ie 10
not ie_mob 10
not safari < 10
```

Which roughly translated to this list of browsers (as of 9 April 2019, `caniuse-lite@1.0.30000957`):

<details>
 <summary>Query results (9 April 2019)</summary>

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

</details>

The [latest version of the IPG](https://wikis.ec.europa.eu/display/WEBGUIDE/04.+Browser+support) (as of 6 August 2019) defines a set of minimum browser versions that must be supported:

```
Chrome 62.0
Chrome Mobile 55.0
Firefox 50.0
Internet Explorer 11.0
Microsoft Edge 16
Safari 10.0
Opera 52.0
```

It also specifies that:

> All European Commission websites must offer an optimal browsing experience (i. e. all functional and visual bugs must be fixed) on every browser which has been used by at least 2% of its total users in the last 12 months.

This requirement is specifc to each website. We can't build a specific version of ECL for every website, thus we have to expand the scope of the request: instead of targeting "2% of its total users in the last 12 months", we can target `> 0.5% in alt-eu` which roughly translates to "browsers with > 0.5% usage in European countries in the last month" (browser usage based on data from StatCounter GlobalStats).

We also know that EC computers (can) use Firefox ESR. `browserslis` provides a query for it, let's use it!

If a project needs a different configuration, it will have to create a custom build of ECL.

## Consequences

Since the browser usage stats are constantly evolving and since the IPG frequently updates its requirements, we need to:

- keep `caniuse-lite` up-to-date
- update our configuration (minimum versions) whenever the IPG updates its requirements
- properly communicate which browser versions are covered at the time of the build

### Next steps

- update the configuration with accepted decision
- show the list of browsers during the build (`@ecl/builder`)

## Alternatives Considered

Before reading what comes next, please be aware of browserslist's [best practices](https://github.com/browserslist/browserslist#best-practices).

Note that we can mix different alternatives together.

The base configuration could contain a list of fixed versions:

```
ie 11
Chrome 55
safari 12
iOS 7
```

Fixing versions allows us to have a predictable, consistent list of supported browsers.

Check the list of browsers: https://github.com/browserslist/browserslist#browsers

Please note the configuration works as a white list, which means browsers not listed here are not covered.

Maintaining a static list of supported browsers can be cumbersome. That's why we can use dynamic queries, i.e. queries that will produce a different output over time depending on the release of new browser versions or on the usage stats.

### Alternative 1: support new browser versions

This first alternative doesn't depend on usage statistics.

Even though the configuration doesn't directly depend on usage stats, we still need to make sure that the choices we make correspond to the reality of EC websites, thus we need to consult usage stats for EC websites as a whole to base our choices.

One of the main downsides of this alternative is that we need to list in our configuration every browser we support.

Now let's see what are our options here.

#### Alternative 1.1: "BROWSER > VERSION"

In addition to a list of fixed browsers versions, we can use queries like `Firefox > 20` to target all the versions of Firefox since the version 20.

- Pro: we are sure that Firefox 20 and more recent versions are covered.
- Con: we still need to manualy update the configuration when we don't need to support Firefox 20 anymore.

#### Alternative 1.2: "last X BROWSER versions"

We can also use "last X versions" (every browser), or "last X BROWSER versions" queries in order to avoid targetting older browsers.

Example:

```
last 2 versions
last 2 Chrome versions
```

- Pro: old browsers are automatically dropped when they're not in the "last X versions" (especially useful for evergreen browsers).
- Con: some browsers might get dropped inadvertently.

Note that it doesn't make sense to use both `last X Chrome versions` and `Chrome > Y` queries in the same configuration.

### Alternative 2: dynamic versions

We can also taget browsers based on their usage statistics.

Example:

```
> 1%
> 1% in alt-EU
```

#### Alternative 2.1: based on caniuse stats

If we use the native queries like `> 1%` or `> 1% in alt-EU`, then the result will be based on stats from [Can I Use](https://caniuse.com/).

- Pros: it's easy to understand and automatically updated when `caniuse-lite` is updated.
- Con: these stats may not reflect the true audience of EC websites.

#### Alternative 2.2: based on custom stats

We can also export stats from Matomo (ex-piwik) and use these stats to base our configuration on. The issue is: which website's stats should we use? Each website might have a different user base...

- Pro: it reflects the true audience of EC websites as a whole.
- Cons: it requires some work (adapter Matomo exports -> browserslist) and maintainance (frequency of usage stats update?)

## Resources

- https://github.com/browserslist/browserslist
- https://caniuse.com/
- https://browserl.ist/
