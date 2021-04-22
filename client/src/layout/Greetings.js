import React from "react";

function Greetings() {
  return (
    <div className="jumbotron bg-transparent w-90">
      <h1 className="h2">Calculate Levenshtein Distance</h1>
      <p className="pt-3">
        The "Levenshtein distance" is a metric for measuring the distance
        between two words. The "distance" is the minimum number of
        single-character edits (insertions, deletions or substitutions) required
        to change one word into the other.
      </p>
      <p>
        For example, the Levenshtein distance between "kitten" and "sitting" is
        3.
      </p>
    </div>
  );
}

export default Greetings;
