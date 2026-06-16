# ECL Agentic Skills

Task-oriented guides for AI agents working on ECL. Each file describes how to approach
a specific recurring task — what to check, in what order, and what to avoid.

These are not reference documentation. For full details on any topic, follow the links
into `docs/conventions/` or `docs/decisions/`.

## Available skills

| Skill                                                | When to use                                                    |
| ---------------------------------------------------- | -------------------------------------------------------------- |
| [ecl-new-component.md](./ecl-new-component.md)       | Scaffolding a brand-new component from scratch                 |
| [ecl-modify-component.md](./ecl-modify-component.md) | Changing styles, markup, or behaviour of an existing component |
| [ecl-testing.md](./ecl-testing.md)                   | Running tests, handling snapshot updates, fixing axe failures  |
| [ecl-story-controls.md](./ecl-story-controls.md)     | Adding or modifying Storybook stories and controls             |

## Potential future skills

Not yet written — create when a real task requires it.

| Skill              | When it would be used                                                               |
| ------------------ | ----------------------------------------------------------------------------------- |
| `ecl-tokens`       | Adding or updating design tokens (CSS custom properties → Sass map → preset → SCSS) |
| `ecl-javascript`   | Writing or modifying ECL JS class behaviour (autoInit, init, destroy, events, Map)  |
| `ecl-website-page` | Adding or updating a component's documentation page (MDX, config.yml, thumbnail)    |
| `ecl-rtl`          | RTL considerations when modifying layout or spacing (probably a reference fragment) |

---

## How to use these skills

Skills are plain markdown files that any AI tool can read. The `ecl-` prefix
namespaces them so they stay unambiguous if multiple skill sets are installed together.

### Generic usage

The simplest approach works with any tool: reference the skill by name and describe
your task.

> "Follow `ecl-modify-component` to add a disabled state to the banner component."
> "Use `ecl-new-component` to scaffold a new slider component with JS."

Alternatively, just describe the task naturally — if the skill files are part of the
agent's context, it will pick the right one automatically.

---

## Tool-specific setup

### Claude Code (web / desktop / CLI)

Skills are registered as project slash commands in `.claude/commands/`. Type `/ecl`
and let the autocomplete suggest the available commands — you do not need to type the
full name.

```
/ecl-new-component       scaffold a new component
/ecl-modify-component    change an existing component
/ecl-testing             run or fix tests
/ecl-story-controls      add or update stories
```

Pass your task as the argument after the command name:

> `/ecl-new-component Add a slider component with JS`

**Note for CLI users:** the terminal requires a `/project:` prefix because project
commands are namespaced there. Use `/project:ecl-new-component` instead of
`/ecl-new-component`. The web and desktop apps do not need this prefix.

### Cursor / GitHub Copilot / other tools

Add `docs/agentic/` to your tool's project rules or custom instructions. With the
folder indexed, reference skills by name only:

> "Follow `ecl-modify-component` to add a disabled state to the banner component."

### Kiro

Add `docs/agentic/` to Kiro's project context so all skill files are always available
without explicit references. Then just describe your task naturally.

---

## Tips for effective use

- **Be specific about the task.** "Fix the button styles" gives the agent less to work
  with than "Add a hover colour token to the button component".
- **One skill per task.** If a task spans multiple skills (e.g. modifying a component
  _and_ adding a story), name both explicitly.
- **Skills are a starting point.** If the agent's output doesn't match ECL conventions,
  check whether the missing rule is in `docs/conventions/` and consider adding it to
  the skill file.
