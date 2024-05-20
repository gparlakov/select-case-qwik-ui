import { component$ } from '@builder.io/qwik';
import { type AppStore, getApplication } from '../../core/app.store';

export const CategoryBadges = component$(({ categoryBadges }: Pick<AppStore, 'categoryBadges'>) => {
  return (
    <>
      {categoryBadges?.map((c) => (
        <div
          key={c.id}
          class="badge badge-md font-thin text-foreground inline-flex items-center px-2 py-1 text-sn shadow-sm"
          data-testid="badge"
        >
          <span class="truncate max-w-[120px] max-h-6 tracking-tighter">{c.name}</span>
          <button
            class="btn btn-ghost p-px text-xs hover:bg-white ml-2"
            style={'min-height: .5rem; height: auto;'}
            onClick$={() => {
              getApplication().onCategoryAction(c.id?.toString(), 'badgeClosed');
            }}
          >
            x
          </button>
        </div>
      ))}
    </>
  );
});
