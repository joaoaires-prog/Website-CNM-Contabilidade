import React from "react";

const WhatsAppButton = ({
  phoneNumber = "556132727877",
  message = "Olá, gostaria de mais informações!"
}) => {

  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );


  const url = isMobile
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;


  const buttonStyle = {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    textDecoration: "none",
    zIndex: 1000,
    transition: "transform 0.15s ease-in-out"
  };

  const iconStyle = {
    width: "28px",
    height: "28px"
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat no WhatsApp"
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle} aria-hidden="true">
        <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.372 0 .001 5.372.001 12c0 2.113.553 4.177 1.603 6.01L0 24l6.194-1.59A11.905 11.905 0 0 0 12 24c6.628 0 12-5.372 12-12 0-3.197-1.247-6.19-3.5-8.5zM12 21.5c-1.736 0-3.425-.444-4.932-1.28l-.35-.202-3.684.946.99-3.595-.226-.368A9.5 9.5 0 1 1 21.5 12 9.49 9.49 0 0 1 12 21.5zM17.2 14.1c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14s-.73.91-.9 1.1c-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.83-.73-1.39-1.63-1.55-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.04-.36-.02-.5-.06-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.35-.01-.54-.01s-.5.07-.76.36c-.26.28-1 1-1 2.45s1.03 2.85 1.17 3.05c.14.19 2.02 3.08 4.9 4.32 1.19.51 2.12.81 2.85 1.03 1.2.37 2.29.32 3.15.19.96-.15 2.96-1.21 3.38-2.38.41-1.17.41-2.17.29-2.38-.12-.21-.44-.33-.92-.47z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;