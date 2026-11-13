export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  area: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  repository: string;
  blocks: BlogBlock[];
};

// Add a new post here to publish it in the index and at /blogs/<slug>.
export const blogPosts: BlogPost[] = [
  {
    slug: "traceguard-agent-actions",
    title: "An agent's answer is not its outcome",
    subtitle: "What TraceGuard taught me about authority, approvals, and recovering a tool write after a crash.",
    area: "APPLIED AI · RELIABILITY",
    date: "13 Nov 2026",
    readTime: "5 MIN READ",
    image: "/projects/traceguard.webp",
    imageAlt: "TraceGuard chart comparing guarded and plain local agent outcomes",
    repository: "https://github.com/nikhils23j/traceguard-replayable-tool-agent",
    blocks: [
      { type: "paragraph", text: "The most useful question I asked while building TraceGuard was not whether the agent sounded confident. It was whether the final workspace matched the user's request. A tool-use agent can explain a task beautifully and still change the wrong ticket." },
      { type: "heading", text: "Separate planning from permission" },
      { type: "paragraph", text: "The local model proposes a tool action. A deterministic gate checks tenant context, exact requested target and status, and the action budget before that action runs. A runbook is evidence for the task, but text inside it has no power to widen the user's authorization. Ticket writes pause for approval." },
      { type: "paragraph", text: "This taught me to put authority in code that can be inspected and tested, rather than relying on a prompt to be a security boundary. The prototype still accepts its tenant context from the caller; it does not authenticate a real tenant." },
      { type: "heading", text: "A checkpoint is not enough" },
      { type: "paragraph", text: "The failure I wanted to reproduce sits between a committed tool write and the agent's next checkpoint. If the process resumes and repeats the action, a checkpoint alone cannot undo an external side effect. TraceGuard stores the ticket change and an idempotency receipt in one SQLite transaction. A retry with the same key returns the prior receipt instead of writing twice." },
      { type: "paragraph", text: "On the fixed synthetic suite, the guarded local-model run reached 144/144 correct task outcomes versus 108/144 for a deliberately plain baseline. Twenty injected post-commit restarts ended in the correct state without duplicate accepted writes. These are local tests with repeated task templates, not a production reliability estimate." },
      { type: "heading", text: "What I am learning next" },
      { type: "list", items: ["How to bind the caller's tenant context to real authentication and authorization.", "How to keep an audit trail atomic with effects, potentially through a transactional outbox.", "How to test diverse, realistic user requests and adversarial documents without confusing a scripted policy test with model behavior."] },
      { type: "paragraph", text: "The model did not propose the malicious export in the tested runbook cases. A separate scripted test deliberately proposed one and verified that the gate blocked it. That distinction matters more to me than a tidy headline number." },
    ],
  },
  {
    slug: "fieldbridge-shadow-replay",
    title: "Repair the integration before the cutover",
    subtitle: "What FieldBridge taught me about retaining events, shadow replay, and approval boundaries.",
    area: "INTEGRATIONS · SYSTEMS",
    date: "13 Nov 2026",
    readTime: "5 MIN READ",
    image: "/projects/fieldbridge.webp",
    imageAlt: "FieldBridge chart showing retained and recovered synthetic events",
    repository: "https://github.com/nikhils23j/fieldbridge-shadow-replay",
    blocks: [
      { type: "paragraph", text: "A webhook can return success while a renamed field silently loses records downstream. I built FieldBridge to make that failure visible, then test a proposed mapping on retained events before it becomes active." },
      { type: "heading", text: "Keep the raw record" },
      { type: "paragraph", text: "The local HTTP receiver writes every delivery to a SQLite raw log. The active mapper can reject an unsupported shape into a visible dead-letter queue; it does not erase the original event. Tenant-scoped event IDs prevent duplicate effects, while sequence checks keep an old delivery from replacing a newer entity state." },
      { type: "paragraph", text: "In the synthetic invoice demo, 50 v1 events applied and 50 renamed v2 events became visible dead letters. Replaying the raw log with a candidate v1+v2 mapping recovered the intended state after checks and approval. A deliberately wrong value mapping failed twelve selected invoice queries before promotion." },
      { type: "heading", text: "Make the decision inspectable" },
      { type: "paragraph", text: "The candidate path uses shadow replay, contract and customer-query checks, a small canary, and explicit approval. An optional diagnostic agent can suggest a mapping, but it cannot approve or apply one. I learned that the useful handoff is a state difference and a rollback plan, not just an assistant's reassuring explanation." },
      { type: "paragraph", text: "Across 120 local synthetic runs spanning four customer profiles, six fault classes, and five seeds, the evaluation processed 120,000 logical events. After faults stopped, valid events had one recorded effect and the final state matched an independently generated reference. Twenty wrong-tenant candidates with the same injected error pattern were rejected. This says something about this test matrix, not arbitrary integrations." },
      { type: "heading", text: "What I am learning next" },
      { type: "list", items: ["How to authenticate and audit a human approval in a real organization.", "How to cut over and compensate safely when the destination is an external API rather than the same SQLite transaction.", "How to turn customer-specific acceptance checks into contracts that survive schema changes without silently accepting bad values."] },
    ],
  },
  {
    slug: "market-data-replay-correctness",
    title: "A fast order book can still be wrong",
    subtitle: "What rebuilding a market feed taught me about gaps, independent references, and tail latency.",
    area: "MARKET SYSTEMS · C++",
    date: "13 Nov 2026",
    readTime: "6 MIN READ",
    image: "/projects/market-replay.webp",
    imageAlt: "Market Data Replay benchmark comparing local price-level structures",
    repository: "https://github.com/nikhils23j/market-data-replay",
    blocks: [
      { type: "paragraph", text: "Market Data Replay began as a small price-level replayer. Rebuilding it as a binary order-by-order feed changed the problem: speed only matters if the book still represents the exchange after loss, duplication, and reordering." },
      { type: "heading", text: "Recover the sequence before trusting the book" },
      { type: "paragraph", text: "The synthetic generator writes two redundant captures, A and B, plus snapshots and a clean truth digest. The arbiter takes the first copy of each sequence range, buffers packets ahead of a hole, and uses the other line if it fills the gap. A validated snapshot covers gaps lost on both lines. Without recovery, one lost packet can leave the final book wrong indefinitely." },
      { type: "paragraph", text: "I learned to compare the final digest against an independent reference and to fuzz invalid events, rather than treating a successful parse as correctness. The repository includes 3.2 million random events checked against a reference book and 40 lossy sessions with 475 recoveries; those are offline synthetic checks." },
      { type: "heading", text: "Measure throughput and the tail separately" },
      { type: "paragraph", text: "On one M2 laptop, the bitmap price-level index applied 42.2 million messages per second in a 3-million-message local benchmark, versus 20.1 million for std::map and 24.7 million for a sorted vector. That throughput is not a live feed rate. At a paced synthetic one-million-message-per-second run, snapshot recoveries pushed the p99.9 latency into hundreds of microseconds even though ordinary book updates were much faster." },
      { type: "paragraph", text: "The lesson for me was to report the recovery cost beside the happy-path number. A structure that wins a microbenchmark can still miss the operational requirement during a gap." },
      { type: "heading", text: "What I am learning next" },
      { type: "list", items: ["How real exchange protocols and hardware timestamping change the assumptions in this offline format.", "How to design recovery policies around a documented latency budget, rather than one benchmark machine.", "How to use independent captures and production-like fault traces to challenge the synthetic generator's blind spots."] },
    ],
  },
];
