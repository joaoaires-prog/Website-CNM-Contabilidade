import React from "react";

export default function FloatingInstagram() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const username = "cnmcontabilidade";

  const desktopUrl =
    "https://www.instagram.com/cnmcontabilidade?utm_source=ig_web_button_share_sheet&igsh=NWFmbXUwZzFoYzdu";

  const mobileUrl = `instagram://user?username=${username}`;

  const url = isMobile ? mobileUrl : desktopUrl;

  const buttonStyle = {
    position: "fixed",
    bottom: "90px", 
    right: "20px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "#E4405F", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    textDecoration: "none",
    zIndex: 9999,
    transition: "transform 0.15s ease-in-out",
  };

  const iconStyle = {
    width: "26px",
    height: "26px",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir Instagram"
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Ícone Instagram SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        style={iconStyle}
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 1.5A4.26 4.26 0 003.5 7.75v8.5A4.26 4.26 0 007.75 20.5h8.5a4.26 4.26 0 004.25-4.25v-8.5A4.26 4.26 0 0016.25 3.5h-8.5zm4.25 3.75a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z" />
      </svg>
    </a>
  );
}
