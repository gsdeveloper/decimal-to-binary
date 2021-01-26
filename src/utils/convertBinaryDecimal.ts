export const Binary = (s: string | number) =>
  typeof s === 'string' ? Number(s).toString(2) : s.toString(2);

export const Decimal = (s: string | number) =>
  typeof s === 'string' ? parseInt(s, 2) : parseInt(String(s), 2);
