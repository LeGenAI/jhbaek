'use client';

import { useState, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './eaqecc-proof.module.css';

const proofFile = 'https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/3e7b2e8d42487f1f117f0ab9b457c50701588068/formal/eaqecc/CodingTheoryLib/Research/EAQECCFamily/Theorem1.lean';

type Branch = { name: string; symbol: ReactNode; detail: ReactNode; field: string; line: number };

type DiagramProps = {
  branches: Branch[];
  coordinateMap: ReactNode;
  parameters: ReactNode;
  scope: ReactNode;
};

export function EaqeccProofDiagram({ branches, coordinateMap, parameters, scope }: DiagramProps) {
  const [selected, setSelected] = useState(branches[2]);
  return (
    <figure className={styles.figure} aria-labelledby="proof-title" aria-describedby="proof-structure">
      <figcaption className={styles.caption}>
        <h2 id="proof-title">Theorem 1 · Proof dependencies</h2>
        <a href="https://arxiv.org/html/2610.41183v1#A4.F6">Fig. 6 <ArrowUpRight size={14} aria-hidden="true" /></a>
      </figcaption>
      <p id="proof-structure" className="sr-only">The coordinate map feeds three results on dimension, radical, and weight. Together they establish the Lean algebraic certificate. The paper uses the stabilizer correspondence to derive the quantum code parameters.</p>
      <div className={styles.graph}>
        <div className={styles.map}>{coordinateMap}<span>Coordinate map</span></div>
        <div className={styles.fork} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.branches} role="group" aria-label="Inspect a proof branch">
          {branches.map((branch) => (
            <button key={branch.name} type="button" aria-pressed={selected === branch} aria-controls="branch-detail" onClick={() => setSelected(branch)}>
              <span className={styles.branchName}>{branch.name}</span>{branch.symbol}
            </button>
          ))}
        </div>
        <div className={styles.merge} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.certificate}>Lean algebraic certificate</div>
        <div className={styles.correspondence}><span>Stabilizer correspondence</span></div>
        <div className={styles.formula} aria-label="Quantum code parameters">{parameters}</div>
        <p className={styles.scope}>{scope}</p>
      </div>
      <div id="branch-detail" className={styles.detail} aria-live="polite">
        <div><b>{selected.name}</b><a href={`${proofFile}#L${selected.line}`}>{selected.field} <ArrowUpRight size={13} aria-hidden="true" /></a></div>
        <p>{selected.detail}</p>
      </div>
    </figure>
  );
}
