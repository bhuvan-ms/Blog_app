import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

// we can pass function as a prop
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // duiring destructuring we can name the element that being destructured whatever we want as done with blogs and data
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Home;

//npx json-server --watch data/db.json  --port 8000
