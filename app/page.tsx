import { getAllWeeks } from "@/lib/releases";
import WeekSection from "@/components/WeekSection";

export default function Home() {
  const weeks = getAllWeeks();

  return (
    <>
      <header className="site-header">
        <span className="site-wordmark">newmusic.friday</span>
      </header>

      <main className="scroll-container">
        {weeks.map((week, i) => (
          <WeekSection key={week.week} week={week} isCurrent={i === 0} />
        ))}
      </main>

      {weeks.length > 1 && (
        <div className="scroll-hint" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <span>Past weeks</span>
        </div>
      )}
    </>
  );
}
