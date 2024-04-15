'use server';

import db from '@/db';
import { readFileSync, writeFileSync } from 'fs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function addItem(prevState: string, data: FormData) {
  const rawItem = {
    id: data.get('id') as string,
    name: data.get('name') as string,
    type: data.get('type') as 'default' | 'box',
  };

  const items = db.getItems();
  const foundItem = items.find(
    (item) =>
      item.id === rawItem.id ||
      item.name.toLowerCase() === rawItem.name.toLowerCase(),
  );

  if (foundItem) {
    return 'item already exists';
  }

  db.addItem(rawItem);

  revalidatePath('/items');
  redirect('/items');
}
