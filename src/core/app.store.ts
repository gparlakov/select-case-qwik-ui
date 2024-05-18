import { NoSerialize, Signal, createContextId, noSerialize, useComputed$, useContextProvider } from '@builder.io/qwik';

export type CategoryVM = {
  id: string | number;
  name: string;
}


export interface AppStore {
  allCategories: NoSerialize<CategoryVM[]>;
  categoryBadges: CategoryVM[];
  filter: {
    categories: NoSerialize<CategoryVM[]>;
  }
}

export interface CategoryFilterValue {
  id: string | number;
  name: string;
  selected?: boolean;
}

export interface Budgily {
  onCategoriesFetched(cats: CategoryVM[]): void;
  onAppDestroy(): void;
  onApplicationClientStart(): Promise<void>;
  onCategoryAction: (c: string, action?: 'selectedFromFilter' | 'badgeClosed') => void;
  onSelectionChange: (ids: Array<string | number>) => void;
}

const all = {
  id: 'all-categories-selected',
  name: 'All',
};
const noCategory = {
  id: 'no-category-selected',
  name: 'No category',
};

const reservedCategories = [all.id, noCategory.id];

let app: Budgily;
export function createApplication(store: AppStore) {
  app = {
    onApplicationClientStart() {
      return Promise.resolve([{
        id: 1,
        name: 'loan'
      }, {
        id: 2,
        name: 'rent'
      }, {
        id: 3,
        name: 'school'
      }]).then((cats) => {
        app.onCategoriesFetched(cats);
        app.onCategoryAction(noCategory.id);
      });
    },
    onAppDestroy() {
      // nothing to do yet
    },

    onCategoriesFetched(cats: CategoryVM[]) {
      const cs = [all, noCategory, ...(cats ?? []).map(({ id, name }) => ({ id: id.toString(), name }))];
      store.allCategories = noSerialize(cs);
    },
    
    onCategoryAction: (id: string, action: 'selectedFromFilter' | 'badgeClosed' = 'selectedFromFilter') => {
      const fromFilter = action === 'selectedFromFilter';
      const fromBadge = action === 'badgeClosed';

      const selectNoCategories = fromFilter && id == noCategory.id;
      const selectAll = fromFilter && id == all.id;

      const deselectNoCategories = fromBadge && id === noCategory.id;
      const allButReserved = store.allCategories?.filter((c) => !reservedCategories.includes(c.id.toString())) ?? [];
      const allCats = allButReserved?.length === 0 ? [all] : allButReserved;
      if (selectAll) {
        store.filter.categories = [id];
        store.categoryBadges = allCats;
      } else if (selectNoCategories) {
        store.filter.categories = [id];
        store.categoryBadges = [noCategory];
      } else if (deselectNoCategories) {
        store.filter.categories = noSerialize(allCats.map((c) => c.id?.toString()));
        store.categoryBadges = allCats;
      } else if (action === 'selectedFromFilter') {
        const allSelected = store.filter.categories?.includes(all.id);
        const noCategorySelected = store.filter.categories?.includes(noCategory.id);
        if (allSelected || noCategorySelected) {
          store.filter.categories = [id];
          store.categoryBadges = [store.allCategories?.find((cat) => cat.id === id)].filter(
            (x): x is CategoryVM => x != null
          );
        } else {
          const add = !store.filter.categories?.includes(id);

          store.filter.categories = add
            ? [...(store.filter?.categories ?? []), id]
            : store.filter.categories?.filter((cat) => cat != id) ?? [];

          store.categoryBadges = add
            ? [...store.categoryBadges, store.allCategories?.find((c) => c.id === id)].filter(
                (v): v is CategoryVM => v != null
              )
            : store.categoryBadges.filter((c) => c.id != id);
        }
      } else if (action === 'badgeClosed') {
        store.filter.categories = store.filter.categories?.filter((sel) => sel != id) ?? [];
        store.categoryBadges = store.categoryBadges?.filter((b) => b.id != id) ?? [];
        if (store.filter.categories.length === 0) {
          // means we just removed the last category - so lets select the no category and denote it
          store.filter.categories = [noCategory.id];
          store.categoryBadges = [noCategory];
        }
      }
    },
    onSelectionChange: (ids: Array<string | number>) => {
      const added = ids.find((id) => !store.categoryBadges.some((c) => c.id === id.toString()));
      if (added) {
        app?.onCategoryAction(added.toString());
      } else {
        const removed = store.categoryBadges.find((c) => !ids.includes(c.id));
        removed && app?.onCategoryAction(removed.id.toString());
      }
    },
  };
  return app;
}

export function getApplication() {
  if (app == null) {
    throw new Error(
      'Create application before calling getApplication. Call getStoreDefaultAndCreateApplication to create application.'
    );
  }
  return app;
}
