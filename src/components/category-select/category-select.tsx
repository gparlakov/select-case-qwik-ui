import { component$, useComputed$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './category-select.scss?inline';
import { getApplication } from '../../core/app.store';
import { Select } from '../../../lib';

type Category = {
  id: number | string;
  name: string;
};

export const CategoriesSelect = component$(
  ({ cats, categoryBadges }: { cats?: Category[]; categoryBadges?: Category[] }) => {
    useStylesScoped$(styles);
    const selected = useComputed$<string[]>(() => categoryBadges?.map(c => c.id.toString()) ?? []);

    return (
      <Select.Root
        multiple
        bind:value={selected}
        class="select select-bordered select-start select-sm max-w-full select-trigger"
        onChange$={(vs: string[]) => getApplication().onSelectionChange(vs)}
      >
        <Select.Trigger>
          {categoryBadges?.length === 1 ? (
            <span class="select-pill">{categoryBadges[0].name}</span>
          ) : (
            <span>{categoryBadges?.length} selected </span>
          )}
        </Select.Trigger>
        <Select.Popover>
          <Select.Listbox
            class="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box"
            data-testid="categories-option"
          >
            {cats?.map((c) => (
              <Select.Item
                value={c.id.toString()}
                class="select-item flex justify-between flex-row data-[highlighted]:bg-gray-200"
                key={c.id}
              >
                <Select.ItemLabel class="flex-grow">{c.name}</Select.ItemLabel>
                <Select.ItemIndicator>✅</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Listbox>
        </Select.Popover>
      </Select.Root>
    );
  }
);
