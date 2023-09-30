import { Fragment, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { Inter } from "next/font/google"

import Navbar from "@/components/application/layout/navbar/Navbar"
import Footer from "@/components/application/layout/footer/Footer"
import { useAlert } from "@/context/alertContext"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const { showAlert } = useAlert()

  // Data Connection
  useEffect(() => {
    // Check the initial network status
    const initialOnlineStatus = navigator.onLine;

    if (!initialOnlineStatus) {
      showAlert("Network Error: Please check your data connection.", "error");
    }
    // Add an event listener to track network status changes
    const handleNetworkChange = () => {
      showAlert("Network Error: Please check your data connection.", "error");
    };

    window.addEventListener("offline", handleNetworkChange);

    return () => {
      // Remove event listeners when the component unmounts
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, [showAlert]);
  return (
    <Fragment>
      <Head>
        <title>Shovee</title>
        <meta content="Portfolio Generator" name="title" />
        <meta content="This is an application/layout where anybody can create their personal portfolio websiteś by freely filling out details." name="description" />
        <meta content="portfolio generator, free portfolio generator" name="keywords" />
        <meta content="Shivraj Gurjar" name="author" />

      </Head>

      <div className='min-h-screen'>
        {/* Navbar */}
        <Navbar />

        {/* Text  */}
        <div className='min-h-screen flex flex-col justify-center items-center gap-5'>
          <p className='p-2 text-4xl text-center font-semibold'>
            Let&apos;s Build a Stunning Personal Portfolio !
          </p>
          {/* Start button */}
          <Link
            className='text-white py-1 px-3 font-semibold bg-blue-600 hover:bg-blue-700 rounded'
            href='/portfolio/form/home'
          >
            Start
          </Link>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}
