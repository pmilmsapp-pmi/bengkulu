import { cloudinaryConfig as c,isCloudinaryConfigured } from "../config/cloudinary.js";
export async function uploadImage(file,folder="general"){
 if(!isCloudinaryConfigured)throw new Error("Konfigurasi Cloudinary belum diisi.");
 if(!(file instanceof File))throw new Error("Berkas gambar belum dipilih.");
 if(!c.acceptedTypes.includes(file.type))throw new Error("Format harus JPG, PNG, atau WEBP.");
 if(file.size>c.maxBytes)throw new Error("Ukuran gambar maksimal 3 MB.");
 const body=new FormData();body.append("file",file);body.append("upload_preset",c.uploadPreset);body.append("folder",`${c.baseFolder}/${folder}`);
 const res=await fetch(`https://api.cloudinary.com/v1_1/${encodeURIComponent(c.cloudName)}/image/upload`,{method:"POST",body});const json=await res.json();
 if(!res.ok)throw new Error(json.error?.message||"Upload gambar gagal.");return {url:json.secure_url,publicId:json.public_id,width:json.width,height:json.height,bytes:json.bytes};
}