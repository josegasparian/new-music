import { Week, formatWeekDate } from "@/lib/releases";
import MusicCard from "./MusicCard";

interface WeekSectionProps {
  week: Week;
  isCurrent: boolean;
}

export default function WeekSection({ week, isCurrent }: WeekSectionProps) {
  return (
    <section className="week-section">
      <header className="week-header">
        <p className="week-label">{isCurrent ? "This Friday" : "Friday"}</p>
        <h2 className="week-date">{formatWeekDate(week.week)}</h2>
      </header>

      <div className="cards-grid">
        {week.releases.map((release) => (
          <MusicCard key={release.id} release={release} />
        ))}
      </div>
    </section>
  );
}
