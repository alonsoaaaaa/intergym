import NavBar from "@/components/nav-bar";
import React from "react";

function AddressPage() {
  return (
    <div>
      <NavBar />
      <div className="mt-4 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15061.313225723823!2d-98.9232688!3d19.311555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1fe7b858a4b9%3A0x5c147eae5e268e35!2sThe%20Gym!5e0!3m2!1sen!2smx!4v1715896883250!5m2!1sen!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="font-bold text-center pt-4">
        Nos ubicamos en Av. Cuauhtemoc #95 Col. Loma Bonita, Ayotla, Ixtapaluca,
        México, Ixtapaluca, Mexico, 56565
      </p>
    </div>
  );
}

export default AddressPage;
