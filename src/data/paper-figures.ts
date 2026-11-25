import plates from './paper-figures.json';
import { singletonPaper } from './publications';

export type PaperFigure = {
  title: string;
  image: string;
  width: number;
  height: number;
  caption: string;
  source?: string;
  labelNumber?: string;
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
  [singletonPaper.slug]: [...plates[singletonPaper.slug], proofDiagram],
};
