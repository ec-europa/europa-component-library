# ECL Agentic Skills

Task-oriented guides for AI agents working on ECL. Each file describes how to approach
a specific recurring task — what to check, in what order, and what to avoid.

These are not reference documentation. For full details on any topic, follow the links
into `docs/conventions/` or `docs/decisions/`.

## Available skills

| Skill                                        | When to use                                                    |
| -------------------------------------------- | -------------------------------------------------------------- |
| [new-component.md](./new-component.md)       | Scaffolding a brand-new component from scratch                 |
| [modify-component.md](./modify-component.md) | Changing styles, markup, or behaviour of an existing component |
| [testing.md](./testing.md)                   | Running tests, handling snapshot updates, fixing axe failures  |
| [story-controls.md](./story-controls.md)     | Adding or modifying Storybook stories and controls             |

---

## How to use these skills

Skills are plain markdown files. Every AI tool can read them — the only difference is
how you point the tool to them.

### Claude Code

`AGENTS.md` at the repo root is loaded automatically by Claude Code at the start of
every session. It already references the skills table, so Claude knows where to look.

For a task-specific skill, you can also mention it explicitly in your prompt:

> "Add a new `disabled` parameter to the banner component.
> Follow the skill at `docs/agentic/modify-component.md`."

### Kiro

Open the relevant skill file and use **@mention** to include it in your prompt context,
or paste the file path directly into the chat.

A dedicated `ecl-skills` repository installable via `npx skills add` may be set up in
the future to make this seamless. For now, reference files manually.

### Cursor / GitHub Copilot / other tools

Paste the content of the relevant skill file into the chat, or reference it using
whatever context-inclusion mechanism your tool provides (e.g. `@docs/agentic/modify-component.md`
in Cursor).

You can also add `docs/agentic/` to your tool's project rules or custom instructions
so the skills are always in context.

---

## Tips for effective use

- **Name the skill explicitly.** "Fix the button styles" gives the agent less to work
  with than "Fix the button styles — follow `docs/agentic/modify-component.md`."
- **One skill per task.** If a task spans multiple skills (e.g. modifying a component
  _and_ adding a story), mention both files.
- **Skills are a starting point.** If the agent's output doesn't match ECL conventions,
  check whether the relevant convention is covered in `docs/conventions/` and consider
  adding it to the skill file.
