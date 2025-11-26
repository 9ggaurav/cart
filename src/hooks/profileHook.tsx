import { useState } from "react";

export default function useProfile() {
  const [profilePic, setProilePic] = useState<string>(() => {
    const saved = localStorage.getItem("profilePic");
    return saved ? saved : "/fallbackUser.png";
  });

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setProilePic(base64);
      localStorage.setItem("profilePic", base64);
    };
    reader.readAsDataURL(file);
  }

  return { profilePic, handleUpload };
}
