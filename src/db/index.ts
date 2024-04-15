import { readFileSync, writeFileSync } from 'fs';

type Item = {
  id: string;
  name: string;
  type: 'default' | 'box';
};

type Data = {
  items: Record<string, Item>;
};

const readData = () => {
  return JSON.parse(
    readFileSync('src/db/data.json', { encoding: 'utf-8' }),
  ) as Data;
};

const writeData = (data: Data) => {
  writeFileSync('src/db/data.json', JSON.stringify(data), {
    encoding: 'utf-8',
  });
};

const db = {
  getItems: () => {
    const data = readData();
    return Object.values(data.items);
  },
  addItem: (item: Item) => {
    const data = readData();
    data.items[item.id] = item;
    writeData(data);
  },
};

export default db;
