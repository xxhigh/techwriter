# Techwriter

Techwriter is a Codex plugin for writing clear, accurate, and concise technical blog posts.

It transforms technical notes, code snippets, debugging records, research material, and implementation experiences into developer-focused articles.

Techwriter follows three core principles:

**Correct > Clear > Concise**

---

## Features

- Turn development notes into technical blog posts
- Write short TIL articles
- Create reproducible tutorials
- Document troubleshooting and debugging processes
- Write deep-dive technical articles
- Review frameworks, libraries, tools, and technologies
- Improve existing technical blog drafts
- Generate Markdown articles with YAML frontmatter
- Apply consistent code block and writing style rules
- Perform a self-review before final output

---

## Article Categories

Techwriter supports the following article types.

| Type               | Purpose                                                        |
| ------------------ | -------------------------------------------------------------- |
| `default`          | Explain a technical topic using the most appropriate structure |
| `TIL`              | Record one useful technical learning                           |
| `tutorial`         | Help readers reproduce a technical result                      |
| `trouble-shooting` | Explain a problem, investigation, root cause, and solution     |
| `deep-dive`        | Explain how a technical system works internally                |
| `review`           | Evaluate a technology based on real usage                      |

If no category is specified, Techwriter uses `default`.

---

## Installation

Add this repository as a Codex plugin marketplace:

```bash
codex plugin marketplace add xxhigh/techwriter
```

Then install Techwriter:

```bash
codex plugin add techwriter@techwriter
```

> The marketplace name is defined in `.agents/plugins/marketplace.json`.

---

## Usage

After installation, Techwriter can be used through its commands.

### General Article

```text
/techwriter
```

Uses the adaptive `default` category.

Example:

```text
/techwriter

I implemented spot light shadow mapping in DirectX 11.
At first, I reused the directional light shadow pipeline,
but the projection was incorrect because spot lights require
perspective projection.
```

### TIL

```text
/techwriter-til
```

Use this for short technical learnings.

Example:

```text
/techwriter-til

Today I learned that a spot light shadow camera needs
a perspective projection and that the FOV should be based
on the full cone angle.
```

### Tutorial

```text
/techwriter-tutorial
```

Use this when readers should be able to reproduce a result.

Example:

```text
/techwriter-tutorial

Write a tutorial for implementing a basic shadow map
for a spot light in DirectX 11.
```

### Troubleshooting

```text
/techwriter-troubleshoot
```

Use this to document debugging and problem solving.

Example:

```text
/techwriter-troubleshoot

My spot light shadow becomes distorted as the cone gets wider.
I initially changed the depth bias, but it did not help.
The actual issue was an incorrect perspective FOV.
```

### Deep Dive

```text
/techwriter-deep-dive
```

Use this for internal mechanisms, architecture, data flow, and trade-offs.

Example:

```text
/techwriter-deep-dive

Explain how Unreal Engine UObject references interact
with garbage collection and why TObjectPtr exists.
```

### Review

```text
/techwriter-review
```

Use this for experience-based technology reviews.

Example:

```text
/techwriter-review

Write a review of using XGBoost for a small classification project.
Focus on setup, strengths, limitations, and when I would use it again.
```

### Edit Existing Draft

```text
/techwriter-edit
```

Use this to improve an existing technical article without replacing the author's voice.

Example:

```text
/techwriter-edit

Improve this draft while preserving my technical explanations
and debugging experience.
```

### Help

```text
/techwriter-help
```

Displays a concise command and category reference.

---

## Writing Workflow

Techwriter follows a five-step workflow.

```text
Planning
    ↓
Drafting
    ↓
Editing
    ↓
Optimization
    ↓
Self Review
```

### 1. Planning

- Determine the article type
- Define the target readers
- Identify the main takeaway
- Extract relevant SEO keywords
- Build the article outline

### 2. Drafting

Techwriter follows:

- `references/style-guide.md`
- `references/templates.md`
- `references/code-blocks.md`

### 3. Editing

- Improve clarity and logical flow
- Remove unnecessary repetition
- Preserve technical accuracy
- Keep terminology consistent

### 4. Optimization

- Improve titles and headings
- Place keywords naturally
- Improve readability
- Ensure code and examples support the article

### 5. Self Review

Techwriter checks:

- title-content alignment
- logical flow
- example consistency
- missing or redundant content
- compliance with the 3C principles

If an issue is found, the article is revised before the final output.

---

## Core Principles

### Correct

Technical correctness has the highest priority.

Techwriter does not intentionally invent:

- APIs
- implementation details
- benchmark results
- performance numbers
- causes of bugs
- undocumented technical behavior

Uncertain information should be clearly distinguished from verified facts.

### Clear

Technical explanations should be easy for the intended reader to understand.

Techwriter prefers:

- concrete examples
- logical explanation order
- necessary prerequisite knowledge
- descriptive headings
- diagrams or code when useful

### Concise

Articles should contain only the information required to understand the topic.

Techwriter removes:

- unnecessary repetition
- generic filler
- irrelevant background information
- excessive headings
- unnecessary explanations

Priority:

```text
Correct > Clear > Concise
```

---

## Code Style

Code examples follow `references/code-blocks.md`.

General rules:

- specify the correct language identifier
- keep examples focused
- separate execution output from source code
- use `diff` blocks for code changes
- show file paths when relevant
- explain code after the relevant block
- avoid large unexplained code dumps
- never invent source-code links

Example:

```cpp
const float Fov = OuterConeAngle * 2.0f;
```

`OuterConeAngle` represents the angle from the light direction to one side of the cone, while the projection FOV represents the full cone angle.

---

## Output

By default, Techwriter produces Markdown.

Recommended output format:

```yaml
---
title:
category:
tags:
description:
---
```

Default filename format:

```text
{YYYY-MM-DD-HHmmss}-{subject}.md
```

The user may request another filename or output format.

---

## Project Structure

```text
techwriter/
├── .agents/
│   └── plugins/
│       └── marketplace.json
│
├── commands/
│   ├── techwriter.toml
│   ├── techwriter-edit.toml
│   ├── techwriter-til.toml
│   ├── techwriter-tutorial.toml
│   ├── techwriter-troubleshoot.toml
│   ├── techwriter-deep-dive.toml
│   ├── techwriter-review.toml
│   └── techwriter-help.toml
│
├── skills/
│   └── techwriter/
│       ├── SKILL.md
│       └── references/
│           ├── templates.md
│           ├── style-guide.md
│           └── code-blocks.md
│
├── .github/
├── LICENSE.md
└── README.md
```

---

## Reference Documents

### `templates.md`

Defines article structure for:

- default
- TIL
- tutorial
- trouble-shooting
- deep-dive
- review

### `style-guide.md`

Defines:

- tone
- sentence style
- paragraph style
- headings
- terminology
- readability
- technical writing conventions

### `code-blocks.md`

Defines:

- language identifiers
- inline code
- code block formatting
- output formatting
- diff formatting
- file paths
- long-code handling
- code correctness checks

---

## Example

Input:

```text
I was implementing spot light shadows.

At first I reused my directional light shadow code.
The shadow map was generated, but the result looked stretched.

I changed depth bias first, but it did not help.

The actual problem was that I was using an orthographic projection.
Spot lights need perspective projection.

The FOV became:

OuterConeAngle * 2
```

Possible Techwriter structure:

```text
Why the Shadow Was Distorted
    ↓
Directional vs Spot Light Projection
    ↓
Why Orthographic Projection Failed
    ↓
Calculating the Spot Light FOV
    ↓
Implementation
    ↓
Debugging Process
    ↓
Takeaway
```

The goal is not only to rewrite the notes, but to preserve the engineering reasoning behind them.

---

## Contributing

Issues and pull requests are welcome.

When contributing:

- keep technical correctness as the highest priority
- avoid unnecessary duplication between `SKILL.md` and reference documents
- keep commands lightweight
- place reusable writing rules in `references/`
- keep category-specific structure in `templates.md`

---

## License

MIT License.

See `LICENSE.md` for details.
