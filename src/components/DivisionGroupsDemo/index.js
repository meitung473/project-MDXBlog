"use client";

import dynamic from "next/dynamic";
import Spinner from "../Spinner";

// export * from './DivisionGroupsDemo';
// export { default } from './DivisionGroupsDemo';

const LazyDivisionGroupsDemo = dynamic(() => import("./DivisionGroupsDemo"),{loading: Spinner});

export default LazyDivisionGroupsDemo;
