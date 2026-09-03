---
name: Code Block Style Guide
description: Code block formatting and explanation guidelines for Techwriter.
---

# Code Block Style Guide

Use code blocks only when they improve technical understanding.

The goal is to make code examples:

- easy to read
- technically correct
- focused on the relevant logic
- consistent throughout the article

## Core Rules

1. Always specify the language identifier when known.
2. Keep examples focused on the code relevant to the explanation.
3. Add comments only where they clarify important behavior.
4. Show execution results separately from source code.
5. For long code, include only the relevant sections.
6. Preserve the semantics of user-provided code.
7. Do not claim code is runnable unless it can reasonably be verified.

## Default Style

Use fenced code blocks with a language identifier.

```<language>
<code>
```

Example:

```cpp
int Add(int a, int b)
{
    return a + b;
}
```

## Language Identifiers

Use commonly supported Markdown language identifiers.

| Language     | Preferred Identifier |
| ------------ | -------------------- |
| JavaScript   | `javascript`         |
| TypeScript   | `typescript`         |
| Python       | `python`             |
| HTML         | `html`               |
| CSS          | `css`                |
| SCSS         | `scss`               |
| JSON         | `json`               |
| YAML         | `yaml`               |
| Bash / Shell | `bash`               |
| SQL          | `sql`                |
| Go           | `go`                 |
| Rust         | `rust`               |
| Java         | `java`               |
| Kotlin       | `kotlin`             |
| Swift        | `swift`              |
| C            | `c`                  |
| C++          | `cpp`                |
| C#           | `csharp`             |
| PHP          | `php`                |
| Ruby         | `ruby`               |
| Dockerfile   | `dockerfile`         |
| Markdown     | `markdown`           |
| Plain text   | `text`               |

Use another valid identifier when the language is not listed.

Do not use an incorrect identifier only because it appears in this table.

## Inline Code

Use inline code for:

- variable names
- function names
- class names
- API names
- commands
- file paths
- short expressions

Example:

Use `console.log()` to print a value.

Prefer:

```markdown
Call `GetWorld()` before accessing the current world.
```

Avoid using a fenced code block for a single identifier or short expression.

## Code Explanation

Use the following order when presenting important code:

```text
Context
→ Code
→ Explanation
```

Explain:

- why the code is needed
- what the important parts do
- how the code behaves at runtime
- relevant assumptions or limitations

Do not explain every line when the behavior is already obvious.

## Comments

Use comments to clarify non-obvious logic.

Example:

```cpp
// Convert the light's outer cone angle to a full perspective FOV.
const float Fov = OuterConeAngle * 2.0f;
```

Avoid comments that simply repeat the code.

Avoid:

```cpp
// Add one to count.
Count += 1;
```

Comments should explain **why**, not merely restate **what**.

## Execution Output

Keep program output separate from the source code.

Example:

```javascript
console.log("Hello, World!");
```

Output:

```text
Hello, World!
```

Do not mix source code and execution output inside the same code block unless the format naturally requires it, such as an interactive shell session.

## Terminal Commands

Use `bash` for terminal commands when appropriate.

```bash
npm install axios
npm run dev
```

When a command is platform-specific, state the expected environment when relevant.

Example:

```bash
# macOS / Linux
rm -rf node_modules
```

Avoid excessive comments for obvious commands.

## File Names

When the file location matters, show the file path immediately before the code block.

Example:

`src/components/Button.tsx`

```typescript
export const Button = () => {
    return <button>Click me</button>;
};
```

Keep file paths in inline code.

Do not place the file name after the code block unless the surrounding explanation makes that clearer.

## Code Differences

When showing changes between two versions, prefer a `diff` block.

```diff
- const oldValue = "old";
+ const newValue = "new";
```

For larger changes, include enough surrounding context to make the modification understandable.

Do not manually add `+` and `-` markers to a normal language block such as `javascript` or `cpp`.

## Long Code

Avoid large code dumps.

Show only the sections necessary to explain the topic.

Example:

```javascript
// ...

function processData(data) {
    return data.map((item) => item.value * 2);
}

// ...
```

Use comments such as `// ...` only when they clearly indicate omitted code.

Do not omit code required to understand the behavior being discussed.

If the user provides a valid link to the complete source, it may be referenced after the example.

Example:

```markdown
Full implementation: [GitHub](...)
```

Never invent a repository or source-code URL.

## Multiple Code Blocks

Split code into multiple blocks when they represent:

- different files
- different execution stages
- before / after states
- client / server code
- CPU / GPU code
- configuration / implementation

Do not split code merely to make the article appear shorter.

Each code block should have a clear purpose.

## Before and After

For substantial changes, clearly label the original and modified versions.

### Before

```cpp
RawPointer = Object;
```

### After

```cpp
ObjectPointer = Object;
```

Then explain the behavioral difference.

For small line-level modifications, prefer a `diff` block instead.

## Pseudocode

Use `text` or a clearly identified pseudocode block when actual source code would introduce unnecessary implementation detail.

```text
Input
→ Validate
→ Process
→ Store Result
```

Do not present pseudocode as executable code.

## Error Messages and Logs

Use `text` for errors, logs, and console output unless another identifier is more appropriate.

```text
ModuleNotFoundError: No module named 'tensorflow'
```

Preserve important error text exactly when analyzing a specific failure.

Remove irrelevant log noise when it does not contribute to the explanation.

## Code Correctness

Before presenting code:

- check syntax when possible
- preserve the correct API names
- preserve ownership and lifetime semantics
- preserve execution order
- preserve thread assumptions
- preserve language and framework conventions

If code is conceptual or incomplete, state that clearly.

Example:

> The following code is simplified to illustrate the ownership model.

Do not disguise pseudocode or incomplete snippets as production-ready code.

## Highlighting Important Code

Prefer reducing the example to the important lines rather than using artificial emphasis inside code.

Do not use Markdown bold or italic syntax inside source code to highlight lines.

Prefer:

```cpp
const float Fov = OuterConeAngle * 2.0f;
```

with an explanation immediately afterward.

For changes, use `diff`.

## Checklist

Before finalizing an article containing code, verify:

- [ ] Correct language identifiers are used.
- [ ] Code syntax is valid when possible.
- [ ] Important API and function names are correct.
- [ ] Unnecessary code has been removed.
- [ ] Essential context has not been removed.
- [ ] Comments explain non-obvious behavior.
- [ ] Execution output is separated from source code.
- [ ] File paths are shown when relevant.
- [ ] Indentation and formatting are consistent.
- [ ] User-provided code semantics have not been silently changed.
- [ ] Conceptual or incomplete code is labeled appropriately.
- [ ] No source-code links have been invented.
