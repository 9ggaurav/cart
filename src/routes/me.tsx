import { useOutletContext } from "react-router-dom";
import { type RootContext } from "../types";

export default function Me() {
  const { profilePic, handleUpload } = useOutletContext<RootContext>();
  return (
    <div>
      <div>
        <img
          className="w-60 h-60 rounded-[50%]"
          src={profilePic}
          onClick={() => document.getElementById("fileInput")?.click()}
        />
      </div>
      <input
        id="fileInput"
        accept="image/*"
        className="hidden"
        onChange={handleUpload}
        type="file"
      />
    </div>
  );
}
