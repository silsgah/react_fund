export default function Avatar({person, size}) {
    return (
      <img
        className="avatar"
        src={person}
        alt="Lin Lanying"
        width={size}
        height={size}
      />
    );
  }