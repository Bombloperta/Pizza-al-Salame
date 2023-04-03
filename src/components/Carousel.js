import Carousel from "react-bootstrap/Carousel";

const AboutUsCarousel = () => {
  return (
    <div className="carousel__container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel/widok-z-gory-pomidory-pieczarki-i-papryka-min.jpg"
            alt="pizza ingredients"
          />
          <Carousel.Caption>
            <h3>Świeże składniki</h3>
            <p>Najświeższe składniki, prosto od lokalnych dostawców.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel/asortyment-plaskiego-asortymentu-wybornego-sera-i-miodu-z-miejsca-na-kopie-min.jpg"
            alt="cheese"
          />

          <Carousel.Caption>
            <h3>Pyszny ser</h3>
            <p>Wysokiej jakości ser mozzarella.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel/nadya-spetnitskaya-tOYiQxF9-Ys-unsplash (1) (1).jpg"
            alt="pizza dough"
          />

          <Carousel.Caption>
            <h3>Cienkie włoskie ciasto</h3>
            <p>Przepyszne włoskie ciasto na zakwasie.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutUsCarousel;
