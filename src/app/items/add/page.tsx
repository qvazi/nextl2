'use client';

import addItem from '@/actions/addItem';
import { useFormState } from 'react-dom';

export default function Page() {
  const [message, action] = useFormState<string, FormData>(addItem, '');

  return (
    <div>
      {message && <div>{message}</div>}
      <form action={action} className="dark:bg-black">
        <div>
          <label
            htmlFor="item-id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ID
          </label>
          <input
            id="item-id"
            name="id"
            type="text"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="item-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Название предмета
          </label>
          <input
            id="item-name"
            name="name"
            type="text"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="item-type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Тип предмета
          </label>
          <select
            name="type"
            id="item-type"
            defaultValue="default"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="default">Default</option>
            <option value="box">Box</option>
          </select>
        </div>

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Создать
        </button>
      </form>
    </div>
  );
}
