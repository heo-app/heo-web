//TODO: add jsdoc
export const parseJSON = <T>(stringifiedJson: string): T | null => {
  let parsed: T | null = null;

  try {
    parsed = JSON.parse(stringifiedJson) as T;
  } catch (err) {
    console.error('parseJSON: %s', stringifiedJson);
  }

  return parsed;
};

//TODO: add jsdoc
export const writeToLocalStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value ?? ''));
};

//TODO: add jsdoc
export const readFromLocalStorage = <T>(key: string): T | null => {
  const item: string | null = localStorage.getItem(key);

  if (!item) {
    return null;
  }

  return parseJSON<T>(item) ?? null;
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
