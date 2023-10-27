export type TData = {
  name: string;
  email: string;
  phone: string;
  text: string;
};

export type TValid = {
  name: { valid: boolean; value: string };
  email: { valid: boolean; value: string };
  phone: { valid: boolean; value: string };
  text: { valid: boolean; value: string };
};
