
type TabProps = {
    num:number;
    activeTab:number;
    onClick:React.Dispatch<React.SetStateAction<number>>
}

export const Tab = ({ num, activeTab, onClick }:TabProps) => {
    return (
        <button
          className={activeTab === num ? "tab active" : "tab"}
          onClick={() => onClick(num)}
        >
          Tab {num + 1}
        </button>
      );
}
