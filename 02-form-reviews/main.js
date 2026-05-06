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
	}
}

// 4. Initial Render
// Call the function once on load to show the initial data
renderReviews();

// 5. Handle Form Submission
// 5.1 Stop the page from reloading!

// 5.2 Create a new object from input values

// 5.3 Add (push) the new object to our data array

// 5.4 Re-render the list to show the new item

// Optional: Clear the form fields
