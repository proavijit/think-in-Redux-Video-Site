import VideoGrid from "../components/grid/VideoGrid"

import Tags from "../components/tags/Tags"
import Footer from "../components/ui/Footer"
import Pagination from "../components/ui/Pagination"


const Home = () => {
  return (

    <>

      <Tags />
      <VideoGrid />
      <Pagination />

    </>
  )
}

export default Home