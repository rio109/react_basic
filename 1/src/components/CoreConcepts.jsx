import { CoreConcept } from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts() {
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
}