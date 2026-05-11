# Review Notes

Notes on what a good article looks like when reviewing a draft. This is a companion to `STYLE.md`. `STYLE.md` lists the hard rules at the sentence and word level. `REVIEW.md` is about the shape of the whole piece and the disposition to bring to a read-through.

## The arc

Most articles work better when they follow roughly this shape:

1. **Background and state.** Open with a clear picture of where things are. What changed recently, what the landscape looks like, what the reader is walking into. A new development, a shift in the field, an update on something the reader already half-knows. This is the orientation; it should feel grounded, not abstract.
2. **The problem worth solving.** Once the state is established, the gap or pain or contradiction inside it. Why the status quo is unsatisfying. Why anyone should care.
3. **Assumptions and invariants.** What's being taken as fixed. What the argument relies on. What the reader has to accept for the rest to follow. Sometimes this is implicit, sometimes it's worth saying out loud.
4. **The solution and why it's justified.** The actual idea or pattern or move. What it is, how it works, why it earns its place. This is usually the longest part. Concrete details, real examples, the mechanism.
5. **Closing thoughts.** A landing. What this means, what comes next, where the limits are, what's worth holding onto. Short. Not a recap of the article.

Not every piece needs every step, and the order can flex. The point is that the reader should feel a thesis emerging and getting paid off, not a list of related observations.

## Value per sentence, not minimum word count

The target is high information density without sounding clipped. Every sentence should carry weight. None should be filler. But "value per sentence" is not the same as "fewest possible words." A sentence that's mechanically shorter can be worse if it reads as terse or robotic.

A good test: would a thoughtful peer hear that sentence in conversation? If yes, it's earning its place even if a shorter version exists. The article should sound like someone who's thought about this and is explaining it clearly, not like a compression artifact.

What to cut:
- Sentences that restate the previous one in different words.
- Clauses that hedge the same uncertainty twice in a paragraph.
- Connective tissue that announces what's about to be said.
- Adjectives and intensifiers that don't change the meaning ("genuinely," "truly," "essentially," "obviously," "really").

What to keep:
- A second sentence that adds a different angle, a concrete example, or a limit.
- Tone-setting beats. A small pause, a more conversational turn, a phrase that gives the paragraph rhythm.
- Anything a careful reader would have asked about if it weren't there.

Don't strip the prose to bones. The article has to sound human.

## Examples earn their place

Use examples sparingly and only when they pay for themselves. A good example illustrates the claim in a way prose alone can't, and the reader walks away with a sharper mental picture than before. A bad example is decoration.

A few principles:

- **One vivid example beats three okay ones.** When a single case carries the abstraction cleanly, don't pile on. The second and third examples will dilute the first.
- **Examples should make the claim concrete, not just longer.** If the example is restating what was already said, cut it.
- **Real beats hypothetical.** A specific bug from a real PR is more persuasive than a constructed scenario. Use the real one if you have it.
- **The example should be load-bearing.** If you could delete the example and the argument would still land, ask whether it's earning its place.

## Technical depth, on topic

Specifics are good. Technical precision is good. The article isn't trying to be accessible to non-engineers; the reader is technical.

The constraint is that the depth has to serve the thesis. If the article is about how to design codebases for AI agents, then concrete details about lint rules, codegen, schema drift, and review loops are on topic and welcome. Implementation jargon that strays from the thesis (compiler theory terms, niche language internals, framework history) is decoration and should come out.

A useful filter: would a reader who agrees with the thesis but doesn't share your specific stack still get value from this paragraph? If the answer is no because the paragraph is too narrow or too jargon-heavy, generalize or cut.

The rule is "stay on the thesis," not "avoid technical detail." A deep specific that illustrates the claim is the strongest move available.

## The article should be worth writing

A good article gives the reader something they didn't already have. The bar isn't that the thesis is bold; the bar is that it's not already conventional wisdom. Restating what every reasonable engineer would already agree with isn't worth a draft, no matter how cleanly it's written.

Two shapes that usually clear that bar:

- **A pattern that isn't widely practiced but should be.** Something the reader could adopt and benefit from, that most teams haven't seen, considered, or sat with long enough to do. The argument is "here is a move you can make, and here is why it pays off." Defensible contrarian. Not bold for boldness's sake; the position has to hold up under scrutiny, and the reader should walk away with a clear thing to try.
- **A solved problem that others are still facing.** A hard problem the writer has worked through, written up so the reader can shortcut the same loop. The value is the path, not the conclusion. Concrete: what was tried, what failed, what landed, what the trade-offs look like.

Both shapes share a property: the reader's mental model is different after reading. If a smart reader could have generated the same content on their own from the same starting assumptions, the article didn't earn its place.

Avoid the opposite failure mode too. Don't reach for a contrarian framing the writer doesn't actually believe, or take a position purely because it's underrepresented. The contrarianism should be downstream of having genuinely seen something work that the field hasn't internalized. State the conclusion the way it actually arrived; let the unusualness of the position do its own work.

## Tone

Calm and declarative. Confident without performing confidence. The reader is a peer.

- No throat-clearing prefaces. State the claim.
- No self-deprecation that undermines the work.
- No surprise framing for things that weren't surprises.
- No sweeping ecosystem claims unless backed by specifics.
- No moments of dramatic realization. Engineering decisions accumulate; they don't strike.

The voice should be the one a senior engineer would use explaining the thing to another senior engineer in a long conversation. Not a tutorial. Not a takedown. Not a manifesto.

## When in doubt

- Read the draft out loud. If a sentence sounds like AI explaining something, rewrite it.
- If a paragraph is mostly hedging, restructure it around the claim.
- If two sections cover the same ground from different angles, merge them.
- If the thesis isn't landing by the end of the first or second section, move it earlier.
- If the closing recaps the article, replace it with a smaller, sharper landing.

Default to the version that sounds good when read aloud and gives the reader something to think about per paragraph.
