async function submitFeedback() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(name, email, message);

    try {
        const response = await fetch('http://localhost:3000/api/v1/users/feedbacks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        console.log('Server Response:', response);

        if (!response.ok) {
            const errorText = await response.text(); // Capture any error message
            throw new Error(`Feedback submission failed: ${errorText}`);
        }

        const data = await response.json();
        console.log('Feedback submission successful:', data);
        alert('Thank you for your feedback!');

    } catch (error) {
        console.error('Error submitting feedback:', error.message);
        alert('Feedback submission failed');
    }
}

document.querySelector('button').addEventListener('click', function (event) {
    console.log('Button clicked');
    event.preventDefault(); // Prevent the default form submission behavior
    submitFeedback();
});
