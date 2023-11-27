export default function Avatar({ title, subtitle }) {
  return (
    <div className="flex justify-center">
      <div>
        <img
          src={"https://i.pravatar.cc/300"}
          width={80}
          height={80}
          className="border-2 rounded-full"
        />
      </div>
      <div className="m-2 text-left">
        <div className="font-bold">{title}</div>
        <div className="font-bold text-sm text-gray-400">{subtitle}</div>
      </div>
    </div>
  );
}
