# [Bushido Bootcamp](https://bushido-6b28c.web.app// "Bushido Bootcamp")
Hover over the title to see the link.

# Featured

* User Registration and Authentication:

    * Student: Students can register for an account using their email and password, allowing them to access the website's features.
    * Instructor: Instructors can also register as users, specifying their role during the registration process.
Admin: Admins have pre-defined privileged access to the system and can log in using their admin credentials.

* Course Management:

    * Student: Students can browse the course catalog, view course details, enroll in available courses, and access their enrolled courses for learning.
    * Instructor: Instructors can create new courses, edit existing courses, and manage the content, curriculum, and prerequisites of their courses.
Admin: Admins can view, approve, or reject courses submitted by instructors, providing feedback if necessary.
* Stripe Payment Integration:

    * Student: Students can securely make payments for the courses they wish to enroll in using the Stripe payment gateway.
    * Instructor: Instructors receive payments from students who enroll in their courses through the integrated Stripe payment system.
* Instructor Dashboard:

    * Instructor: Instructors have access to a dedicated dashboard where they can view and manage their courses, track student enrollment, update course content, and monitor their earnings.
* Admin Dashboard:

    * Admin: Admins have access to an admin dashboard where they can manage user accounts, including promoting students to instructors or admins and managing user roles. They can also review and approve/deny courses submitted by instructors.
* Dark Mode Toggle:

    * Student, Instructor, and Admin: All users have the ability to toggle between light mode and dark mode across the entire website to suit their preferences.

## Technologies
* For the frontend, you are utilizing React, React Router, React Form Hook, React Icons, React Anime, Tailwind CSS, and DaisyUI. React provides a robust framework for building interactive user interfaces, while React Router enables efficient navigation within the website. React Form Hook facilitates form handling and validation, while React Icons offers a wide range of icons for visual representation. React Anime adds engaging animations, while Tailwind CSS and DaisyUI streamline responsive design and styling.

* On the backend, you have chosen Express.js and MongoDB. Express.js serves as a flexible backend framework for handling API requests and managing CRUD operations related to course management. MongoDB acts as the database to store course information, instructor data, and user roles. Additionally, you are utilizing Firebase Authentication for user registration, login, and authentication. Stripe is integrated for secure payment processing, and JSON Web Tokens (JWT) are used for securing and authenticating API requests.