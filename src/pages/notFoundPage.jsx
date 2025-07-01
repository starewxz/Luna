import Header from "../components/Header";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";


const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
      <div className={""}>
          <Header />
          <main>
              <p>404 NOT FOUND</p>
              <button onClick={() => navigate("/")} >Return to the main page</button>
          </main>
          <Footer />
      </div>
  )
}

export default NotFoundPage