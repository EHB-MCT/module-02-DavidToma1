// 1. Setup Data: Array of Objects
// We start with some dummy data to simulate existing reviews
let reviews = [
	{
		name: "Mike Derycke",
		rating: 5,
		text: "Great course. Come study MCT at EHB!",
	},
	{
		name: "P. Dickx",
		rating: 2,
		text: "I liked the orignal more.",
	},
	{
		name: "Student 1",
		rating: 1,
		text: "Hard.",
	},
];

// 2. Select DOM Elements

let container = document.querySelector("#reviews-container");
let nameInput = document.querySelector("#name");
let ratingInput = document.querySelector("#rating");
let reviewInput = document.querySelector("#review");
let form = document.querySelector("#review-form");

// 3. Render Function
// This function should render the reviews array, based on the template in the HTML file.
function renderReviews() {
	console.log("Render the reviews");
	container.innerHTML = " ";
	for (let i = 0; i < reviews.length; i++) {
		let review = reviews[i];
		let reviewDiv = document.createElement("div");
		reviewDiv.classList.add("review-item");

		reviewDiv.innerHTML = `
			<div class="review-header">
				<span class="review-name">${review.name}</span>
				<span class="review-rating">${stars}</span>
			</div>
			<p class="review-text">${review.text}</p>
		`;

		container.appendChild(reviewDiv);
	}
}

// 4. Initial Render
// Call the function once on load to show the initial data
renderReviews();

// 5. Handle Form Submission

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let newReview = [
		{
			name: nameInput.value,
			rating: Number(ratingInput.value),
			text: reviewInput.value,
		},
	];
	reviews.push(newReview);
	renderReviews();

	nameInput.value = "";
	ratingInput.value = "";
	reviewInput.value = "";
});
