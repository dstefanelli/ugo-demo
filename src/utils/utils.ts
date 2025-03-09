/**
 * Gets the base url for all API calls
 *
 * @returns {string}
 */
export function getApiBaseUrl(): string {
  return import.meta.env.VITE_AP_API_BASE_URL;
}
