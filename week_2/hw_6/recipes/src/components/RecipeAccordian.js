import React from "react";

export default function RecipeAccordian() {
  return (
    <div className="accordian">
      <div className="accordian-item">
        <h2 className="accordian-header">
          <button
            className="accordian-button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
          ></button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
        >
          <div class="accordion-body"></div>
        </div>
      </div>
    </div>
  );
}
