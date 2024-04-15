import db from '@/db';
import { readFileSync } from 'fs';
import Link from 'next/link';

export default function Page() {
  const items = db.getItems();

  const renderItems = items.length ? (
    <div>
      <ul>
        {items.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Нет предметов</div>
  );

  return (
    <div>
      <Link href={'/items/add'}>Добавить предмет</Link>
      <h1>Предметы:</h1>
      {renderItems}
    </div>
  );
}
