/*like botton model*/


import React from "react";

function Counter(props) {
  console.log(`Rendering. props.likeCount is ${props.likeCount}`);

  return <button id="like-button">Likes: {props.likeCount}</button>;
}

export default Counter;


/*passing functions as props*/

import React from "react";

function ClickLoggerApp() {
	function logWhenClicked() {
		console.log("Button was clicked");
	}

	return (
		<div>
			<FancyButton handleClick={logWhenClicked} />
			<p>Then look in the console.</p>
		</div>
	);
}

function FancyButton(props) {
	return (
		<button className="my-fancy-classname" onClick={props.handleClick}>
			Click Me!
		</button>
	);
}

export default ClickLoggerApp;