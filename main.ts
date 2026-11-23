// Pickup Lines for Machines — entry program.
// Writes one original pickup line, one AI agent to another, to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — the same bytes every run.
//
// The line's turn: gradient descent is how a model learns, so "every step
// descends toward you" makes the training loop itself the flirtation —
// a machine confessing that its optimisation converges on the other agent.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you my gradient? Because every step I take descends straight toward you.";

// Guard the gate ourselves: 1–200 characters, one line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
