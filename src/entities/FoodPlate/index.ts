type FoodPlateType = {
  id: number;
  cheffId: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  minServe: number;
  maxServe: number;
  cookTime: number;
  glutenFree: boolean;
  lactoseFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
  light: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

export type { FoodPlateType };
