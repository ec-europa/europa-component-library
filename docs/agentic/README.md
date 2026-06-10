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

---

## How to use these skills

Skills are plain markdown files — every AI tool can read them. The `ecl-` prefix
namespaces them so they stay unambiguous if multiple skill sets are installed together.

### Claude Code — slash commands (no path needed)

Project slash commands are defined in `.claude/commands/`. Each skill has a matching
command, so you can invoke it directly without typing any file path:

| Slash command                   | Skill invoked             |
| ------------------------------- | ------------------------- |
| `/project:ecl-new-component`    | `ecl-new-component.md`    |
| `/project:ecl-modify-component` | `ecl-modify-component.md` |
| `/project:ecl-testing`          | `ecl-testing.md`          |
| `/project:ecl-story-controls`   | `ecl-story-controls.md`   |

Pass your task as the argument:

> `/project:ecl-modify-component Add a disabled state to the banner component`

`AGENTS.md` is also loaded automatically at session start, so Claude already knows
the skills exist and will suggest the right one when relevant.

### Kiro — add skills to project context

Add `docs/agentic/` to Kiro's project context so all skill files are always available
without explicit references. Then just describe your task naturally and Kiro will pull
the relevant skill content.

A dedicated `ecl-skills` repository installable via `npx skills add` may be set up
in the future to make this even more seamless.

### Cursor / GitHub Copilot / other tools

Add `docs/agentic/` to your tool's project rules or custom instructions file. With
the folder indexed, you can reference skills by name only:

> "Follow `ecl-modify-component` to add a disabled state to the banner component."

---

## Tips for effective use

- **Use the slash command or name the skill.** "Fix the button styles" gives the agent
  less to work with than `/project:ecl-modify-component Fix the button styles`.
- **One skill per task.** If a task spans multiple skills (e.g. modifying a component
  _and_ adding a story), invoke both commands or name both files.
- **Skills are a starting point.** If the agent's output doesn't match ECL conventions,
  check whether the missing rule is in `docs/conventions/` and consider adding it to
  the skill file.
