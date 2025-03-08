export function required(value: unknown) {
  if (!value) return "This field is required";

  return true;
}
