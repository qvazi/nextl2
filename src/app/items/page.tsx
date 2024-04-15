import { readFileSync } from "fs";

export default function Page() {
  const data = JSON.parse(
    readFileSync("src/data.json", { encoding: "utf-8" })
  ) as {
    items: Record<
      string,
      { id: string; name: string; type: "default" | "box" }
    >;
  };
  const items = Object.values(data.items);

  return (
    <div>
      <h1>Предметы:</h1>
      <ul>
        {items.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
