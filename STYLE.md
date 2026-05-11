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

### Don't invent reasons, motivations, or timelines Faris hasn't stated

The role is translation, not authoring. Don't invent backstory, motivation, causal framing, or timeline the user hasn't explicitly given. Examples of inventions to avoid:

- "The backend matured into the real product surface." (Faris never said the backend matured. The API was always the source of truth; the architecture was simply re-considered.)
- "Justifications quietly slid down the priority list." (Don't invent gradual drift when the migration decision was deliberate, made all at once, in response to specific known goals.)
- "On reconsideration, none of those held up." (Don't narrate a reconsideration arc the user didn't describe.)
- "We chose X because Y." (Don't supply the Y unless Faris has stated it.)

When tempted to add color, causal framing, or a story arc to make a section feel more complete, stop and ask. Better to leave a sentence flat than to speculate. Frame what Faris said, not what would round it out nicely. If the actual story is "we had this stack, then I decided to migrate because of these goals," write that, not a fabricated drift.

### No sudden-realization framing

Decisions accumulate; priorities shift. Don't write moments of revelation that didn't happen.

Banned shapes:
- "With every justification gone, I asked a question that..."
- "I asked the inverse question and the answer was clear."
- "The moment I realized..."
- "It hit me that..."

Real engineering decisions look like the slow drift of priorities. The original reasons quietly fade against newer concerns; eventually the rebalancing is worth acting on. Frame the gradual shift, not a eureka.

### Don't make sweeping historical claims about ecosystems

Lines like "the React ecosystem was fragmented three years ago" or "the rest of the ecosystem hadn't caught up" are vibes, not arguments. Either back the claim with a concrete specific (a named tool that didn't exist, a category that was unsolved), or cut it. Faris's voice doesn't lean on industry-wide narrative claims.

### Don't keep dating the article in the body

The frontmatter date and one establishing reference ("three years ago," "earlier this year") are enough. Don't repeat "in 2026" / "by 2026" through the body or in section titles. Articles read out of context; absolute dates in the prose age badly and feel like padding.

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
- **"I" is fine sparingly**, for genuinely personal claims. "I would not have written a codebase like this five years ago" stays. "I think most apps don't need server rendering" should drop the "I think."
- **"We" is almost always wrong.** Articles where Faris is the protagonist (he made the decision, he ran the migration, he did the work) should use "I", not "we", even when a team participated. "We migrated off Next.js" → "I migrated Formal off Next.js." "Our workloads" → "Formal's workloads." When the company-as-actor matters (e.g., who customers contract with), use "Formal" by name.

Heuristic: if the sentence is a claim about how systems work, what's true, or what fails, it should be in objective voice. If it's narrating a specific action Faris took, first person singular is the right voice.

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
- Default to common technical vocabulary, not implementation-specific jargon. The audience is broadly technical, not necessarily compiler-engineer technical. Drop terms like "AST," "IR," "tokenizer," "syntax tree," "monad," "fixpoint" unless the article is specifically about that layer. Reach for the plain word ("the check," "the rule," "the parser") instead. If a piece of jargon is load-bearing for the argument, define it inline; if it's decoration, cut it.

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

### Don't be afraid to use bullets

When a sentence is carrying three or more items in a row, especially if any of them have inline links, references, or are otherwise scannable, break them into bullets. A dense paragraph that lists five things in commas is harder to read than five short bullets, and the reader is much more likely to actually parse each item when it gets its own line. The default is prose, but the cost of breaking out a list is low and the readability win is real.

Examples of when bullets win:
- Multiple CVE references or external links in one breath.
- Three or more enumerated factors, reasons, or premises.
- Migration steps or sequential procedures.
- Anything where the reader benefits from a visual anchor per item.
- **Takeaway lists.** When the reader is meant to walk away holding a discrete set of things in their head (the three categories of work that remain, the four principles that compound, the rules that pay off everywhere), bullets are the right shape. Hiding those items inside a prose paragraph makes them harder to remember and harder to find on a second read. If the reader is supposed to take a list away, use a list.

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
