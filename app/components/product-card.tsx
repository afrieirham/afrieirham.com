interface ProductCardProps {
  name: string;
  link: string;
}

export function ProductCard({ name, link }: ProductCardProps) {
  return (
    <a
      href={`https://${link}`}
      className="border p-4 rounded-xl border-zinc-200 hover:bg-zinc-50"
    >
      <div className="flex gap-2">
        <img
          src={`https://${link}/favicon.ico`}
          className="w-10 h-10 rounded-lg border-zinc-200 border p-1"
        />
        <div className="font-sans flex flex-col">
          <p className="text-sm text-black">{name}</p>
          <p className="text-xs text-zinc-500">{link}</p>
        </div>
      </div>
    </a>
  );
}