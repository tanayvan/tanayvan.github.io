import React from "react";
import "./card.scss";
export default function Card({ title, content }) {
  return (
    <section class="container">
      <div class="card">
        <div class="content">
          <h6>{title}</h6>
          <div class="hover_content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
