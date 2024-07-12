import { useState } from 'react'
import { ContentType } from '../data'
import { Tab } from './Tab'
import { DifferentContent } from './DifferentContent'
import { TabContent } from './TabContent'


type TabbedPropsType = {
    content:ContentType[]
}

export const Tabbed = ({content}:TabbedPropsType) => {
    const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
        <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
        </div>

        {activeTab <= 2 ? (
        <TabContent item={content[activeTab]} />
        // <TabContent item={content.at(activeTab)} />
      ) : (
        <DifferentContent />

      )}
    </div>
  )
}
// mlkmokkmiimomomkm ok  mkmkmibtnjn  xcv xksdjfcvxcv xcv sjhcbh asbjh hbjhkjiuh broefjnkjn jhkjkjnkjn cjson api bhbhm bhjjnjjn sklkdaldjf when we call state is parrent state tab component some other hooks kdsfsdf sfnkjknnkn