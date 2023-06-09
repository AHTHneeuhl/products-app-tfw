import { TOption } from "types";

export const getSelectOptions = (values: string[]) => {
  const options = [] as TOption[];

  for (const value of values) {
    options.push({ value, label: value });
  }

  return options;
};
