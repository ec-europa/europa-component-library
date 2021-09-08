---
title: Usage
order: 1
---

<p>
  ECL provides an easy way to style some default HTML tags (like links or paragraphs).<br />
  Note that this approach comes with limitations (no possible variant for elements, limited number of HTML tags, ...), and should be considered as an edge case. The recommanded way to use ECL is still to apply the corresponding CSS classes where needed.
</p>

## Styled tags

Here is the list of HTML tags available for automatic styling:
- &lt;a&gt;
- &lt;button&gt;
- &lt;h1&gt; to &lt;h6&gt;
- &lt;p&gt;
- &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;
- &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;
- &lt;table&gt;, &lt;thead&gt;, &lt;th&gt;, &lt;tr&gt;, &lt;td&gt;
- &lt;blockquote&gt;, &lt;cite&gt;

## Optional CSS

To activate the styling of HTML tags, an optional CSS file called `ecl-default` is available for both EC and EU. 

## Namespace

To prevent CSS conflicts, these styles are using a namespace. 
So the HTML code to be styled has to be put inside a container with the CSS class `.ecl`.
