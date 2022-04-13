import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <h1>404 - Not Found</h1>
      <Link href="/">
        <a>返回主页</a>
      </Link>
    </>
  )
}