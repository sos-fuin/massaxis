import { redirect } from 'next/navigation'

export default function Home({ params }: { params: any }) {
  const { id } = params
  redirect(`/admin/user/${id}/user-full-info`)
}
