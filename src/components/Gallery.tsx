
import styled from "styled-components";
import image1 from "../../../mp-3/src/assets/image1.jpg";
import image2 from "../../../mp-3/src/assets/image2.jpg";
import image3 from "../../../mp-3/src/assets/image3.jpg";
import image4 from "../../../mp-3/src/assets/image4.jpg";
import image5 from "../../../mp-3/src/assets/image5.jpg";
import image6 from "../../../mp-3/src/assets/image6.jpg";
import image7 from "../../../mp-3/src/assets/image7.jpg";
import image8 from "../../../mp-3/src/assets/image8.jpg";
import image9 from "../../../mp-3/src/assets/image9.jpg";
import image10 from "../../../mp-3/src/assets/image10.jpg";
import image11 from "../../../mp-3/src/assets/image11.jpg";
import image12 from "../../../mp-3/src/assets/image12.jpg";

const MainWrapper = styled.main`
    padding: 5%;
    display: flex;
    justify-content: center; 
    align-items: center;     
    min-height: 100vh;
    margin-left: 10%;
    
`;

const GalleryImages = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
 
`;

const GalleryRow = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const GalleryImage = styled.img`
     width: 23%;
    margin: 1%;
    height: 20vh;
    border-radius: 5px;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
    }
    
`;

export default function Gallery() {
    return (
        <MainWrapper>
            <GalleryImages>
                <GalleryRow>
                    <GalleryImage src={image1} alt="Gallery 1" />
                    <GalleryImage src={image2} alt="Gallery 2" />
                    <GalleryImage src={image3} alt="Gallery 3" />
                    <GalleryImage src={image4} alt="Gallery 4" />
                </GalleryRow>
                <GalleryRow>
                    <GalleryImage src={image5} alt="Gallery 5" />
                    <GalleryImage src={image6} alt="Gallery 6" />
                    <GalleryImage src={image7} alt="Gallery 7" />
                    <GalleryImage src={image8} alt="Gallery 8" />
                </GalleryRow>
                <GalleryRow>
                    <GalleryImage src={image9} alt="Gallery 9" />
                    <GalleryImage src={image10} alt="Gallery 10" />
                    <GalleryImage src={image11} alt="Gallery 11" />
                    <GalleryImage src={image12} alt="Gallery 12" />
                </GalleryRow>
            </GalleryImages>
        </MainWrapper>
    );
}
