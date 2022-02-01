function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
}
const H2 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor}>
      <a href={link} className="anchor-link">
        §
      </a>
      {children}
    </h2>
  );
};
export default H2;
