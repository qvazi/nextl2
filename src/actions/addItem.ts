"use server";

import { readFileSync, writeFileSync } from "fs";

export default async function addItem(prevState: string, data: FormData) {
  const rawItem = {
    id: data.get("id"),
    name: data.get("name"),
    type: data.get("type"),
  };

  writeFileSync("src/data.json", JSON.stringify(rawItem));

  return "";
}
