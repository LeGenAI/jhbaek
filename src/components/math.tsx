import 'server-only';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export function Equation({ tex, display = false }: { tex: string; display?: boolean }) {
  const markup = katex.renderToString(tex, { displayMode: display, output: 'htmlAndMathml', throwOnError: true });
  return <span className={display ? 'block max-w-full overflow-x-auto' : undefined} dangerouslySetInnerHTML={{ __html: markup }} />;
}

export function MathText({ children }: { children: string }) {
  return <>{children.split(/(\$[^$\n]+\$)/g).map((part, index) =>
    part.startsWith('$') && part.endsWith('$') && part.length > 2
      ? <Equation key={index} tex={part.slice(1, -1)} />
      : part
  )}</>;
}
