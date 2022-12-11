import { Outlet } from 'react-router-dom'
import Banner from '../assets/banner.png'

function Layout() {
  return (
    <main className="container container-1261 d-flex">
      <div className="col-12 col-md-6">
            <img
                src={Banner}
                alt="banner"
                className="img img-auto img-w"
            />
        </div>
        <div className="col-12 col-md-6 p-lg-3 d-lg-flex align-content-center justify-content-center">
          <Outlet/>
        </div>
    </main>
  )
}

export default Layout