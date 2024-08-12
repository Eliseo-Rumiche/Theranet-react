import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import Loader from "../components/loader";
import CategorieSlider from "../components/categorieSlider";
import { useCategories } from "../hooks/useCategories";
import { useCallback } from "react";

function ChannelsPage() {
  const { loading, categoriesData } = useCategories();
  const { ref, focusKey } = useFocusable({
    forceFocus: true,
    focusKey: "CHANNELS",
  });

  const onCategorieFocus = useCallback(
    ({ y }: { y: number }) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  if (loading) return <Loader />;

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="content">
        {categoriesData.map((categorie) => (
          <CategorieSlider
            key={categorie.name}
            {...categorie}
            onFocus={onCategorieFocus}
          />
        ))}
      </div>
    </FocusContext.Provider>
  );
}

export default ChannelsPage;
