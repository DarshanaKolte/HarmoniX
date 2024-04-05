
        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the form from submitting
            // Perform form validation here
            let email = document.getElementsById('email').value;
            let confirmEmail = document.getElementsById('confirm-email').value;
            let password = document.getElementById('password').value;
            let confirmPassword = document.getElementById('confirm-password').value;
            let profileName = document.getElementById('profile-name').value;
            let dob = document.getElementById('dob').value;
            let gender = document.querySelector('input[name="gender"]:checked');
            let shareData = document.getElementById('share-data').checked;

            // Simple validation example (you can add more complex validation as needed)
            if (email !== confirmEmail) {
                alert("Emails do not match.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            if (!gender) {
                alert("Please select a gender.");
                return;
            }

            // Form is valid, you can submit the form or perform other actions here
            alert("Form submitted successfully!");
            // Reset form after submission
            document.getElementById('signup-form').reset();
        });
