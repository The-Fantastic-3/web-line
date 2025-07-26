import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence, Variants } from "motion/react";

const Tabs = ({ tabs }: { tabs: TabProps[] }) => {
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const isActiveTab = (tabName: string) => {
    return activeTab === tabName;
  };

  const tabContentVariants: Variants = {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    enter: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(10px)" },
  };

  return (
    <>
      <div className="w-full py-6">
        {/* tabs */}
        <div className="w-full px-4">
          <div className="flex w-full justify-between gap-1 rounded-full bg-[#F4F4F5] p-1">
            {tabs.map((tab, i) => (
              <div key={`tab-${i}`} className="relative w-full">
                {isActiveTab(tab.name) && (
                  <motion.div
                    layoutId="indicator"
                    className="absolute inset-0 z-0 rounded-full bg-white shadow-md"
                  />
                )}
                <div
                  onClick={() => handleTabChange(tab.name)}
                  className={`relative z-10 w-full rounded-full py-2 text-center transition duration-500 ${isActiveTab(tab.name) ? "text-black" : "text-[#99999F]"}`}
                >
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
          <AnimatePresence>
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="initial"
              animate="enter"
              className="mt-6 w-full"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {tabs.find((tab) => tab.name === activeTab)?.render()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Tabs;
