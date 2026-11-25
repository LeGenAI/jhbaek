import { EaqeccProofDiagram } from './eaqecc-proof-diagram';
import { Equation, MathText } from './math';

const branches = [
  { name: 'Dimension', symbol: String.raw`\dim L`, detail: 'Injectivity gives $L$ dimension $q+2$. The radical coefficient space has dimension $q$.', field: 'normalizerFinrank', line: 316 },
  { name: 'Radical', symbol: String.raw`\operatorname{rad}(L)`, detail: String.raw`The symplectic Gram formula identifies the radical of $L$ with the image of the radical coefficient space under $\Phi$.`, field: 'radicalIff', line: 315 },
  { name: 'Weight', symbol: String.raw`\mathrm{wt}\ge n-1`, detail: 'Every word outside the radical has weight at least $n-1$. An explicit word attains that bound.', field: 'distanceAttained', line: 319 },
];

export function EaqeccProof() {
  return <EaqeccProofDiagram
    branches={branches.map(branch => ({
      ...branch,
      symbol: <Equation tex={branch.symbol} />,
      detail: <MathText>{branch.detail}</MathText>,
    }))}
    coordinateMap={<Equation tex={String.raw`\Phi`} />}
    parameters={<Equation tex={String.raw`[\![n,1,n-1;n-q-1]\!]_q`} />}
    scope={<MathText>{String.raw`For prime powers $q\ge 3$, $n\ge 2q+1$. For $q=2$, $n$ is odd and $n\ge 5$.`}</MathText>}
  />;
}
