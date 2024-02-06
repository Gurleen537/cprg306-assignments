import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950 text-white">
      <h1 className="text-3xl m-2 font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}

