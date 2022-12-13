import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div >
    <Carousel >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src="https://www.reliancedigital.in/medias/Realme-C-Series-CLP-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNjY1OTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hlYi85OTIzOTA0MTc2MTU4LmpwZ3xmODEzNDkwMTE0NDUwYTRhMjFiMzcyYmM5OWU0NGRhMTdhZGU1YzBiMzg2NzhjYjQwMGU4YTIwN2Y5MTM3Nzk5"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src="https://www.reliancedigital.in/medias/Realme-Narzo-50A-CLP-Banner-18-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNzg4NDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDc4L2hjYy85OTIzOTAyMDc5MDA2LmpwZ3wyN2RmMDg1YzhiYzllZjc4MzQ0MTllMzk5NDViOWZkZmE4MTg3NTc2Y2ZmZjZjZGZiNmQyNDBmZDNiYzExY2Q4"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/Samsung-M13-5G-CLP-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNjY2Mzh8aW1hZ2UvanBlZ3xpbWFnZXMvaGIwL2g3NC85OTIzOTAyMjEwMDc4LmpwZ3w4ZGIyODFkNDRiNTlhNjEzYTU2YmQ5M2M1ODIxOTVhNWY0ODc2ODYxNDg3NTBjMzNjMzgxNTFjOWM3NDg2NzY2"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;