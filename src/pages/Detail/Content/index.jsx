import millify from "millify";
import List from "../List";


const Content = ({ movie }) => {

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
      <div>
        {/* Categories */}
        <List title="Categories" arr={movie.genres} />

        {/* Languages */}
        <List title="Languages" arr={movie.spoken_languages} />

        {/* Companies */}
        <List title="Companies" arr={movie.production_companies} />

        {/* Countries */}
        <List title="Countries" arr={movie.production_countries} />
      </div>

      <div className="flex flex-col gap-3">
        <p>{movie.overview}</p>

        <p>
          <span>Budget:</span>
          <span className="text-green-500 font-semibold ms-1">
            ${movie.budget === 0 ? "No info" : millify(movie.budget)}</span>
        </p>

        <p>
          <span>Revenue:</span>
          <span className="text-green-500 font-semibold ms-1">
            ${movie.revenue === 0 ? "No info" : millify(movie.revenue)}</span>
        </p>

      </div>
    </div>
  );
};

export default Content;
