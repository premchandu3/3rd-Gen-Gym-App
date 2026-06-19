// import Home from "./home/page";
// import AboutPreview from "@/components/AboutPreview";

// export default function Page() {
//   return (<>
//   <Home />
//   <AboutPreview />
//   </>);
// }


import { redirect } from "next/navigation";

export default function Page() {
  redirect("/home");
}