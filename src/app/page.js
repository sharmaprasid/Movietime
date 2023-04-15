import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "trending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "top rated"
        ? "movie/top_rated"
        : genre === "release"
        ? "movie/upcoming"
        : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};
export default Home;
