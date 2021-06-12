
export const getApiPath = (resolvedUrl: string): string => {
  return `http://localhost:3000/api${resolvedUrl}`;
};