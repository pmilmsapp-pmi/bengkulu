export const cloudinaryConfig = Object.freeze({
  cloudName: "__CLOUDINARY_CLOUD_NAME__",
  uploadPreset: "__CLOUDINARY_UNSIGNED_PRESET__",
  baseFolder: "pmi-bengkulu",
  maxBytes: 3 * 1024 * 1024,
  acceptedTypes: ["image/jpeg", "image/png", "image/webp"]
});
export const isCloudinaryConfigured = !cloudinaryConfig.cloudName.startsWith("__") && !cloudinaryConfig.uploadPreset.startsWith("__");