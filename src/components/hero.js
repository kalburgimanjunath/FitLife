export default function Hero({ title, subtitle, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
    </div>
  );
}
