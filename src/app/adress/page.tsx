import NavBar from "@/components/nav-bar";
import React from "react";

function AddressPage() {
  return (
    <div>
      <NavBar />
      <div className="mt-4 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2979870263766!2d-98.89479272611817!3d19.312871544496268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f22ba80dfe3%3A0x219ecf38a9e49cf4!2sInternational%20Fitness!5e0!3m2!1sen!2smx!4v1715982516455!5m2!1sen!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="font-bold text-center pt-4">
        Nos ubicamos en Av. Cuauhtémoc No 36, Colonia Santa Barbara ,
        Ixtapaluca, Mexico
      </p>
    </div>
  );
}

export default AddressPage;
