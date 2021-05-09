import Home from "./Home";
import PageLayout from "./PageLayout";
import firebase from "firebase/app";
import { ToastProvider } from "react-toast-notifications";

//TODO:
// - Upload page: Somehow add some validation for uploading images --> Using yup will break page. Just have an onChange to show/hide the form?
// - Add a better loading gif strategy for gallery and userGallery pages
// - Don't stress about this one too much --> Get comments page working: Users need to be able to upload a comment and view comments by others
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAU_eowjy53PzVgPFqKGPwsqePwG0ayhf4",
    authDomain: "weddingsite-f408d.firebaseapp.com",
    projectId: "weddingsite-f408d",
    storageBucket: "weddingsite-f408d.appspot.com",
    messagingSenderId: "1021525430201",
    appId: "1:1021525430201:web:1f54ef4464155e9ab5b068"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <ToastProvider>
      <PageLayout>
        <Home />
      </PageLayout>
    </ToastProvider>
  );
}

export default App;
