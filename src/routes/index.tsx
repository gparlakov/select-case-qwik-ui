import { component$, noSerialize, useComputed$, useStore, useStyles$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import { AppStore, createApplication } from "../core/app.store";
import { CategoriesSelect } from "~/components/category-select/category-select";
import { CategoryBadges } from "~/components/category-badges/category-badges";


export const head: DocumentHead = {
  title: 'Welcome to Budgily Demo',
  meta: [
    {
      name: 'Budgily | Demo ',
      content: 'A budget visualizing app.',
    },
  ],
};

export default component$(() => {
  useStyles$(global);
  // will create the store for the whole Index app (if we go to another route we need to recreated or move to layout)
  const appStore: AppStore = useStore({
    allCategories: noSerialize([]),
    categoryBadges: [],
    filter: {
      categories: [],
    },
  });

  useVisibleTask$(({cleanup}) => {
    // start the app once in browser
    const app = createApplication(appStore)
    app.onApplicationClientStart();

    cleanup(() => {
      app.onAppDestroy();
    })
  });

  return (
    <>
    <CategoryBadges categoryBadges={appStore.categoryBadges}></CategoryBadges>

    <CategoriesSelect cats={appStore.allCategories} categoryBadges={appStore.categoryBadges}></CategoriesSelect>
    </>
  );
});
