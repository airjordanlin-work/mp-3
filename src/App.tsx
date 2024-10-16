import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import Education from './components/Education';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Gallery from './components/Gallery';

const AppPage = styled.div`

    width: 100%;
    min-height: 140vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Root = () => {
    return (
        <AppPage>
            <ContentWrapper>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </ContentWrapper>
            <Footer/>
        </AppPage>
    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
    return (<RouterProvider router={router} />);
}

export default App;
