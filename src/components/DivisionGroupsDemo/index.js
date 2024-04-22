"use client";

import dynamic from "next/dynamic";
import Spinner from "../Spinner";



const LazyDivisionGroupsDemo = dynamic(() => import("./DivisionGroupsDemo"),{loading: Spinner});

export default LazyDivisionGroupsDemo;
