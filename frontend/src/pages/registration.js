// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// function Registrations() {
//   const [formData, setFormData] = useState({
//     names: '',
//     address: '',
//     mother_name: '',
//     father_name: '',
//     parent_tel: '',
//     image_path: null,
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     if (type === 'file') {
//       setFormData({
//         ...formData,
//         [name]: e.target.files[0],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.names || !formData.address || !formData.mother_name || !formData.father_name || !formData.parent_tel || !formData.image_path) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Handle image upload first
//       const imageData = new FormData();
//       imageData.append('image', formData.image_path);

//       const imageUploadResponse = await fetch('http://localhost:5000/picture/upload', {
//         method: 'POST',
//         body: imageData,
//       });

//       if (!imageUploadResponse.ok) {
//         const errorData = await imageUploadResponse.json();
//         throw new Error(errorData.message || 'Failed to upload the image.');
//       }

//       const imageUploadResult = await imageUploadResponse.json();
//       const imageUrl = imageUploadResult.url;

//       // Now handle the form data submission with the uploaded image URL
//       const data = {
//         names: formData.names,
//         address: formData.address,
//         mother_name: formData.mother_name,
//         father_name: formData.father_name,
//         parent_tel: formData.parent_tel,
//         image_path: imageUrl,
//       };

//       const response = await fetch('http://localhost:5000/api/students', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to submit the form.');
//       }

//       alert('Registration successful!');
//       setFormData({
//         names: '',
//         address: '',
//         mother_name: '',
//         father_name: '',
//         parent_tel: '',
//         image_path: null,
//       });

//       e.target.reset();
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//       setError(error.message || 'An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex">
//         {/* Sidebar */}
//         <nav className="col-md-2 d-none d-md-block bg-dark sidebar vh-100 text-light">
//           <div className="sidebar-sticky p-3">
//             <h4 className="text-center text-light mb-4">📊 Dashboard</h4>
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <a className="nav-link text-light active" href="/home">
//                   🏠 Dashboard
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-light" href="/registration">
//                   📝 Registration
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <Link to="/card" className="nav-link text-light">
//                   👁 View
//                 </Link>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link text-light" href="/info">
//                     📚 Student Details
//                   </a>
//                 </li>
//               <li className="nav-item">
//                 <a className="nav-link text-danger fw-bold" href="/">
//                   🚪 Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <div className="container-fluid">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h1 className="h2">Admin Dashboard</h1>
//           </div>

//           {/* Centered Form Section */}
//           <div className="d-flex justify-content-center align-items-center ">
//             <div className="card shadow-lg rounded-4 p-4 col-md-4">
//               <div className="card-header bg-primary text-white text-center py-2 rounded-top">
//                 <h4 className="mb-0 fw-bold">Student Registration</h4>
//               </div>

//               <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label className="form-label fw-semibold">Full Name</label>
//                     <input type="text" className="form-control" name="names" value={formData.names} onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label fw-semibold">Address</label>
//                     <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label fw-semibold">Mother's Name</label>
//                     <input type="text" className="form-control" name="mother_name" value={formData.mother_name} onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label fw-semibold">Father's Name</label>
//                     <input type="text" className="form-control" name="father_name" value={formData.father_name} onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label fw-semibold">Parent's Phone</label>
//                     <input type="tel" className="form-control" name="parent_tel" value={formData.parent_tel} onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label fw-semibold">Upload Image</label>
//                     <input type="file" className="form-control" name="image_path" onChange={handleChange} required />
//                   </div>
//                   <button className="btn btn-success w-100 py-2 fw-bold" type="submit" disabled={loading}>
//                     {loading ? <span className="spinner-border spinner-border-sm"></span> : 'Register'}
//                   </button>
//                   {error && <div className="alert alert-danger mt-3">{error}</div>}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Registrations;
