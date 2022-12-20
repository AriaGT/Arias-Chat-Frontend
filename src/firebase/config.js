import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyALhVl6m7gMsG-RiZ8mm-KqB2iumryZ0nQ",
  authDomain: "arias-chat.firebaseapp.com",
  projectId: "arias-chat",
  storageBucket: "arias-chat.appspot.com",
  messagingSenderId: "672417924679",
  appId: "1:672417924679:web:896147c5df395d6b401362",
  measurementId: "G-K9211WD3T8"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}