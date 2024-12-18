function DownArrow({ size }: { size: number | null }) {
  return <i className="fas fa-chevron-down" style={{ fontSize: `${size ? size : 12}px` }}></i>;
}
export default DownArrow;

