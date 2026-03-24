import Image from "next/image";
import { Release } from "@/lib/releases";
import ListenLinks from "./ListenLinks";

interface MusicCardProps {
  release: Release;
}

const TYPE_LABELS: Record<string, string> = {
  album: "Album",
  single: "Single",
  ep: "EP",
};

export default function MusicCard({ release }: MusicCardProps) {
  return (
    <article className="music-card group">
      <div className="relative w-full aspect-square overflow-hidden rounded-md mb-3">
        <Image
          src={release.coverUrl}
          alt={`${release.artist} — ${release.title}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="type-badge">{TYPE_LABELS[release.type] ?? release.type}</span>
          {release.genres.slice(0, 2).map((g) => (
            <span key={g} className="genre-pill">{g}</span>
          ))}
        </div>

        <p className="text-sm font-semibold leading-tight truncate">{release.artist}</p>
        <p className="text-sm leading-tight truncate opacity-70">{release.title}</p>

        <ListenLinks links={release.links} />
      </div>
    </article>
  );
}
