import Title from "./Title";
import {tours} from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
      <section className="section" id="tours">
          <Title title='featured' subTitle='tours'/>
          <div className="section-center featured-center">
              {
                  tours.map((tour) => {
                      const {id, image, date, title, text, location, duration, from} = tour;
                      return (
                        <Tour id={tour.id} from={tour.from} title={tour.title} text={tour.text} date={tour.date} duration={tour.duration} image={tour.image} location={tour.location}/>
                      );
                  })
              }
          </div>
      </section>
  );
}

export default Tours;