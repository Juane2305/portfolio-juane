export const PROJECT_SLUGS = ["evalene", "sendo", "hornero"] as const;
export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export type FactKey = "role" | "type" | "status" | "site" | "for" | "service";

export interface ProjectDefinition {
  slug: ProjectSlug;
  /** Index into previewByIndex / the prototype's pv-0/pv-1/pv-2 templates. */
  previewIndex: 0 | 1 | 2;
  siteUrl: string;
  /** Which fact rows to render, in order, for this project's case page. */
  factKeys: FactKey[];
  next: ProjectSlug;
}

export const projects: Record<ProjectSlug, ProjectDefinition> = {
  evalene: {
    slug: "evalene",
    previewIndex: 0,
    siteUrl: "https://www.evalene.app/",
    factKeys: ["role", "type", "status", "site"],
    next: "sendo",
  },
  sendo: {
    slug: "sendo",
    previewIndex: 1,
    siteUrl: "https://www.sendostock.com/",
    factKeys: ["role", "type", "for", "site"],
    next: "hornero",
  },
  hornero: {
    slug: "hornero",
    previewIndex: 2,
    siteUrl: "https://hornerodigital.com/",
    factKeys: ["role", "type", "service", "site"],
    next: "evalene",
  },
};

export const projectOrder: ProjectSlug[] = ["evalene", "sendo", "hornero"];

export function isProjectSlug(value: string | undefined): value is ProjectSlug {
  return !!value && (PROJECT_SLUGS as readonly string[]).includes(value);
}

export function getProject(
  slug: string | undefined,
): ProjectDefinition | undefined {
  return isProjectSlug(slug) ? projects[slug] : undefined;
}
