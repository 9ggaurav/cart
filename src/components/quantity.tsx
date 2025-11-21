export default function Quantity() {
  return (
    <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-700 font-medium text-sm">
        -
      </button>
      <input
        type="number"
        className="w-12 h-8 text-center border border-gray-300 rounded text-sm text-gray-900 focus:outline-none focus:border-gray-400"
        value={1}
        readOnly
      />
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-700 font-medium text-sm">
        +
      </button>
    </div>
  );
}
