# SurveyNest Website

SurveyNest is a platform that empowers users to create, participate, and engage in surveys. Whether you're a surveyor looking to gather valuable insights or a user eager to voice your opinions, SurveyNest has you covered.

## Features

1. **User Authentication:**
   - Users can log in to the platform, enabling them to participate in surveys and engage with the community.

2. **Survey Interaction:**
   - Users have the ability to vote, like, dislike, or report surveys, providing a dynamic and interactive experience.

3. **Pro User Membership:**
   - Unlock premium features by becoming a pro user member through a payment system.
   - Pro users can comment on surveys, fostering deeper discussions and engagement.

4. **Dashboards:**
   - **Admin Dashboard:** 
     - Admins have a dedicated dashboard for managing the platform.
     - Control surveys by publishing or unpublishing them.
     - Provide feedback to users and surveyors.

   - **Surveyor Dashboard:**
     - Surveyors can create surveys and monitor responses.
     - Access admin feedback for continuous improvement.

5. **Survey Management:**
   - Admins can exert control over surveys by publishing or unpublishing them.
   - Admins provide feedback to surveyors for quality enhancement.

## Live Site

Visit [SurveyNest](https://www.surveyx.com) to experience the platform firsthand.

---------------------------------------


# Backend Setup Challenges

During the development of the backend for SurveyNest, I encountered several challenges that required careful consideration and problem-solving. Below are some of the key challenges faced:

## 1. User Role Assignment (Admin/Surveyor)

Setting up user roles, especially distinguishing between administrators and surveyors, posed a significant challenge. It was crucial to establish a robust system for assigning and managing roles to ensure proper access control within the application.

### Resolution:

- Implemented a role-based access control (RBAC) system where user roles are clearly defined.
- Developed a mechanism for assigning roles during user registration or through an admin interface.
- Ensured proper validation to prevent unauthorized access to admin-specific features.

## 2. Payment Route Implementation

The integration of a payment system presented challenges, particularly in creating a secure and functional payment route on the backend. This involved handling payment processing and securely communicating with external payment gateways.

### Resolution:

- Utilized a reliable payment gateway API for processing payments securely.
- Implemented a payment route that handles payment requests and responses.
- Ensured encryption and proper error handling to enhance the security and reliability of payment transactions.

## 3. JWT (JSON Web Token) Implementation

Creating and managing JSON Web Tokens for user authentication and authorization required careful consideration. This was crucial for securing routes, validating user identity, and maintaining a stateless authentication system.

### Resolution:

- Integrated a JWT library to generate and verify tokens during user authentication.
- Implemented middleware to validate JWTs on protected routes.
- Ensured the proper handling of token expiration and refresh mechanisms for enhanced security.

---------------------------------------------




