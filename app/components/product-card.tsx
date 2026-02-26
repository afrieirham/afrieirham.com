interface ProductCardProps {
  name: string;
  link: string;
}

export function ProductCard({ name, link }: ProductCardProps) {
  return (
    <a
      href={`https://${link}`}
      className="border p-4 border-zinc-200 hover:bg-zinc-50 hover:no-underline!"
    >
      <div className="flex gap-2">
        <img
          alt={`${name} logo`}
          src={`https://${link}/favicon.ico`}
          className="w-10 h-10 p-0.5"
        />
        <div className="font-sans flex flex-col">
          <p className="text-sm text-black">{name}</p>
          <p className="text-xs text-zinc-500">{link}</p>
        </div>
      </div>
    </a>
  );
}
