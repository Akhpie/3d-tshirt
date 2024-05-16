import React, { useState, useEffect } from "react";

const Notification = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return show ? (
    <div className="notification">
      <p>{message}</p>
    </div>
  ) : null;
};

export default Notification;
