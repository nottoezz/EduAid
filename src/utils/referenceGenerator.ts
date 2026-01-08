/**
 * Generates a unique reference code for individual purchases
 * Format: EDUAID-IND-XXXXX (where XXXXX is 5 random alphanumeric characters)
 */
export function generateIndividualReference(): string {
  const prefix = "EDUAID-IND-";
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 5;
  
  let randomPart = "";
  // Use crypto.getRandomValues if available (more secure), otherwise fall back to Math.random
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const values = new Uint32Array(length);
    crypto.getRandomValues(values);
    for (let i = 0; i < length; i++) {
      randomPart += charset[values[i] % charset.length];
    }
  } else {
    // Fallback for environments without crypto API
    for (let i = 0; i < length; i++) {
      randomPart += charset[Math.floor(Math.random() * charset.length)];
    }
  }
  
  return prefix + randomPart;
}

