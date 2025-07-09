import type { Route } from "./+types/login";
import { LoginPage } from "~/pages/loginPage/loginPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ورود" },
    { name: "description", content: "به صفحه ورود خوش آمدید!" },
  ];
}

export default function Home() {
  return <LoginPage />;
}
