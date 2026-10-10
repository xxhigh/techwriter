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

## Evaluation

To check whether the skill changes the output in a measurable way, 50 Korean blog requests were each run twice with the skill and twice without it: 200 articles, 100 blind pairs. Both conditions used Claude Sonnet as the writing model and received only the request plus "save the article as one `.md` file". The requests cover every category the skill supports (TIL 9, tutorial 9, trouble-shooting 8, deep-dive 8, review 8, default 8) and range from a two-line TIL to a full deployment tutorial.

### Rule compliance (automated)

Each rule below is taken from `SKILL.md`, `style-guide.md`, `code-blocks.md` or `templates.md` and checked with a regex-based script over all 100 articles per condition. Category-structure rules apply only to the articles of that category.

| Rule (source) | With skill | Without skill |
|---|---|---|
| Frontmatter has `title`, `category`, `tags`, `description` | 100% | 0% |
| Title length 30–60 chars | 89% | 89% |
| Meta description 100–160 chars | 47% | 0% |
| 3–8 tags | 100% | 0% |
| Every code block has a language identifier | 95% | 56% |
| Execution output kept out of source blocks | 100% | 99% |
| No manual `+`/`-` markers outside `diff` blocks | 100% | 100% |
| No template residue such as `{Title}` | 100% | 100% |
| Self-review table not included in the article | 100% | 100% |
| No filler / generic-AI phrases (style guide 3, 20, 29) | 100% | 100% |
| No unsupported-certainty words (style guide 12) | 100% | 99% |
| No generic headings like "Background" (style guide 15) | 100% | 99% |
| No nominalized / double-passive Korean (style guide 27) | 96% | 99% |
| Identifiers in prose use inline code, 80%+ (style guide 14) | 77% | 67% |
| Has a Takeaway / Conclusion section | 99% | 94% |
| Section headings in the article language (style guide 26) | 98% | 98% |
| TIL: "What I Learned" section | 94% | 22% |
| Tutorial: Prerequisites section | 100% | 67% |
| Tutorial: numbered steps | 100% | 100% |
| Trouble-shooting: Root Cause section | 100% | 100% |
| Trouble-shooting: Solution section | 100% | 100% |
| Trouble-shooting: "Why It Worked" section | 94% | 0% |
| Deep-dive: Trade-offs section | 88% | 19% |
| Deep-dive: Architecture / Data Flow section | 25% | 25% |
| **All rules (mean per article)** | **93%** | **73%** |

### Blind pairwise comparison

Claude Opus judged each of the 100 pairs without knowing which article used the skill (A/B order randomized), scoring seven dimensions from 1 to 5 and picking a winner.

| Result | With skill | Without skill |
|---|---|---|
| Wins (100 pairs) | **98** | 1 (ties: 1) |

Judge confidence: 36 high, 60 medium, 4 low.

| Category | Pairs | Skill wins | No-skill wins | Ties |
|---|---|---|---|---|
| TIL | 18 | 18 | 0 | 0 |
| tutorial | 18 | 17 | 0 | 1 |
| trouble-shooting | 16 | 16 | 0 | 0 |
| deep-dive | 16 | 16 | 0 | 0 |
| review | 16 | 16 | 0 | 0 |
| default | 16 | 15 | 1 | 0 |

| Dimension (mean, 1–5) | With skill | Without skill |
|---|---|---|
| technical accuracy | 4.73 | 4.08 |
| clarity | 4.80 | 4.52 |
| concision | 4.05 | 3.72 |
| structure | 4.84 | 4.03 |
| code quality | 4.62 | 3.58 |
| fit to request | 4.62 | 3.83 |
| publish readiness | 4.61 | 2.19 |

### Cost

| Condition (mean per article) | Time | Tokens | Length |
|---|---|---|---|
| With skill | 66 s | 55k | 5,488 chars |
| Without skill | 55 s | 43k | 5,696 chars |

### What the numbers say

- **Publishability is the largest difference.** Without the skill, not one of 100 articles had frontmatter, 56% tagged every code block with a language, and the category sections the templates call for ("What I Learned", "Why It Worked", "Trade-offs") appeared in a minority of articles. The judge named missing frontmatter as the deciding factor in most no-skill losses.
- **The skill reduces invented facts.** The judges repeatedly flagged no-skill articles for stating experiences, numbers or command outputs the author never supplied, and credited skill articles for marking what was not measured. This shows up as the fit-to-request gap (4.62 against 3.83).
- **Technical accuracy improved modestly** (4.73 against 4.08). Both conditions made real errors; the skill does not replace fact-checking.
- **The skill does not make articles longer.** Skill articles are slightly shorter and have fewer headings; the difference is structure, not volume. No-skill articles often went deeper on a topic and lost on concision.
- **Rules the skill still does not enforce reliably:** the meta description lands in the 100–160 range only 47% of the time (most misses are just under 100 characters), 77% of articles wrap 80% or more of their identifiers in inline code, and only 25% of deep-dives have a separate Architecture or Data Flow section. A bundled check script would be the next step.
- **Cost.** Skill articles take about 21% more time and 29% more tokens, because the model reads the reference files before writing.

### Limitations

- One judge model, one verdict per pair. The confidence split above is the judge's own estimate.
- The judge rewards frontmatter and structure heavily. A reader who only cares about the body text would see a smaller gap.
- The baseline is "no instructions at all". Adding a line like "include frontmatter and tag every code block" to the request would close part of the gap; the skill's value is that those instructions travel with it.
- Rule checks are regex heuristics and measure form, not substance. The blind comparison is the only quality signal here.

The evaluation scripts and generated articles are not part of the repository.

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
