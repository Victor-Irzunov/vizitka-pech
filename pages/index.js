import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
import { MainComp } from '@/components/main/MainComp'
import { Service } from '@/models/models'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  
  if (data) {
    data = JSON.parse(data)
  }

  return (
    <>
      <Head>
        <title>
          My app page Home
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>

      <Header data={data[0]} />

      <main
        className={`flex 
        flex-col min-h-screen
         ${inter.className} overflow-hidden
         `}
      >
        <div
          style={{ '--image-url': `url(uploads/${data[0].img})` }}
          className={`w-full h-screen fon bg-[image:var(--image-url)] 
          bg-cover sm:bg-center`}
        />

        <MainComp data={data[0]} />

      </main >

      <Footer />
    </>
  )
}


export async function getServerSideProps() {
	try {
    const response = await Service.findAll()
    const newData = JSON.stringify(response) || [{}]
		 return {
			props: {
			  data: newData,
			},
		 }
	} catch (error) {
	  console.error('Ошибка при выборке данных:', error);
	  return {
		 props: {
			data: null,
		 },
	  }
	}
 }
