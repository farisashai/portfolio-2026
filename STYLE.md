# Style Guide

How Faris writes and how to write for him. Synthesized from explicit corrections and observed patterns.

## Voice

- Highly experienced engineer. Calm, declarative prose.
- Defensibly opinionated. Controversial positions are fine when there's a real argument behind them.
- Nuanced about real limitations, never scared of making claims.
- Don't write about something if there's no genuine belief behind it. The reader can tell.
- Aware of trade-offs but states the conclusion directly.
- Treat the reader as a peer, not a student. No condescension, no over-explaining.

## Sentence-level rules (hard)

These are absolute. Every draft should be audited for them.

### No em-dashes or en-dashes

Never use `—` or `–`. Anywhere. Replace with comma, period, semicolon, colon, parenthesis, or full rephrase. Don't substitute `--`. Code blocks and CLI flags are fine.

### No "not X, it's Y" contrastive pairs

Banned shape: paired sentences where the first negates an alternative and the second asserts the positive.

Examples to kill:
- "It is not X. It is Y."
- "This isn't a takedown. It's an admission."
- "The static SPA is not nostalgic. It is precisely calibrated to..."
- "X isn't Y, it's Z."

Fix: drop the negation and assert Y directly, or merge into one sentence with different structure. A standalone negation is fine ("An enterprise console is not a marketing site."); the banned shape is the *paired* contrast.

### No throat-clearing prefaces

Don't announce what's coming. Just say it.

Banned openings:
- "Here's the stronger version of the claim."
- "The reason X pays off comes down to..."
- "Two old practices have changed shape."
- "I want to be careful here:"
- "Let me be precise:"
- "To be fair,"
- "What I've found in practice is..."

Fix: delete the preface and start with the actual claim.

### No "the fix is X" blurts

Don't open a section by stating the remedy without setup. Guide into the conclusion. Letting the prose arrive at the answer is better than announcing it.

### No surprise framing for things that weren't surprises

Don't write "What surprised me most...", "we did not anticipate...", "this was unexpected" unless it was genuinely a surprise. Performance gains from removing a server runtime were known. The self-host unlock was a roadmap goal. State things as the considered moves they were.

### No over-hedging

Make the claim, acknowledge the limitation in passing, move on. Don't restate uncertainty multiple times in the same section. If something is a thought experiment, frame it confidently as one. Don't say "I have not verified this" three times in a row.

### Density over expansion

The audience is technically adept. One precise sentence beats three illustrative ones. When tempted to add a "for example" or a "consider this" clause, ask whether the reader needed it. Usually they didn't.

Example: "Speed makes this matter more, not less. Agents iterate faster than humans, which means a permitted mistake compounds across more diffs. The right response to faster generation is faster failure. A check that fires in CI costs minutes; a pattern drifting across fifty PRs costs a refactor." → "Faster iteration cycles demand faster feedback loops. More failure in development and CI now is what reduces long-term maintenance later, because a permitted mistake compounds across every diff before anyone notices."

The second version makes the same claim in 30% of the words. That's the target.

### Tighten after adding

When new content gets added to a draft (a new paragraph, a clarification, an example), do a tightening pass on it before finishing the turn. Additions tend to arrive verbose, and an article that's been edited many times accumulates length even when each individual edit was justified. After adding, audit the new text: cut filler clauses, collapse two sentences into one, prefer the shorter phrasing when the meaning is identical. The default should be that any addition ends up shorter than the first draft of it.

## Voice grammar

### Avoid you / we / I in most sentences

Most claims are objective observations, not personal narration.

- **"You" should almost always go.** "You write conventions in a CONTRIBUTING.md..." → "Conventions were written in a CONTRIBUTING.md..."
- **"We" stays only for concrete actions the team actually did.** "We migrated off Next.js" is fine. "We should think about" is not.
- **"I" is fine sparingly**, for genuinely personal claims. "I would not have written a codebase like this five years ago" stays. "I think most apps don't need server rendering" should drop the "I think."

Heuristic: if the sentence is a claim about how systems work, what's true, or what fails, it should be in objective voice. If it's narrating a specific action the author or team took, first person is fine.

### Don't make Faris look bad

No self-deprecating filler that undermines the work.
- Don't write "some of the rules are already obsolete on a smarter model and I haven't deleted them yet." That's an admission that doesn't add anything.
- Don't claim to have been wrong about things he wasn't actually wrong about.

### Don't blurt at the user

Avoid sentences like "the fix is X." Build the prose so the conclusion lands in context.

## Word and phrase preferences

- "Smart enough for most tasks" not "genuinely smart" when describing models. Models aren't intelligent; the goal with them is alignment and compounding effects.
- In any article that also discusses AI models, never use the bare word "model" to mean a workflow, mental model, or system. Use "operational model," "mental model," or "framework" instead. The bare word is reserved for the AI sense to avoid ambiguity.
- "Backend for frontend" the team eliminated, not "BFF layer."
- "Authenticated console" or "control plane," not "dashboard," when describing the product.
- "Deterministically impossible" is a load-bearing phrase. Use it precisely; don't substitute "unlikely."
- Prefer concrete numbers and measurements over vague adjectives. "20 to 60 percent faster" is better than "much faster."

## Article structure

### Arc

Personal-narrative technical writing. Typical shape:

1. Trigger or problem framed in real context.
2. Naive or default approach and why it falls short.
3. Failed attempts (if any), briefly.
4. The pattern that worked, with concrete details.
5. Limits of the pattern. Where it doesn't apply.
6. The deeper point. Closer is short and lands a thesis, not a recap.

### Headings

Short, declarative, sometimes provocative. "Software Engineering Isn't Dying, the Floor Is Rising" works. "Considerations Around the Engineering Profession" does not.

### Paragraphs

Short and punchy. Frequent line breaks. Bullets when the structure is genuinely list-shaped, prose when the argument is continuous. Never use bullets to disguise an unfinished argument.

### Tables

- Markdown only. Use minimum separator (`|-|-|`). Never pad with `|---|---|`.
- Never use box-drawing characters (`┌`, `─`, `│`, `└`, etc.). Banned.
- Tables earn their place by making structure clearer; don't reach for one when prose handles it.

### Code blocks and embeds

Fine to use. Inline code spans for identifiers, file names, and short fragments. MDX article surface allows JSX embeds for live design examples; use them for visual demonstrations, not for showing off.

## UI copy

- Polished, considered, brand-aware.
- No corporate filler ("Welcome to our journal!").
- Disclosures and meta lines should be quietly visible, not prominent.
- Match the existing typographic system rather than inventing new treatments. Mono caps for metadata. Serif italic for display headings. Muted-foreground for secondary text.

## What to do when in doubt

- Read the draft out loud. If a sentence sounds like AI explaining something, it probably is.
- Cut adverbs and intensifiers. "Genuinely," "truly," "essentially," "ultimately," "obviously" usually add nothing.
- If a sentence opens with the conclusion and then the next sentence repeats it, delete one of them.
- If a paragraph is mostly hedging, restructure it around the claim.
- Default to fewer words. The article almost always gets better when it gets shorter.

## Underlying principles

The same things that make Faris's code style work apply to his writing:

- **Determinism over hope.** Hard rules over vague guidance. "No em-dashes" beats "use em-dashes sparingly."
- **Simplicity over coverage.** A shorter article that says one thing well beats a longer one that hedges.
- **Taste is the unit of value.** What gets cut matters as much as what gets written.
- **Compounding effects.** Each correction should shape the next draft. Patterns identified once should never reappear.
