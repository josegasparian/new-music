import { Release } from "@/lib/releases";

interface ListenLinksProps {
  links: Release["links"];
}

export default function ListenLinks({ links }: ListenLinksProps) {
  return (
    <div className="flex gap-2 mt-auto pt-3">
      {links.spotify && (
        <a
          href={links.spotify}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen on Spotify"
          className="listen-link"
        >
          <SpotifyIcon />
        </a>
      )}
      {links.appleMusic && (
        <a
          href={links.appleMusic}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen on Apple Music"
          className="listen-link"
        >
          <AppleMusicIcon />
        </a>
      )}
      {links.youtube && (
        <a
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch on YouTube"
          className="listen-link"
        >
          <YouTubeIcon />
        </a>
      )}
    </div>
  );
}

function SpotifyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function AppleMusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.243.016-.334.024-.836.065-1.6.29-2.288.715C2.538 1.386 1.774 2.239 1.384 3.317a5.138 5.138 0 00-.29 1.52c-.019.384-.024.77-.024 1.155v9.805c0 .386.005.77.024 1.155.026.58.15 1.141.383 1.675.543 1.266 1.538 2.108 2.84 2.525.47.147.955.224 1.44.25.4.02.8.027 1.2.027h10.87c.4 0 .8-.007 1.2-.027a5.5 5.5 0 001.44-.25c1.302-.417 2.297-1.26 2.84-2.525.233-.534.357-1.095.383-1.675.019-.384.024-.77.024-1.155V8.077l-.002-.385a9.24 9.24 0 00-.002-.158c.003-.47 0-.94-.002-1.41zM12 18.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5zm0-11.25a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm4.5 1.5h-3V6a1.5 1.5 0 00-3 0v4.5a1.5 1.5 0 001.5 1.5H16.5a1.5 1.5 0 000-3z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
