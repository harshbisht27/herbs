import React from "react";
// import './ContactUs.css'; // Importing CSS for the footer

const ContactUs = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: info@vedavibes.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Ayurveda Street, Delhi, India</p>
        </div>
        <div className="credits">
          <p>© 2024 Veda Vibes. All Rights Reserved.</p>
          <p>Made with ❤️ by Harsh, Kartik, Kashish, Gaurav, Arnav, and Debasis </p>
        </div>
      </div>
    </footer>
  );
};


export default ContactUs;









// import React, { useState } from "react";
// // import './ContactUs.css'; // Importing CSS for the footer

// const ContactUs = () => {
//   const [query, setQuery] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setQuery({ ...query, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement submit logic (e.g., send to a backend or email service)
//     console.log(query);
//     alert("Your query has been submitted!");
//     setQuery({ name: "", email: "", message: "" }); // Clear form after submission
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="contact-details">
//           <h3>Contact Us</h3>
//           <p>Email: info@vedavibes.com</p>
//           <p>Phone: +91 12345 67890</p>
//           <p>Address: 123 Ayurveda Street, Delhi, India</p>
//         </div>

//         <div className="query-form">
//           <h3>Send Your Query</h3>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={query.name}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={query.email}
//               onChange={handleInputChange}
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={query.message}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//             <button type="submit">Send</button>
//           </form>
//         </div>

//         <div className="credits">
//           <p>© 2024 Veda Vibes. All Rights Reserved.</p>
//           <p>Made with ❤️ by Harsh, Kartik, Kashish, Gaurav, Arnav, and Team</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default ContactUs;

