export default function Header() {
  const logo = "FitLife";
  return (
    <div className="flex border-2 shadow-lg w-full fixed top-0 left-0 bg-white">
      <div className="text-2xl p-2">{logo}</div>
      <div></div>
    </div>
  );
}
