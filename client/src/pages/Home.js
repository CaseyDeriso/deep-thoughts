import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_THOUGHTS } from "../utils/queries";

import ThoughtList from "../components/ThoughtList";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  const thoughts = data?.thoughts || [];

  console.log(thoughts);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Think about this..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;