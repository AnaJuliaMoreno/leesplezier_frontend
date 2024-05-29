
import './App.css'

  import Navigation from './components/navigation/Navigation.jsx';
 import {Navigate, Route, Routes} from "react-router-dom";
 import Aanpak from "./pages/AanpakPage/Aanpak.jsx";
import Concepts from "./pages/ConceptsPage/Concepts.jsx";
import NotFound from "./pages/notFoundPage/notFound.jsx";
import Locations from "./pages/LocationsPage/Locations.jsx";
import TheProject from "./pages/TheProjectPage/TheProject.jsx";
import Register from "./pages/RegisterPage/Register.jsx";
import Readers from "./pages/ReadersPage/Readers.jsx";
import Books from "./pages/BooksPage/Books.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import Home from "./pages/HomePage/Home.jsx";
import Volunteers from "./pages/VolunteersPage/Volunteers.jsx";
import NewSessions from "./pages/newSessionsPage/newSessions.jsx";
import Footer from "./components/footer/Footer.jsx";
import Parents from "./pages/ParentsPage/Parents.jsx";
import ReaderForm from "./components/readerForm/ReaderForm.jsx";
import Sessions from "./pages/SessionsPage/Sessions.jsx";

import { AuthContext } from './context/AuthContext';
import {useContext} from "react";
import Profile from "./pages/ProfilePage/profile.jsx";
import Admin from "./pages/AdminPage/Admin.jsx";
function App() {

    const { isAuth } = useContext(AuthContext);
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/concepts" element={<Concepts />}/>
                <Route path="/aanpak" element={<Aanpak />} />
                <Route path='/locations' element={<Locations />}/>
                <Route path="/the_project" element={<TheProject />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/readers" element={isAuth ? <Readers /> : <Navigate to="/login"/>}/>
                <Route path="/books" element={<Books />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sessions" element={<Sessions/>}></Route>
                <Route path="/volunteers" element={<Volunteers/>}></Route>
                <Route path="/new-sessions" element={<NewSessions/>}></Route>
                <Route path='/parents' element={<Parents/>}></Route>
                <Route path='/readers-register' element={<ReaderForm/>}/>
                <Route path="/profile/:id" element={ <Profile />}/>
                <Route path="/admin" element={<Admin />}></Route>





            </Routes>
<Footer/>
        </>
    )
}

export default App
