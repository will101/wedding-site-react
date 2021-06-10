import Home from "./Home";
import PageLayout from "./PageLayout";
import firebase from "firebase/app";
import { ToastProvider } from "react-toast-notifications";

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
    <ToastProvider placement="top-center" autoDismiss={true} autoDismissTimeout={10000}>
      <PageLayout>
        <Home />
      </PageLayout>
    </ToastProvider>
  );
}

export default App;
