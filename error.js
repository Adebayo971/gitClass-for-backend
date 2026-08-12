try {
    let result = 10/2;
    console.log(result);
    multiplication();
    console.log("this line will not run")

} catch (error) {
    console.log("An error ocure " + error.message + " " + error.name)
}

console.log("The program continues here");

try {
    let user = null;
    console.log(user.name); // Cannot read property of null
} catch (error) {
    console.log(error.name);    // "TypeError"
    console.log(error.message); // Cannot read properties of null
    console.log(error.stack);   // Full details and line number
}

function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if (userId <= 0) {
            throw new Error("User ID must be greater than 0");
        }
        console.log("Data loaded for user: " + userId);
    } catch (error) {
        console.log("Failed: " + error.message);
    } finally {
        console.log("Loading complete. Closing connection."); // ALWAYS runs
    }
}
loadUserData(5);   // Data loaded for user: 5  -->  Loading complete.
loadUserData(-1);


function registerStudent(name, age) {
    try {
        if (!name || name.trim() === "") {
            throw new Error("Name cannot be empty!");
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age);
        }
        console.log("Student registered: " + name + ", Age: " + age);
    } catch (error) {
        console.log("Registration failed: " + error.message);
    }
}

registerStudent("Bola Okafor", 22); // Student registered: Bola Okafor, Age: 22
registerStudent("", 22);            // Registration failed: Name cannot be empty!
registerStudent("Kemi", 12);        // Registration failed: Age must be between 16 and 60.
