import React, { useState, useEffect } from 'react';

const Body = ({ body, id}) => {
  function showMore() {
    let element = document.getElementById(id);
    var dots = element.querySelector('.dots');
    var moreText = element.querySelector('.show-more');
    var btnText = element.querySelector('.moreBtn');

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "inline";
    }
  };

  if (body.length > 250) {
    return (
      <div>
        <p>{body.substring(0, 250)}<span className="dots">...</span>
        <span className="show-more">{body.substring(250)}</span></p>
        <button className="moreBtn" onClick={showMore}>Show More</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>{body}</p>
      </div>
    )
  }
}

export default Body;
