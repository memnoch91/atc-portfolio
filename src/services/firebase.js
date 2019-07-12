import { initializeApp, firestore } from "firebase/app";
import "firebase/firestore";

import fireBaseConfig from "../fireBaseConfig.js";

// Get a Firestore instance
export const DB = initializeApp(fireBaseConfig).firestore();

// Export types that exists in Firestore
export const { TimeStamp, GeoPoint } = firestore;
