import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { CategoryBadges } from './category-badges';

test(`[CategoryBadges Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<CategoryBadges />);
  expect(screen.innerHTML).toContain('CategoryBadges works!');
});
