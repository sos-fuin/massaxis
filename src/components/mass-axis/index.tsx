import Link from 'next/link'

export default function MassAxis() {
  return (
    <div className="ms-mass-wrap">
      <div className="ms-mass-content">
        <h1 className="ms-mass-title">Be part of the future of Mass Axis</h1>
        <p className="ms-mass-pra">Be apart of Mass Axis A CRM built by users for users!</p>
        <div className="ms-mass-btn">
          <Link href="/sign-up" className="ms-btn-primary">
            Start free trial
          </Link>
        </div>
      </div>
    </div>
  )
}
