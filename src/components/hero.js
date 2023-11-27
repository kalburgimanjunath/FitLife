export default function Hero({ title, subtitle, children }) {
  return (
    <div>
      <h1>{title && title}</h1>
      <h3>{subtitle && title}</h3>
      {children && children}
    </div>
  );
}
