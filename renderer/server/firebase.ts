import "firebase/auth";
import "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";

const auth = getAuth();
const fireStore = getFirestore();

export const signUpEmail = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const createUser = async (name: string, email: string) => {
  try {
    const docRef = await addDoc(collection(fireStore, "users"), {
      name,
      email,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// export const getUsers = async () => {
//   try {
//     const result = await getDocs(collection(fireStore, "users"));
//     const data = result.docs.map((el) => el.data());
//     console.log("result", data);
//     setUserList(data);
//   } catch (e) {
//     console.error("Error getUsers : ", e);
//   }
// };
