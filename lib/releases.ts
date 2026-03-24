import fs from "fs";
import path from "path";

export type ReleaseType = "album" | "single" | "ep";

export interface Release {
  id: string;
  artist: string;
  title: string;
  type: ReleaseType;
  coverUrl: string;
  genres: string[];
  links: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
  };
}

export interface Week {
  week: string; // YYYY-MM-DD (Friday)
  releases: Release[];
}

const RELEASES_DIR = path.join(process.cwd(), "data", "releases");

export function getAllWeeks(): Week[] {
  const files = fs.readdirSync(RELEASES_DIR);
  const weeks = files
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(RELEASES_DIR, f), "utf-8");
      return JSON.parse(raw) as Week;
    })
    .sort((a, b) => (a.week < b.week ? 1 : -1)); // newest first

  return weeks;
}

export function formatWeekDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00Z");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
