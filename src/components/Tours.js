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
                        <Tour id={id} from={from} title={title} text={text} date={date} duration={duration} image={image} location={location}/>
                      );
                  })
              }
          </div>
      </section>
  );
}

export default Tours;