import './title.scss'
function Xl({ title, highlight }: { title: string; highlight: string }) {
  return (
    <h3 className="ms-title-xl">
      {title} <span className="ms-highlight">{highlight}</span>
    </h3>
  )
}

export const Title = {
  Xl,
}

function tBase({ text }: { text: string }) {
  return <p>{text}</p>
}

export const Text = {
  tBase,
}

function Base({ h3, h3End, marked, p }: { h3End?: string; h3?: string; marked?: string; p?: string }) {
  return (
    <div className="ms-heading">
      <h3 className="h-3">
        {h3} {marked && <span className="marked">{marked}</span>} {h3End}
      </h3>

      {p && <p className="p-3">{p}</p>}
    </div>
  )
}
function Sm({ h3, h3End, marked, p }: { h3End?: string; h3?: string; marked?: string; p?: string }) {
  return (
    <div className="ms-heading sm">
      <h3 className="h-3">
        {h3} {marked && <span className="marked">{marked}</span>} {h3End}
      </h3>

      {p && <p className="p-3">{p}</p>}
    </div>
  )
}

export const Heading = {
  Base,
  Sm,
}

export const TittleText = ({
  children,
  variant,
  className,
}: {
  children: string
  variant?: 'sm' | 'base' | 'xl'
  className?: string
}) => {
  return <h4 className={`ms__heading ${variant} ${className}`}>{children}</h4>
}
export const TittleParagraph = ({
  children,
  variant,
  className,
}: {
  children: string
  variant?: 'sm' | 'base' | 'xl'
  className?: string
}) => {
  return <h4 className={`ms__paragraph ${variant} ${className}`}>{children}</h4>
}
