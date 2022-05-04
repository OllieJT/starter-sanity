// Booleans

export const isDevMode = process.env.NODE_ENV === "development";

// Values

const siteUrlForProd = "https://inqling.studio";
const siteUrlForDev = "https://localhost:3000";
export const siteUrl = isDevMode ? siteUrlForDev : siteUrlForProd;
