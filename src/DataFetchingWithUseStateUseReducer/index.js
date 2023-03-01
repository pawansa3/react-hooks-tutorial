import axios from "axios";
import { useEffect, useState } from "react";

const DataFetchingWithUseState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []);

  return (
    <div>
      <h3>Data fetching using useState and useEffect</h3>

      {loading ? "Loading" : error ? error : post.title}
    </div>
  );
};

export default DataFetchingWithUseState;
