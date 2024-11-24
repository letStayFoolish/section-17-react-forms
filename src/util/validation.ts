export function isEmail(value: string) {
  return value.includes("@");
}

export function isNotEmpty(value: string) {
  return value.trim() !== "";
}

export function hasMinLength(value: any[], minLength: number) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue<T>(value: T, otherValue: T) {
  return value === otherValue;
}
