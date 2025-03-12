import { useState } from "react";

export default function Widget() {
  const [widgets, setWidgets] = useState([]);

  const _addWidget = (widget) => setWidgets([...widgets, widget]);

  const addWidget = (widget: string) => {
    switch (widget) {
      case "Container":
        const container = (
          <div
            className="flex border-1 border-amber-50 h-2 "
            onClick={() => onClick()}
          ></div>
        );
        setWidgets([...widgets, container]);
        break;
      case "Grid":
        const grid = (
          <div
            className="grid grid-cols-3 gap-4 border-1 border-amber-50"
            onClick={() => onClick()}
          >
            <div className="border-1 border-amber-600 h-[150px] flex items-center justify-center">
              <i className="fas fa-plus text-amber-600"></i>
            </div>
            <div className="border-1 border-amber-600 h-[150px] flex items-center justify-center">
              <i className="fas fa-plus text-amber-600"></i>
            </div>
            <div className="border-1 border-amber-600 h-[150px] flex items-center justify-center">
              <i className="fas fa-plus text-amber-600"></i>
            </div>
            <div className="border-1 border-amber-600 h-[150px] flex items-center justify-center">
              <i className="fas fa-plus text-amber-600"></i>
            </div>
            <div className="border-1 border-amber-600 h-[150px] flex items-center justify-center">
              <i className="fas fa-plus text-amber-600"></i>
            </div>
            <div className="border-1 border-amber-600 h-[150px] flex items-center justify-center">
              <i className="fas fa-plus text-amber-600"></i>
            </div>
          </div>
        );
        setWidgets([...widgets, grid]);
      default:
        break;
    }
  };

  const onClick = () => {
    alert("Clicked!");
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg text-black font-bold mb-4">Basic Widgets</h2>
        <button
          className="w-full p-2 bg-blue-500 text-white rounded mb-2"
          onClick={() => addWidget("Container")}
        >
          Container
        </button>
        <button
          className="w-full p-2 bg-blue-500 text-white rounded mb-2"
          onClick={() => addWidget("Grid")}
        >
          Grid
        </button>
      </div>

      {/* Central Workspace */}
      <div className="flex-1 bg-white p-4 border-l border-r">
        <h2 className="text-lg font-bold mb-4 text-black">Drag widget here</h2>
        <div className="text-center text-gray-500">
          {widgets.length === 0 ? (
            <p>No widgets added yet.</p>
          ) : (
            widgets.map((widget, index) => (
              <div
                key={index}
                className={`p-4 bg-gray-200 mb-2 rounded ${
                  widget === "Container"
                    ? "flex flex-col md:flex-row gap-4"
                    : ""
                }`}
              >
                {widget}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg text-black font-bold mb-4">Structure</h2>
        <ul>
          {/* {widgets.map((widget, index) => (
            <li key={index} className="text-sm p-1">{widget}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
