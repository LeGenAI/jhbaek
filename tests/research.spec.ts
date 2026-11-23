import { expect, test, type Page } from '@playwright/test';
import { publications, sudokuCitation } from '../src/data/publications';

async function expectPageFits(page: Page) {
  await expect.poll(() => page.evaluate(() =>
    document.documentElement.scrollWidth <= document.documentElement.clientWidth
  )).toBe(true);
}

test('CV entry exposes the papers, proofs and reviewer instructions', async ({ page }) => {
  const response = await page.goto('/research');
  expect(response?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Selected Research in Formal Verification');
  await expect(page.getByRole('link', { name: 'Lean certificate', exact: true })).toBeInViewport({ ratio: 1 });
  const links = {
    'Lean certificate': 'https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/3e7b2e8d42487f1f117f0ab9b457c50701588068/formal/eaqecc/README.md',
    'EAQECC preprint': 'https://arxiv.org/abs/2610.41183v1',
    'Comparator specification (v2)': 'https://github.com/LeGenAI/intersection-coding-theory-cohomology/blob/9c2c4a2ce24552dd57b69fbb5a7f0c071d120d5b/Formalization/Verification/Comparator/QaryRankBoxedNormalizationChallenge.lean',
    'Self-dual codes preprint': 'https://arxiv.org/abs/2604.08485v2',
    'Reviewer reproduction': 'https://github.com/LeGenAI/sol_evolve#reviewer-reproduction',
  };
  for (const [label, href] of Object.entries(links)) {
    const link = page.getByRole('link', { name: label, exact: true });
    await expect(link).toHaveAttribute('href', href);
    expect((await link.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  }
  await expectPageFits(page);
  await page.getByRole('link', { name: 'Publications', exact: true }).click();
  const ieeeUrl = 'https://doi.org/10.1109/TG.2026.3683305';
  const entries = page.locator('#publications li');
  await expect(entries.first()).toContainText('Published');
  const papers = [...publications, sudokuCitation];
  await expect(entries).toHaveCount(papers.length);
  for (const paper of papers) {
    const entry = entries.filter({ has: page.getByRole('link', { name: paper.title, exact: true }) });
    await expect(entry.getByText(paper.summary, { exact: true })).toBeVisible();
  }
  await expect(entries.filter({ hasText: 'Shortest Self-Orthogonal Embeddings' })).toHaveCount(0);
  await page.getByRole('link', { name: /Sudoku/i }).click();
  await expect(page).toHaveURL(/publications\/symmetric-sudoku-perfect-codes$/);
  await expect(page.getByRole('link', { name: 'Play Perfect Sudoku' })).toHaveAttribute('href', 'https://perfect-sudoku.up.railway.app/');
  await expect(page.getByText('Junmin An, Jae-Hyun Baek, Keon-Hwi Kim, Haeun Lim, Jon-Lark Kim')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Read on IEEE Xplore' })).toHaveAttribute('href', ieeeUrl);
  await expect(page.locator('main a[href*="arxiv"]')).toHaveCount(0);
  await expectPageFits(page);
  await page.getByRole('link', { name: 'Back to research' }).click();
  await expect(page.locator('#eaqecc')).toBeVisible();
  await page.goto('/research/publications/shortest-self-orthogonal-embeddings-binary-codes');
  await expect(page).toHaveURL(/publications\/solevolve-evolutionary-discovery$/);
});

test('research links distinguish the benchmark and the Lean harness', async ({ page }) => {
  await page.goto('/research');
  await page.getByRole('link', { name: 'EntropyMaLean harness', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('EntropyMaLean proof-checking harness');
  await expect(page.getByText(/I refined EntropyMaLean/)).toContainText('two Nemotron models');
  await expect(page.getByRole('link', { name: 'EntropyMath leaderboard' })).toHaveAttribute('href', 'https://entropymath.com/');
  await expect(page.getByRole('link', { name: 'EntropyMath evaluation code' })).toHaveAttribute('href', 'https://github.com/LeGenAI/entropymath_eval');
  await expect(page.locator('a[href*="EntropyMaG-2"]')).toHaveCount(0);
  await expectPageFits(page);
  await page.getByRole('link', { name: 'Back to artifacts' }).click();
  await page.getByRole('link', { name: 'CodingTheoryLib / CodingTheoryLib-MCP', exact: true }).click();
  await expect(page.getByRole('link', { name: 'MCP usage guide (documentation)' })).toHaveAttribute('href', 'https://codingtheorylib.com/mcp-guide');
  await expect(page.getByText(/Neo4j lookup:/)).toBeVisible();
  await expect(page.locator('a[href="https://github.com/LeGenAI/CodingTheoryLib"]')).toHaveCount(0);
  await expectPageFits(page);
});

test('main navigation reaches Research and the mobile menu closes', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) {
    await page.getByRole('button', { name: 'Open navigation' }).click();
    const menu = page.getByRole('dialog', { name: 'Navigation' });
    await expect(menu).toBeVisible();
    await menu.getByRole('link', { name: 'Research', exact: true }).click();
    await expect(menu).toHaveCount(0);
  } else {
    await page.getByRole('navigation').getByRole('link', { name: 'Research', exact: true }).click();
  }
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Selected Research in Formal Verification');
  await expectPageFits(page);
});

test('homepage lets readers inspect the EAQECC proof and reach its sources', async ({ page }) => {
  await page.goto('/');
  const graph = page.getByRole('figure', { name: 'Theorem 1 · Proof dependencies' });
  await expect(graph.getByRole('button', { name: /Dimension/ })).toBeInViewport({ ratio: 1 });
  await expect(page.getByRole('link', { name: 'EAQECC paper' })).toHaveAttribute('href', 'https://arxiv.org/abs/2610.41183v1');
  await expect(page.getByRole('link', { name: 'Lean certificate' })).toHaveAttribute('href', /formal\/eaqecc\/README\.md$/);
  await expect(graph.getByRole('link', { name: 'Fig. 6' })).toHaveAttribute('href', 'https://arxiv.org/html/2610.41183v1#A4.F6');
  await expect(graph.getByText(/For prime powers/)).toHaveText('For prime powers q ≥ 3, n ≥ 2q + 1. For q = 2, n is odd and n ≥ 5.');
  const firstWork = page.locator('section[aria-labelledby="selected-work"] li a').first();
  await expect(firstWork).toHaveText('EntropyMaLean');
  await expect(firstWork).toHaveAttribute('href', '/research/projects/entropymath-entropymag-entropymalean');
  for (const [name, field, line] of [['Dimension', 'normalizerFinrank', '316'], ['Radical', 'radicalIff', '315'], ['Weight', 'distanceAttained', '319']]) {
    const branch = graph.getByRole('button', { name: new RegExp(name) });
    await branch.click();
    await expect(branch).toHaveAttribute('aria-pressed', 'true');
    await expect(graph.getByRole('link', { name: field })).toHaveAttribute('href', new RegExp('Theorem1.lean#L' + line + '$'));
    await expectPageFits(page);
  }
  await page.getByRole('link', { name: 'SolEvolve', exact: true }).click();
  await expect(page.locator('#solevolve')).toBeInViewport();
});

test('portrait keeps its original proportions on Home and About', async ({ page }) => {
  for (const path of ['/', '/about']) {
    await page.goto(path);
    const portrait = page.getByRole('img', { name: 'Jae-Hyun Baek', exact: true });
    await expect(portrait).toBeInViewport({ ratio: 1 });
    await expect.poll(() => portrait.evaluate((node: HTMLImageElement) => node.naturalWidth)).toBe(360);
    const box = (await portrait.boundingBox())!;
    expect(box.width).toBeGreaterThanOrEqual(76);
    expect(box.width / box.height).toBeCloseTo(360 / 462, 2);
  }
});

test('portfolio navigation, source links and certificate viewer work across sections', async ({ page, isMobile }) => {
  await page.goto('/');
  for (const [label, title] of [
    ['About', 'Jae-Hyun Baek'], ['Awards', 'Awards'], ['Writing', 'Writing'],
    ['Artifacts', 'Research artifacts'], ['Contact', 'Contact'],
  ]) {
    if (isMobile) await page.getByRole('button', { name: 'Open navigation' }).click();
    const menu = isMobile ? page.getByRole('dialog', { name: 'Navigation' }) : page.getByRole('navigation', { name: 'Main navigation' });
    await menu.getByRole('link', { name: label, exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expectPageFits(page);
    if (label === 'Awards') {
      await page.getByRole('button', { name: /^Expand/ }).first().click();
      const dialog = page.getByRole('dialog');
      await expect(dialog.getByRole('img', { name: /certificate/ })).toBeVisible();
      await dialog.getByRole('button', { name: 'Close expanded image' }).click();
      await expect(dialog).toHaveCount(0);
    }
    if (label === 'Writing') {
      await expect(page.getByRole('link', { name: 'Read the thesis at Sogang' })).toHaveAttribute('href', /000000082888/);
    }
  }
  await expect(page.getByRole('link', { name: 'bjh3641@gmail.com' })).toHaveAttribute('href', 'mailto:bjh3641@gmail.com');
});
