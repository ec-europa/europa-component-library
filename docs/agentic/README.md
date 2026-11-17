# ECL Agentic Skills

Task-oriented guides for AI agents working on ECL. Each skill describes how to approach
a specific recurring task — what to check, in what order, and what to avoid.

These are not reference documentation. For full details on any topic, follow the links
into `docs/conventions/` or `docs/decisions/`.

## Available skills

| Skill                                                   | When to use                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------- |
| [ecl-new-component](./ecl-new-component/SKILL.md)       | Scaffolding a brand-new component from scratch                 |
| [ecl-modify-component](./ecl-modify-component/SKILL.md) | Changing styles, markup, or behaviour of an existing component |
| [ecl-testing](./ecl-testing/SKILL.md)                   | Running tests, handling snapshot updates, fixing axe failures  |
| [ecl-story-controls](./ecl-story-controls/SKILL.md)     | Adding or modifying Storybook stories and controls             |
| [ecl-update-token](./ecl-update-token/SKILL.md)         | Updating EC color tokens from a design export or inline values |

## Format

Skills follow the open [Agent Skills](https://agentskills.io) format, so any tool that
supports it can load them, and any other tool can read them as plain markdown:

```
ecl-<task>/
  SKILL.md        ← frontmatter (name, description) + the workflow
  reference/      ← details loaded only when the workflow points to them
```

- **`description`** is what an agent reads to decide whether to load the skill. Write it
  in the third person, say what the skill does _and_ when to use it, and include the
  words a user would naturally type.
- **Progressive disclosure** — keep `SKILL.md` focused on the steps and decisions.
  Move material only some tasks need (templates, mapping tables, specialised patterns)
  into `reference/`, linked directly from `SKILL.md` (one level deep, no chains).
- **One owner per rule** — e.g. when to run or update snapshots lives in `ecl-testing`;
  other skills refer to it instead of repeating it.
- **Explain why** a rule exists rather than relying on capitals or "NEVER"; it lets the
  agent handle the cases the rule did not anticipate.
- **No line numbers** — point to files with a `grep` pattern so the skill survives edits.

## Potential future skills

Not yet written — create when a real task requires it.

| Skill              | When it would be used                                                               |
| ------------------ | ----------------------------------------------------------------------------------- |
| `ecl-javascript`   | Writing or modifying ECL JS class behaviour (autoInit, init, destroy, events, Map)  |
| `ecl-website-page` | Adding or updating a component's documentation page (MDX, config.yml, thumbnail)    |
| `ecl-rtl`          | RTL considerations when modifying layout or spacing (probably a reference fragment) |

---

## Tool-specific setup

### Claude Code (web / desktop / CLI)

`.claude/skills` is a symlink to this folder, so the skills are discovered
automatically: Claude loads one when the task matches its description. They can also be
invoked explicitly — type `/ecl` and pick from the autocomplete:

> `/ecl-new-component Add a slider component with JS`

On Windows, cloning needs `git config core.symlinks true` (and Developer Mode) for the
symlink to resolve.

### Other tools (Cursor, GitHub Copilot, Kiro, Codex…)

If the tool supports Agent Skills, point its skills directory at `docs/agentic/`.
Otherwise add `docs/agentic/` to the tool's project rules or context and reference
skills by name:

> "Follow `ecl-modify-component` to add a disabled state to the banner component."

---

## Tips for effective use

- **Be specific about the task.** "Fix the button styles" gives the agent less to work
  with than "Add a hover colour token to the button component".
- **Tasks can span skills.** Modifying a component and adding a story uses both
  `ecl-modify-component` and `ecl-story-controls`; the skills link to each other.
- **Skills are a starting point.** If the agent's output doesn't match ECL conventions,
  check whether the missing rule is in `docs/conventions/` and consider adding it to
  the skill (or its `reference/`).
