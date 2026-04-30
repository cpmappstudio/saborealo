import type { CSSProperties } from "react"

import { PannaPageIntro } from "@/components/site/PannaPageIntro"
import { PannaSectionNotch } from "@/components/site/PannaSectionNotch"
import type { PannaAboutData } from "@/data/panna-about"

type AboutPageProps = {
  about: PannaAboutData
}

type AboutStoryColumn = PannaAboutData["story"]["columns"][number]
type AboutStorySection = AboutStoryColumn["sections"][number]
type AboutStoryStyle = CSSProperties & {
  "--about-story-background": string
}

export function AboutPage({ about }: AboutPageProps) {
  const storyStyle: AboutStoryStyle = {
    "--about-story-background": `url("${about.story.background}")`,
  }

  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__inner panna-shell">
          <PannaPageIntro
            as="h1"
            id="about-title"
            title={about.intro.title}
            underline={about.intro.underline}
            className="about-intro"
          />
        </div>
      </section>

      <section
        className="about-story"
        aria-labelledby="about-story-title"
        style={storyStyle}
      >
        <PannaSectionNotch className="about-story__notch" />

        <div className="about-story__inner panna-shell">
          <h2 id="about-story-title" className="sr-only">
            {about.story.title}
          </h2>

          <div className="about-story__grid">
            {about.story.columns.map((column) => (
              <AboutStoryColumn key={column.id} column={column} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function AboutStoryColumn({ column }: { column: AboutStoryColumn }) {
  return (
    <article className="about-story__column">
      <div className="about-story__media">
        <img
          src={column.image.src}
          alt={column.image.alt}
          width={column.image.width}
          height={column.image.height}
          loading="lazy"
          decoding="async"
          className="about-story__image"
        />
      </div>

      <div className="about-story__sections">
        {column.sections.map((section) => (
          <AboutStorySection key={section.id} section={section} />
        ))}
      </div>
    </article>
  )
}

function AboutStorySection({ section }: { section: AboutStorySection }) {
  const headingId = `about-${section.id}-title`

  return (
    <section className="about-story__section" aria-labelledby={headingId}>
      <h3 id={headingId} className="about-story__title">
        {section.title}
      </h3>
      <div className="about-story__copy">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
