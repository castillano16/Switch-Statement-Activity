let day = prompt("Enter a day of the week:").toLowerCase(); // Convert input to lowercase for consistency
let task;

switch (day) {
    case "Monday":
        task = "Finish your assignments.";
        break;
    case "Tuesday":
        task = "Attend your online classes.";
        break;
    case "Wednesday":
        task = "Work on your project.";
        break;
    case "Thursday":
        task = "Review your lessons.";
        break;
    case "Friday":
        task = "It's time to quiz.";
        break;
    case "Saturday":
        task = "Take rest and relax.";
        break;
    case "Sunday":
        task = "Got to Church.";
        break;
    default:
        task = "Invalid day entered. Please enter a valid day of the week.";
}

console.log(`Your task for ${day.charAt(0).toUpperCase() + day.slice(1)} is: ${task}`);
