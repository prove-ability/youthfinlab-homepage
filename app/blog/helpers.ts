export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^가-힣a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
}
