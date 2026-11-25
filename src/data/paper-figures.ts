import plates from './paper-figures.json';
import { singletonPaper, solEvolveThesisUrl } from './publications';

export type PaperFigure = {
  title: string;
  image: string;
  width: number;
  height: number;
  caption: string;
  source: string;
  sourceLabel?: string;
  alt?: string;
  fragment?: string;
};

export const proofDiagram: PaperFigure = {
  ...singletonPaper.figure,
  title: 'Lean proof dependencies',
  image: singletonPaper.image,
  fragment: 'proof-map',
};

export const figuresByPaper: Record<string, PaperFigure[] | undefined> = {
  ...plates,
  'solevolve-evolutionary-discovery': [{
    title: 'Search and verification in the master’s thesis',
    image: '/thesis/graphical_abstract.png',
    width: 2654,
    height: 1466,
    caption: 'Graphical abstract from the thesis presentation. The red arrow sends a failed construction back for repair. The blue arrow takes a verified candidate to the comparison with known bounds.',
    source: solEvolveThesisUrl,
    sourceLabel: 'Master’s thesis at Sogang',
  }],
  [singletonPaper.slug]: [...plates[singletonPaper.slug], proofDiagram],
};
