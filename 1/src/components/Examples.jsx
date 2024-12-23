import { TabButton, TabButton2 } from './TabButton.jsx'
import { useState } from 'react'

import { EXAMPLES } from '../data.js'
import Section from './Sections.jsx'
import Tabs from './Tabs.jsx'

export default function Examples() {

    const [topic, setTopic] = useState("")

    function handleSelect(selectButton) {
        setTopic(selectButton)
        console.log(selectButton)
    }


    let tabContent = <p>Please select a topic.</p>

    if (topic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[topic].code}
                </code>
            </pre>

        </div>)
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                // buttonContainers="menu"
                buttons={<>
                    <TabButton isSelect={topic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
                    <TabButton2 label="JSX"></TabButton2>
                    <TabButton isSelect={topic === 'props'} onSelect={() => handleSelect("props")}>props</TabButton>
                    <TabButton isSelect={topic === 'state'} onSelect={() => handleSelect("state")}>state</TabButton></>}>
                {tabContent}
            </Tabs>
        </Section>
    )
}