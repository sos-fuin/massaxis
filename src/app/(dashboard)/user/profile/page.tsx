import { redirect } from 'next/navigation'

export default function Home() {
  return redirect(`/user/profile/basic-setting`)
}
