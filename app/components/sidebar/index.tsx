const Sidebar = () => {
  return (
    <div className=" h-full bg-gray-100">
      <aside
        className="
           h-screen
           border-[#1E2939] bg-[#101828]
          p-4 md:p-6
          overflow-y-auto overflow-x-auto
          transition-transform duration-300 ease-in-out
          md:static md:translate-x-0
          fixed top-0 bottom-0 left-0 z-20
          -translate-x-full
        "
      >
        <div className="space-y-8">
          <div className="mb-4 md:mb-8 shrink-0">
            <h2 className="mb-2 md:mb-4 text-xs font-semibold tracking-wider text-[#F3F4F6]">
              Devices (2)
            </h2>

            <div className="space-x-2 space-y-2">
              <button
                className="
                  w-full border border-[#364153] rounded-lg
                  px-4 py-2 md:py-3
                  text-left text-sm font-medium
                  transition-colors
                  flex items-center gap-2
                  bg-slate-800 text-slate-300
                  hover:bg-slate-700 hover:text-white
                "
                draggable="true"
                style={{ opacity: 1, cursor: "pointer" }}
              >
                Living Room Fan
              </button>

              <button
                className="
                  w-full border border-[#364153] rounded-lg
                  px-4 py-2 md:py-3
                  text-left text-sm font-medium
                  transition-colors
                  flex items-center gap-2
                  bg-[#646F7F]/80 text-white
                "
                draggable="true"
                style={{ opacity: 1, cursor: "pointer" }}
              >
                Kitchen Light
              </button>
            </div>
          </div>

          <div className="shrink-0">
            <h2 className="mb-4 text-xs font-semibold tracking-wider text-[#F3F4F6]">
              Saved Presets (0)
            </h2>

            <div className="w-full border border-[#364153] text-[#E5E7EB]/40 rounded-lg px-4 py-3 text-left text-sm font-medium">
              Nothing added yet
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
