import { expect, test, type Page } from '@playwright/test';

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
    'Lean certificate': 'https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/main/formal/eaqecc/README.md',
    'EAQECC preprint': 'https://arxiv.org/abs/2610.41183',
    'Paper-to-Lean map': 'https://github.com/LeGenAI/intersection-coding-theory-cohomology/blob/main/ARTIFACT_MAP.md',
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
  await page.getByRole('link', { name: 'Symmetric Sudoku-Type Games from Perfect Codes', exact: true }).click();
  await expect(page.getByText('Junmin An, Jae-Hyun Baek, Keon-Hwi Kim, Haeun Lim, Jon-Lark Kim')).toBeVisible();
  await expect(page.getByText('IEEE Transactions on Games · 2026')).toBeVisible();
  await expect(page.getByRole('link', { name: 'DOI', exact: true })).toHaveAttribute('href', 'https://doi.org/10.1109/TG.2026.3683305');
  await expectPageFits(page);
  await page.getByRole('link', { name: 'Back to research' }).click();
  await expect(page.locator('#eaqecc')).toBeVisible();
});

test('research links distinguish the benchmark and the Lean harness', async ({ page }) => {
  await page.goto('/research');
  await page.getByRole('link', { name: 'EntropyMaLean harness', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'EntropyMaLean evaluation harness' })).toBeInViewport();
  await page.getByRole('link', { name: 'Harness and benchmark details' }).click();
  await expect(page.getByRole('link', { name: 'EntropyMath leaderboard' })).toHaveAttribute('href', 'https://entropymath.com/');
  await expect(page.getByRole('link', { name: 'EntropyMath evaluation code' })).toHaveAttribute('href', 'https://github.com/LeGenAI/entropymath_eval');
  await expect(page.locator('a[href*="EntropyMaG-2"]')).toHaveCount(0);
  await expectPageFits(page);
  await page.getByRole('link', { name: 'Back to artifacts' }).click();
  await page.getByRole('link', { name: 'CodingTheoryLib / CodingTheoryLib-MCP', exact: true }).click();
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
  await expect(page.getByRole('link', { name: 'EAQECC paper' })).toHaveAttribute('href', 'https://arxiv.org/abs/2610.41183');
  await expect(page.getByRole('link', { name: 'Lean certificate' })).toHaveAttribute('href', /formal\/eaqecc\/README\.md$/);
  await expect(graph.getByRole('link', { name: 'Fig. 6' })).toHaveAttribute('href', 'https://arxiv.org/html/2610.41183v1#A4.F6');
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
