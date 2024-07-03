import UploadImage from "./components/UploadImage";
export default function App() {
  console.log(11, import.meta.env.VITE_KEY_FIREBASE);

  return (
    <div>
      <UploadImage></UploadImage>
    </div>
  );
}
