import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/header/Header.jsx'
import { CoreConcept } from './components/CoreConcept.jsx';
import { TabButton, TabButton2 } from './components/TabButton.jsx'
import { EXAMPLES } from './data.js';

import { useState } from 'react';

function App() {

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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}

            {/* <CoreConcept
              title="Components"
              description="the core ui building block"
              image={componentImg}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelect={topic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton2 label="JSX"></TabButton2>
            <TabButton isSelect={topic === 'props'} onSelect={() => handleSelect("props")}>props</TabButton>
            <TabButton isSelect={topic === 'state'} onSelect={() => handleSelect("state")}>state</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
