# Portfolio story direction

This document records the intended public narrative for `LeGenAI/jhbaek`. It should guide the rewrite of the homepage, research page, about page, and publication display.

## Core feeling

The portfolio should not read like a job application page. It should feel like walking into a workshop.

The visitor should sense three things quickly:

1. I make things.
2. The things are not random. They come from one repeated pattern.
3. The pattern is becoming a research identity.

The maker identity matters because my work does not fit cleanly into one academic category. I am not only writing papers, not only building web apps, and not only experimenting with LLM agents. I keep turning messy domain knowledge into working systems: Lean libraries, MCP servers, benchmarks, RAG products, forecasting pipelines, medical AI tools, and research notes that agents can search.

## One-line identity

> I build agent-readable knowledge systems: formal math libraries, auditable benchmarks, and AI products that turn scattered domain knowledge into working artifacts.

Alternative, warmer version:

> I like taking messy knowledge, giving it structure, and turning it into something that works: a proof, a benchmark, a chatbot, a paper, or a tool another person can actually use.

## Main narrative

I have always been pulled toward the same kind of problem: there is knowledge somewhere, but it is scattered, informal, or trapped in formats that machines cannot really use.

In coding theory, that knowledge lives in papers, definitions, examples, and proof habits. I try to move it into Lean, Mathlib, graph memory, and MCP interfaces so that AI agents can search it, reuse it, and eventually prove with it.

In EntropyMath, the knowledge lives in generated problems, solver traces, verifier feedback, and benchmark lineage. I try to make mathematical evaluation less like a static dataset and more like an auditable process.

In applied AI projects, the same pattern shows up in a different costume. Library documents become a RAG chatbot. River observations become forecasting systems. Medical images become annotation and detection pipelines. Buddhist and meditation texts become MindBuddhi. Legal and tax documents become retrieval graphs.

The surface changes. The underlying motion is the same:

```text
domain knowledge
→ structured substrate
→ agent / retrieval / prover / evaluator
→ paper, product, benchmark, or deployed system
```

That is the story the portfolio should tell.

## Suggested homepage hero

### Eyebrow
Formalized Mathematical AI · Agentic Knowledge Systems · Applied AI Products

### Title
I turn domain knowledge into systems that agents can use.

### Subtitle
I am a PhD student in AI at Sogang University and a technical lead at DeepFountain. My work sits between formal mathematics, AI evaluation, and deployed AI systems: Lean libraries for coding theory, auditable math benchmarks, RAG products, forecasting pipelines, and research memory for agents.

### Buttons
- View research map
- Publications
- Systems I built
- GitHub

## Homepage sections

### 1. The workshop
Short section that says the work is not just a CV. It is a workshop of artifacts.

Copy:

> Some projects start as a theorem I want to formalize. Some start as a pile of PDFs, screenshots, logs, or experimental results. The work is to make them usable: by a human, by an agent, by a prover, or by a product team.

Cards:

- Formalize: CodingTheoryLib, self-dual codes, Lean
- Evaluate: EntropyMath, EntropyMaG, EntropyMaLean
- Deploy: SOGAMBOT, MindBuddhi, DeepFountain systems
- Discover: SolEvolve, evolutionary search, algorithm discovery

### 2. Research axes

#### Formalized mathematical AI
Coding theory, Lean, Mathlib, self-dual codes, building-up constructions, MCP/Neo4j memory.

#### Auditable benchmark evolution
EntropyMath and EntropyMaLean: generated math problems with lineage, verifier contracts, and evaluation traces.

#### Applied AI systems
RAG chatbots, legal/tax retrieval, water-level forecasting, medical AI, education systems.

### 3. Featured papers
Prioritize accepted/published work.

- Performance Improvement of LLMs for Regulatory Document Understanding based on Modified RAG Approach
- Application of TimeGPT for Enhancing Water Level Prediction in Gamcheon River, Korea
- Hybrid Multimodal GenAI for Solving Math Problems Containing Various Figures
- SolEvolve / thesis track
- CodingTheoryLib / formalized self-dual codes track

### 4. Systems built
Show maker identity with screenshots and short technical notes, not inflated marketing copy.

- CodingTheoryLib / CodingTheoryLib-MCP
- EntropyMath
- SOGAMBOT
- MindBuddhi
- MekaNet / WBC synthesis / cellularity
- River forecasting pipeline

## Tone guide

Use concrete, slightly personal language.

Prefer:

> I build small bridges between messy knowledge and working systems.

Avoid:

> I am a passionate and innovative AI researcher dedicated to transforming the future of trustworthy intelligence.

Prefer:

> The prototype usually starts ugly: a notebook, a pile of files, a script that barely runs. If the idea survives, I turn it into something searchable, testable, and shareable.

Avoid:

> This project showcases my commitment to excellence across the rapidly evolving AI landscape.

## What to remove from the current site

- company-specific application framing as the primary story
- old application metadata remnants
- phone number and birthdate
- business card images
- direct hard-coded widget key unless confirmed as safe and domain-restricted
- `research/page.txt` backup with old application narrative
- raw LaTeX source folders from `public/accepted` unless intentionally public

## What to keep and elevate

- maker artifacts
- public publications
- accepted papers
- research diagrams
- GitHub links
- selected screenshots of deployed systems
- awards, but only after removing unnecessary personal details

## Suggested research page structure

1. Featured publications
2. Research axes
3. Systems and artifacts
4. Talks and awards
5. Archived application narratives, if any, hidden or removed from the public version

## Suggested about page structure

### Who I am

> I am a PhD student in Sogang University's AI department, advised by Prof. Jong-Rak Kim. I work across formalized mathematics, AI evaluation, and applied AI systems.

### How I work

> I usually begin by asking: what is the knowledge substrate here? A textbook? A Lean theorem? A PDF archive? A dataset? A product log? Then I try to make it structured enough for an agent, prover, or evaluator to use.

### What I am trying to become

> A researcher-builder who can turn a domain into an agent-operable research environment: searchable, verifiable, extensible, and useful enough to become either a paper or a product.

## Visual direction

The site should feel like a research workshop, not a corporate landing page.

Design cues:

- graph / node / proof trace motifs
- cards that look like artifacts on a workbench
- small labels: `proof`, `dataset`, `agent`, `paper`, `product`, `deployed`
- timeline from messy input to artifact
- screenshots and diagrams over generic icons

Possible section motif:

```text
messy notes / domain files
        ↓
structured memory
        ↓
agent / prover / evaluator
        ↓
paper or product
```

## Public positioning

The public-facing identity should be:

> formalized mathematical AI + agentic research infrastructure + applied AI systems builder

AIM/AI safety can remain as one historical/application thread, but it should not dominate the whole portfolio.
