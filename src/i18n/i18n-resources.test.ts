import { describe, expect, it } from "vitest";
import es from "./es.json";
import en from "./en.json";

/**
 * Collects "key paths" for every leaf in a translation resource, treating
 * array indices uniformly (as "[]") so both locales can differ in list
 * ordering/length while still being checked for identical *shape*.
 */
function collectKeyPaths(value: unknown, prefix = ""): Set<string> {
  const keys = new Set<string>();

  if (Array.isArray(value)) {
    if (value.length === 0) {
      keys.add(prefix);
      return keys;
    }
    value.forEach((item) => {
      collectKeyPaths(item, `${prefix}[]`).forEach((key) => keys.add(key));
    });
    return keys;
  }

  if (value !== null && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) {
      keys.add(prefix);
      return keys;
    }
    entries.forEach(([key, val]) => {
      collectKeyPaths(val, prefix ? `${prefix}.${key}` : key).forEach((k) =>
        keys.add(k),
      );
    });
    return keys;
  }

  keys.add(prefix);
  return keys;
}

describe("i18n resources", () => {
  it("es.json and en.json expose the same key set", () => {
    const esKeys = collectKeyPaths(es);
    const enKeys = collectKeyPaths(en);

    const missingInEn = [...esKeys].filter((key) => !enKeys.has(key)).sort();
    const missingInEs = [...enKeys].filter((key) => !esKeys.has(key)).sort();

    expect({ missingInEn, missingInEs }).toEqual({
      missingInEn: [],
      missingInEs: [],
    });
  });
});
