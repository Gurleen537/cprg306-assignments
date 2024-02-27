import ItemList from "./item-list";
export default function Page() {
  return (
      import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950 text-white">
      <h1 className="text-3xl m-2 font-bold text-gray-200 p-4">Shopping List</h1>
      <div className="m-4">
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Category 1</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Example items */}
            <div className="border border-gray-400 p-2">Item 1</div>
            <div className="border border-gray-400 p-2">Item 2</div>
            <div className="border border-gray-400 p-2">Item 3</div>
            {/* Add more items as needed */}
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Category 2</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Example items */}
            <div className="border border-gray-400 p-2">Item 4</div>
            <div className="border border-gray-400 p-2">Item 5</div>
            <div className="border border-gray-400 p-2">Item 6</div>
            {/* Add more items as needed */}
          </div>
        </div>
        {/* Add more categories as needed */}
      </div>
    </main>
  );
}

