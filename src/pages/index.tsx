import { Button } from 'antd'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="">
		<Button type="primary">Primary Button</Button>
		<h1 className="text-2xl">Hello World</h1>
    </div>
  )
}

export default Home
