export type Category = "Systems" | "Applied AI" | "Quant" | "Product";

export type Project = {
  id: string;
  name: string;
  category: Category;
  year: string;
  image: string;
  imageAlt: string;
  description: string;
  metric: string;
  scope: string;
  stack: string[];
  url: string;
};

export const projects: Project[] = [
  {
    id: "traceguard",
    name: "TraceGuard",
    category: "Applied AI",
    year: "2026",
    image: "/projects/traceguard.webp",
    imageAlt:
      "Chart comparing guarded and plain agent task outcomes in a synthetic evaluation",
    description:
      "A replayable local tool-use agent with a deterministic authority gate, approval flow and crash-safe ticket writes.",
    metric: "144 / 144 guarded task outcomes",
    scope: "Fixed synthetic suite · 3 seeds",
    stack: ["Python", "LangGraph", "SQLite", "MLX"],
    url: "https://github.com/nikhils23j/traceguard-replayable-tool-agent",
  },
  {
    id: "fieldbridge",
    name: "FieldBridge",
    category: "Applied AI",
    year: "2026",
    image: "/projects/fieldbridge.webp",
    imageAlt:
      "Chart of retained and recovered events in the FieldBridge local HTTP demo",
    description:
      "A shadow-replay integration workflow that checks schema changes before an approved cutover.",
    metric: "120,000 logical events evaluated",
    scope: "Local, synthetic customer profiles",
    stack: ["Python", "SQLite", "HTTP", "Replay"],
    url: "https://github.com/nikhils23j/fieldbridge-shadow-replay",
  },
  {
    id: "market-replay",
    name: "Market Data Replay",
    category: "Quant",
    year: "2026",
    image: "/projects/market-replay.webp",
    imageAlt: "Benchmark chart for the order book and feed replay throughput",
    description:
      "A C++20 order-by-order feed replayer with A/B line arbitration, snapshot recovery and a differential fuzzer.",
    metric: "42.2M messages / sec",
    scope: "Offline bitmap-book benchmark · synthetic data",
    stack: ["C++20", "Networking", "Fuzzing"],
    url: "https://github.com/nikhils23j/market-data-replay",
  },
  {
    id: "incidentops",
    name: "IncidentOps",
    category: "Product",
    year: "2026",
    image: "/projects/incidentops.webp",
    imageAlt: "Screenshot of the IncidentOps incident tracking dashboard",
    description:
      "A full-stack incident tracker with an audited state machine, live updates and optimistic locking.",
    metric: "1 winner in an 8-way ack race",
    scope: "Local prototype · 50 scripted rounds",
    stack: ["Spring Boot", "React", "TypeScript"],
    url: "https://github.com/nikhils23j/incidentops",
  },
  {
    id: "sniff",
    name: "Sniff.in",
    category: "Product",
    year: "2026",
    image: "/projects/sniff.webp",
    imageAlt: "Sniff.in app icon on a simple project visual",
    description:
      "A mutual-consent social discovery app for campuses, offices and events, with a deployed backend and mobile test builds.",
    metric: "125+ automated checks",
    scope: "Database, unit and live-backend tests",
    stack: ["React Native", "TypeScript", "Supabase"],
    url: "https://github.com/nikhils23j/sniff.in",
  },
  {
    id: "fleet-config",
    name: "Fleet Config Consistency",
    category: "Systems",
    year: "2026",
    image: "/projects/fleet-config.webp",
    imageAlt:
      "Chart comparing mixed reads across configuration rollout strategies",
    description:
      "A two-phase configuration rollout protocol with leases, fencing and version-pinned routing.",
    metric: "0 / 55,015 mixed-version reads",
    scope: "Deterministic fault simulation",
    stack: ["Python", "Distributed Systems", "TCP"],
    url: "https://github.com/nikhils23j/fleet-configuration-consistency",
  },
  {
    id: "k8s-operator",
    name: "Kubernetes Recovery Operator",
    category: "Systems",
    year: "2026",
    image: "/projects/k8s-operator.webp",
    imageAlt: "Chart of live k3s recovery times for the first operator version",
    description:
      "A recovery operator with watch caching, a rate-limited queue and progress-deadline rollback.",
    metric: "30 / 30 live k3s faults repaired",
    scope: "v1 live test · v2 simulation only",
    stack: ["Python", "Kubernetes", "Controllers"],
    url: "https://github.com/nikhils23j/inference-deployment-recovery-operator",
  },
  {
    id: "exchangelab",
    name: "ExchangeLab",
    category: "Quant",
    year: "2026",
    image: "/projects/exchangelab.webp",
    imageAlt: "Chart showing a latency cliff in the simulated arbitrage market",
    description:
      "A price-time matching engine and microsecond discrete-event market for studying latency and markouts.",
    metric: "1.6M orders matched a reference",
    scope: "Randomized orders · synthetic market",
    stack: ["Python", "Simulation", "Statistics"],
    url: "https://github.com/nikhils23j/worldquant-labs/tree/main/exchangelab",
  },
  {
    id: "risklab",
    name: "RiskLab",
    category: "Quant",
    year: "2026",
    image: "/projects/risklab.webp",
    imageAlt:
      "Chart of Monte Carlo and quasi-Monte Carlo convergence for option pricing",
    description:
      "A Monte Carlo option-pricing lab comparing QMC, variance reduction, Greeks and barrier corrections.",
    metric: "≈17,000× variance reduction",
    scope: "Asian option experiment · 65K paths",
    stack: ["Python", "QuantLib", "Monte Carlo"],
    url: "https://github.com/nikhils23j/worldquant-labs/tree/main/risklab",
  },
  {
    id: "api-auth",
    name: "API Authorization Lab",
    category: "Systems",
    year: "2026",
    image: "/projects/api-auth.webp",
    imageAlt: "Bar chart comparing seeded authorization bug detection methods",
    description:
      "A multi-tenant API checked against a reference rules model with stateful random sequences and shrinking.",
    metric: "30 / 30 seeded bugs found",
    scope: "Union over 10 seeds · local synthetic API",
    stack: ["Python", "Property Testing", "APIs"],
    url: "https://github.com/nikhils23j/api-contract-authorization-regression",
  },
  {
    id: "gpu-scheduler",
    name: "GPU Cluster Scheduler",
    category: "Systems",
    year: "2026",
    image: "/projects/gpu-scheduler.webp",
    imageAlt:
      "Chart comparing GPU scheduling policies at a fixed simulated load",
    description:
      "A 256-GPU scheduling simulator with MIG slices, NVLink islands, gang scheduling and preemption.",
    metric: "7 scheduling policies compared",
    scope: "Simulated workload and cluster",
    stack: ["Python", "Scheduling", "Simulation"],
    url: "https://github.com/nikhils23j/multi-tenant-gpu-placement-simulator",
  },
  {
    id: "gpu-verification",
    name: "GPU Pipeline Verification",
    category: "Systems",
    year: "2026",
    image: "/projects/gpu-verification.webp",
    imageAlt: "Coverage chart for SystemVerilog and cocotb testbenches",
    description:
      "A GPU-style ALU pipeline and verification suite with a reorder buffer and randomized backpressure.",
    metric: "9 / 9 injected RTL bugs caught",
    scope: "Simulation only · hand-written bugs",
    stack: ["SystemVerilog", "cocotb", "Python"],
    url: "https://github.com/nikhils23j/gpu-command-pipeline-ip-verification",
  },
  {
    id: "llm-serving",
    name: "LLM-Serving Scheduler",
    category: "Applied AI",
    year: "2026",
    image: "/projects/llm-serving.webp",
    imageAlt:
      "Chart comparing time to first token across synthetic batching policies",
    description:
      "A C++ gRPC streaming scheduler exploring batching, priority lanes and deadline-aware admission.",
    metric: "28 ms vs 265 ms p99 TTFT",
    scope: "Synthetic compute · one shared laptop",
    stack: ["C++20", "gRPC", "Scheduling"],
    url: "https://github.com/nikhils23j/local-rpc-inference-transport",
  },
];
