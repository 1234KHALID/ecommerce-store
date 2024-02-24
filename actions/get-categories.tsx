import { Category } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/65ba3a1394349132695b79e9`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;
