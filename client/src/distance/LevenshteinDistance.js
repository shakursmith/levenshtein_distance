import React from "react";

function LevenshteinDistance({ string, data }) {
  return (
    <div className="alert alert-success text-dark" role="alert">
      The Levenshtein distance between <strong>{string.first_string}</strong>{" "}
      and <strong>{string.second_string}</strong> is <strong>{data}</strong>.
    </div>
  );
}

export default LevenshteinDistance;
