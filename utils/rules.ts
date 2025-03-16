export function required(value: string) {
  if (!value) return "This field is required";

  return true;
}
