const ServiceCard = ({ icon, title, description, variant = "large", isDark = false }) => {
  const baseClasses = "service-card rounded-lg"

  const variantClasses = {
    large: `p-8 text-center ${isDark ? "bg-blue-800 text-white" : "bg-gray-50 shadow-md"}`,
    compact: `p-6 ${isDark ? "bg-blue-800 text-white" : "bg-gray-50 shadow-md"}`,
  }

  const iconColor = isDark ? "text-blue-200" : "text-blue-500"
  const titleColor = isDark ? "text-white" : "text-blue-900"
  const descriptionColor = isDark ? "text-blue-100" : "text-gray-600"

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className={`${iconColor} mb-4 ${variant === "large" ? "flex justify-center" : ""}`}>{icon}</div>
      <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>{title}</h3>
      <p className={`${descriptionColor} leading-relaxed`}>{description}</p>
    </div>
  )
}

export default ServiceCard
