export default function Song({ song, link }) {
  return (
    <div>
      <a href={link} rel="noreferrer" target="_blank" class="song-link">
        <p>{song}</p>
      </a>
    </div>
  );
}
