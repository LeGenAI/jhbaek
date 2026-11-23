'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './eaqecc-proof.module.css';

const proofFile = 'https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/3e7b2e8d42487f1f117f0ab9b457c50701588068/formal/eaqecc/CodingTheoryLib/Research/EAQECCFamily/Theorem1.lean';

const branches = [
  { name: 'Dimension', symbol: 'dim L', detail: 'Injectivity gives L dimension q + 2. The radical coefficient space has dimension q.', field: 'normalizerFinrank', line: 316 },
  { name: 'Radical', symbol: 'rad(L)', detail: 'The symplectic Gram formula identifies the radical of L with the image of the radical coefficient space under Φ.', field: 'radicalIff', line: 315 },
  { name: 'Weight', symbol: 'wt ≥ n − 1', detail: 'Every word outside the radical has weight at least n − 1. An explicit word attains that bound.', field: 'distanceAttained', line: 319 },
];

export function EaqeccProof() {
  const [selected, setSelected] = useState(branches[2]);
  return (
    <figure className={styles.figure} aria-labelledby="proof-title" aria-describedby="proof-structure">
      <figcaption className={styles.caption}>
        <h2 id="proof-title">Theorem 1 · Proof dependencies</h2>
        <a href="https://arxiv.org/html/2610.41183v1#A4.F6">Fig. 6 <ArrowUpRight size={14} aria-hidden="true" /></a>
      </figcaption>
      <p id="proof-structure" className="sr-only">The coordinate map feeds three results on dimension, radical, and weight. Together they establish the Lean algebraic certificate. The paper uses the stabilizer correspondence to derive the quantum code parameters.</p>
      <div className={styles.graph}>
        <div className={styles.map}><i>Φ</i><span>Coordinate map</span></div>
        <div className={styles.fork} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.branches} role="group" aria-label="Inspect a proof branch">
          {branches.map((branch) => (
            <button key={branch.name} type="button" aria-pressed={selected === branch} aria-controls="branch-detail" onClick={() => setSelected(branch)}>
              <span>{branch.name}</span><i>{branch.symbol}</i>
            </button>
          ))}
        </div>
        <div className={styles.merge} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.certificate}>Lean algebraic certificate</div>
        <div className={styles.correspondence}><span>Stabilizer correspondence</span></div>
        <div className={styles.formula} aria-label="Quantum code parameters">[[n, 1, n − 1; n − q − 1]]<sub>q</sub></div>
        <p className={styles.scope}>For prime powers <i>q</i> ≥ 3, <i>n</i> ≥ 2<i>q</i> + 1. For <i>q</i> = 2, <i>n</i> is odd and <i>n</i> ≥ 5.</p>
      </div>
      <div id="branch-detail" className={styles.detail} aria-live="polite">
        <div><b>{selected.name}</b><a href={`${proofFile}#L${selected.line}`}>{selected.field} <ArrowUpRight size={13} aria-hidden="true" /></a></div>
        <p>{selected.detail}</p>
      </div>
    </figure>
  );
}
