# Article Templates

This document defines the recommended article structure for each category.

Templates are guidelines, not rigid rules.
Adapt the structure when the source material requires a different flow.

Always prioritize:

**Correct > Clear > Concise**

Do not add sections that provide no value.

---

# 1. default

Use this template when the user does not specify a category or when the content does not clearly match another category.

## Goal

Explain a technical topic using the structure that best fits the source material.

## Recommended Structure

```text
Title

Introduction
→ Context
→ Core Concept
→ Explanation
→ Example or Implementation
→ Takeaway
```

## Template

```markdown
# {Title}

{Brief introduction explaining the topic and why it matters.}

## {Context or Problem}

{Introduce the situation, motivation, or background needed to understand the topic.}

## {Core Concept}

{Explain the central technical concept.}

## {Explanation}

{Explain how the concept works, including relevant details and reasoning.}

## {Example or Implementation}

{Provide a concrete example, code, diagram, or implementation details when useful.}

## Takeaway

{Summarize the most important insight the reader should remember.}
```

## Guidelines

- Prefer a natural flow over a fixed structure.
- Add or remove sections depending on the topic.
- Keep prerequisite explanations proportional to the target reader.
- Do not force the article into tutorial or troubleshooting format.
- Use examples when they improve understanding.
- Keep the article focused on one primary takeaway.

---

# 2. TIL

TIL stands for **Today I Learned**.

Use this category for short articles that record a useful technical discovery, concept, behavior, or lesson.

## Goal

Help the reader quickly understand one useful thing the author learned.

## Recommended Structure

```text
Title
→ Context
→ What I Learned
→ Example
→ Takeaway
```

## Template

```markdown
# {Title}

{Briefly explain what was learned and in what context.}

## What I Learned

{Explain the main technical insight.}

## Example

{Provide a short example, code snippet, command, or comparison when useful.}

## Why It Matters

{Briefly explain why this knowledge is useful or when it can be applied.}

## Takeaway

{Summarize the learning in one or two concise points.}
```

## Guidelines

- Focus on one primary learning.
- Keep background information minimal.
- Prefer a small concrete example.
- Avoid turning the article into a complete tutorial.
- Do not over-expand simple concepts.
- Remove sections when the article is sufficiently clear without them.
- Keep the conclusion short.

---

# 3. tutorial

Use this category when the reader should be able to follow the article and reproduce a result.

## Goal

Guide the reader from an initial state to a clearly defined result.

## Recommended Structure

```text
Title
→ Goal
→ Prerequisites
→ Overview
→ Step 1
→ Step 2
→ ...
→ Result
→ Common Issues
→ Conclusion
```

## Template

````markdown
# {Title}

{Briefly describe what the reader will build, configure, or achieve.}

## Goal

By the end of this article, you will:

- {Result 1}
- {Result 2}

## Prerequisites

Before starting, make sure you have:

- {Required environment}
- {Required version}
- {Required dependency}
- {Required prerequisite knowledge}

## Overview

{Briefly explain the overall approach before beginning the steps.}

## Step 1. {Step Name}

{Explain what needs to be done and why.}

```{language}
{code}
```
````

{Explain the important parts of the code or configuration.}

## Step 2. {Step Name}

{Continue with the next logical step.}

## Step 3. {Step Name}

{Continue as necessary.}

## Result

{Show or explain the expected final result.}

## Common Issues

### {Issue}

**Cause**

{Explain the likely cause.}

**Solution**

{Explain how to resolve it.}

## Conclusion

{Summarize what was implemented and the key concepts learned.}

````

## Guidelines

- Optimize for reproducibility.
- Clearly state environment and version requirements when relevant.
- Present steps in execution order.
- Do not skip essential setup.
- Explain why each important step is necessary.
- Show expected results after major milestones when useful.
- Prefer minimal working examples.
- Do not include unrelated theory unless it helps complete the tutorial.
- Mention version-specific behavior when applicable.
- Do not claim that code is runnable unless that can reasonably be verified.

---

# 4. trouble-shooting

Use this category when documenting how a technical problem was investigated, diagnosed, and solved.

## Goal

Help the reader understand both the solution and the reasoning process that led to it.

## Recommended Structure

```text
Title
→ Problem
→ Environment
→ Symptoms
→ Investigation
→ Failed Attempts
→ Root Cause
→ Solution
→ Why It Worked
→ Lessons Learned
````

## Template

````markdown
# {Title}

{Briefly describe the problem and its final cause or solution without revealing unnecessary details.}

## Problem

{Describe what was expected and what actually happened.}

### Expected

{Expected behavior}

### Actual

{Observed behavior}

## Environment

- {Operating system}
- {Framework / Engine}
- {Version}
- {Relevant hardware}
- {Relevant configuration}

Include only environment details that may affect the problem.

## Symptoms

{Describe observable symptoms, errors, logs, visual artifacts, crashes, or unexpected behavior.}

## Investigation

### Hypothesis 1: {Hypothesis}

{Explain why this was suspected.}

{Describe how it was tested.}

**Result:** {Confirmed / Rejected / Inconclusive}

### Hypothesis 2: {Hypothesis}

{Continue as necessary.}

## Failed Attempts

{Describe failed attempts only when they contributed useful information to the investigation.}

### {Attempt}

{What was tried}

**Result:** {What happened}

**What this revealed:** {What was learned}

## Root Cause

{Clearly explain the confirmed root cause.}

Explain the relationship between:

```text
Cause
→ Internal behavior
→ Observed symptom
```
````

Do not present an assumption as the root cause.

## Solution

{Explain the final fix.}

```{language}
{code}
```

{Explain the important changes.}

## Why It Worked

{Explain technically why the change resolves the root cause.}

## Lessons Learned

- {Lesson}
- {Debugging insight}
- {Preventive measure}

## Conclusion

{Briefly summarize the problem, root cause, and solution.}

````

## Guidelines

- Start with observable facts.
- Clearly separate symptoms, hypotheses, and confirmed causes.
- Preserve failed attempts when they contributed to diagnosis.
- Remove failed attempts that add no useful information.
- Prefer evidence over speculation.
- Include logs, errors, screenshots, or code only when they help explain the diagnosis.
- Explain why the final solution works.
- Do not confuse correlation with causation.
- Mention if the root cause remains uncertain.

---

# 5. deep-dive

Use this category when explaining how a technology, system, algorithm, engine feature, or architecture works internally.

## Goal

Help the reader understand the mechanism behind a technical system rather than simply how to use it.

## Recommended Structure

```text
Title
→ Overview
→ Motivation
→ Prerequisites
→ Architecture
→ Core Mechanism
→ Data Flow
→ Implementation Details
→ Trade-offs
→ Performance
→ Edge Cases
→ Takeaway
````

## Template

````markdown
# {Title}

{Introduce the technical subject and the main question the article will answer.}

## Overview

{Give the reader a high-level mental model of the system.}

## Why This Exists

{Explain the problem or design requirement that motivated the system.}

## Prerequisites

{Introduce only the concepts required to understand the rest of the article.}

## Architecture

{Describe the major components and their responsibilities.}

```text
{Component A}
    ↓
{Component B}
    ↓
{Component C}
```
````

{Explain the relationship between the components.}

## Core Mechanism

{Explain the central technical mechanism in detail.}

Focus on:

- state changes
- data transformations
- ownership
- execution order
- synchronization
- memory behavior
- CPU / GPU boundaries
- system responsibilities

Include only those that are relevant.

## Data Flow

{Explain how data moves through the system.}

```text
Input
→ Processing
→ Intermediate State
→ Output
```

## Implementation Details

{Explain important implementation details.}

```{language}
{code}
```

{Explain runtime behavior and important design decisions.}

## Trade-offs

### Advantages

- {Advantage}

### Limitations

- {Limitation}

### Alternatives

{Explain relevant alternatives and why a different design may be preferable in some situations.}

## Performance Considerations

{Discuss performance only when relevant and supported.}

Potential topics:

- time complexity
- memory usage
- allocations
- cache behavior
- synchronization
- CPU cost
- GPU cost
- bandwidth
- scalability

Do not invent performance numbers.

## Edge Cases

{Explain special conditions, limitations, or failure cases that are useful to understand.}

## Takeaway

{Summarize the system's most important mechanism and trade-off.}

````

## Guidelines

- Prioritize internal mechanisms over usage instructions.
- Explain why the system is designed this way.
- Build from a high-level mental model toward implementation details.
- Clearly distinguish conceptual behavior from implementation-specific behavior.
- Explain execution order when it matters.
- Use diagrams when relationships are difficult to describe with prose.
- Discuss alternatives and trade-offs.
- Avoid turning every deep-dive into a complete source-code walkthrough.
- Do not add theoretical background that does not help explain the mechanism.
- Do not invent undocumented internals.

---

# 6. review

Use this category when evaluating a technology, framework, library, tool, API, service, or development workflow based on actual usage or investigation.

## Goal

Help the reader decide whether the technology is appropriate for their situation.

## Recommended Structure

```text
Title
→ What It Is
→ Why I Used It
→ Evaluation Context
→ Experience
→ Strengths
→ Weaknesses
→ Comparison
→ Who It Is For
→ Verdict
````

## Template

```markdown
# {Title}

{Briefly introduce the technology and the overall context of the review.}

## What Is {Technology}?

{Explain what the technology is and what problem it is designed to solve.}

Keep this section factual.

## Why I Tried It

{Explain the author's reason for using or evaluating it.}

## Evaluation Context

Describe the conditions under which the technology was evaluated.

- Project type: {project}
- Environment: {environment}
- Version: {version}
- Usage period: {period if relevant}
- Primary use case: {use case}

Include only relevant information.

## Experience

{Describe how the technology was actually used.}

Focus on concrete observations rather than marketing claims.

## What Worked Well

### {Strength}

{Explain the benefit and the situation in which it was useful.}

## What Did Not Work Well

### {Weakness}

{Explain the limitation and its impact.}

## Comparison

|             | {Technology} | {Alternative} |
| ----------- | ------------ | ------------- |
| {Criterion} | {Evaluation} | {Evaluation}  |
| {Criterion} | {Evaluation} | {Evaluation}  |

Use comparisons only when they are meaningful and sufficiently supported.

## Who Is It For?

This technology may be appropriate when:

- {Situation}

It may not be appropriate when:

- {Situation}

## Verdict

{Give a balanced conclusion based on the evaluation context.}

Clearly distinguish personal judgment from factual claims.
```

## Guidelines

- Separate facts from personal evaluation.
- State the evaluation context.
- Explain strengths and weaknesses.
- Avoid universal conclusions from limited experience.
- Avoid repeating product marketing language.
- Support important judgments with concrete examples.
- Compare alternatives only when the comparison is fair.
- Explain who would and would not benefit from the technology.
- Mention relevant version information.
- Avoid arbitrary numeric scores unless the user requests them.

---

# Template Selection Rules

Use the category explicitly selected by the user.

If no category is specified:

```text
category = default
```

Do not automatically change `default` to another category unless the user asks the skill to recommend or classify the article type.

When the selected category conflicts with the source material, preserve the user's selected category and adapt the structure rather than silently changing it.

For example:

```text
Selected: tutorial
Source material: includes debugging history
```

The article may include a short troubleshooting section, but it should remain primarily a tutorial.

---

# Structure Adaptation

The templates above define recommended structures.

Do not blindly include every heading.

Remove a section when:

- there is no meaningful content for it
- it repeats another section
- it interrupts the article's natural flow

Add a section when:

- the topic requires additional prerequisite knowledge
- an important limitation needs explanation
- architecture or data flow needs separate treatment
- the user's source material contains important information that does not fit an existing section

The final structure should serve the article, not the template.

---

# Introduction Rules

The introduction should quickly answer:

1. What is this article about?
2. Why does it matter?
3. What will the reader learn?

Avoid generic introductions such as:

> Technology is developing rapidly these days.

> There are many ways to solve this problem.

> Developers often face many challenges.

Prefer concrete context.

Example:

> While implementing spot-light shadows, I initially reused the directional-light shadow pipeline. The shadow map itself was generated correctly, but the projected shadow became distorted as the light cone widened. The cause was the projection model: unlike a directional light, a spot light requires perspective projection.

---

# Heading Rules

Headings should describe the actual content of the section.

Prefer:

```text
Why Spot Lights Need Perspective Projection
```

over:

```text
Background
```

Prefer:

```text
The Root Cause Was an Incorrect FOV
```

over:

```text
Problem Analysis
```

Generic headings may be used when they improve consistency, but descriptive headings are preferred when possible.

---

# Conclusion Rules

Do not simply repeat the introduction.

A conclusion should provide one or more of the following:

- the main technical insight
- the final design decision
- the confirmed root cause
- an important trade-off
- a lesson that can be applied elsewhere

Keep conclusions concise.

---

# Code Placement

When code is necessary:

```text
Context
→ Code
→ Explanation
```

Explain:

- why the code exists
- what the important parts do
- how it behaves at runtime
- relevant assumptions or limitations

Do not explain every line when the behavior is already obvious.

Follow `references/code-blocks.md` for detailed code formatting rules.

---

# Final Rule

The article should never feel like text generated by filling empty sections in a template.

Use the template to create structure, then adapt that structure to the technical story being told.
