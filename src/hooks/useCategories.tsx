import { useEffect, useState } from "react";
import { categorieChannel, ChannelResponse } from "../types";
import { getChannels } from "../services/api";

export const useCategories = () => {
  const [categoriesData, setCategoriesData] = useState<categorieChannel[]>([]);
  const [loading, setLoading] = useState(true);

  const getCategoryeData = async () => {
    const res: ChannelResponse = await getChannels();
    setCategoriesData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getCategoryeData();
  }, []);

  return { loading, categoriesData };
};

