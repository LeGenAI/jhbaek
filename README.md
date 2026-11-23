# Jae-Hyun Baek · 백재현

I study error-correcting codes at Sogang University. My recent work uses Lean to check algebraic constructions and deterministic solvers to verify codes found through program search. [Research portfolio](https://jhbaek.deep-fountain.com/research)

## Selected research

- **Entanglement-assisted quantum codes.** Our construction and entanglement lifting close 54 gaps in archived code tables. Lean checks the algebraic certificate for Theorem 1. [Preprint](https://arxiv.org/abs/2610.41183) · [Lean certificate](https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/main/formal/eaqecc/README.md)
- **Building up self-dual codes.** With Jon-Lark Kim, I studied how to extend a self-dual code by two coordinates. The proof map identifies the Lean declarations behind the paper’s results. [Preprint](https://arxiv.org/abs/2604.08485v2) · [Paper-to-Lean map](https://github.com/LeGenAI/intersection-coding-theory-cohomology/blob/main/ARTIFACT_MAP.md)
- **SolEvolve.** I built a search system for combinatorial constructions. The reviewer command checks bundled witnesses, including Lucas-cube center sets, without an LLM API key. [Reviewer reproduction](https://github.com/LeGenAI/sol_evolve#reviewer-reproduction)

## Run the portfolio locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open [localhost:3000/research](http://localhost:3000/research). Run `npm run build` for the production build.

## Browser tests

Install Chromium with `npx playwright install chromium`. After building, run `npm run test:e2e` to test the local site at phone, tablet, and desktop widths. To test a Railway deployment, set `E2E_BASE_URL=https://jhbaek.deep-fountain.com` when running the same command.
