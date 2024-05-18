import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { CategorySelect } from './category-select';

test(`[CategorySelect Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<CategorySelect />);
  expect(screen.innerHTML).toContain('CategorySelect works!');
});
