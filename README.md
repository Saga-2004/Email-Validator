📧 Email Validator Web App
This project is a simple and interactive Email Validator built using web technologies. It allows users to enter an email address and checks if the email is valid using a third-party validation service.

🔍 What This Project Does
Accepts user input in the form of an email address through a web form.

Checks whether the entered email is in a valid format (must contain '@').

Sends the email to an external validation API.

Displays the results (like domain, validity, disposable status, etc.) on the screen.

Provides real-time feedback to the user, including a loading animation while checking.

🎯 Purpose of the Project
To practice JavaScript DOM manipulation and event handling.

To understand how to use an external API in a web application.

To demonstrate basic form validation techniques.

To show how user feedback can be handled interactively in web apps.

🌐 How It Works (In Theory)
A user enters their email address into a form field.

When they click the "Check" button:

If the input is empty, a message asks the user to type something.

If the input doesn't contain '@', an error message is shown.

If it looks valid, a loading symbol is displayed while checking.

A request is sent to an email verification API (such as emailvalidation.io).

The API returns information about the email, like:

Whether the syntax is correct

Whether the domain exists

Whether it’s a disposable email

And more

All these results are displayed on the screen below the form.

🖼️ Visual & UI Details
The webpage has a clean layout with a navigation bar, a form, and a result section.

A loading animation (bouncing-circles.svg) is shown during the validation process.

All messages are shown in a user-friendly format for better understanding.

📘 Learning Outcomes
By building this project, you will:

Understand the basics of form handling in web development.

Learn how to make API calls using JavaScript.

Improve your ability to give feedback to users through dynamic content updates.

Experience how real-time input validation enhances user experience.

✅ Future Improvements
Add more design styling using CSS.

Show more specific error messages for different cases (e.g., invalid domain).

Host the project live using GitHub Pages or Netlify.

Secure the API key in a backend environment (for advanced usage).
