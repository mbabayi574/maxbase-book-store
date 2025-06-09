import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "خانه" },
    { name: "description", content: "به صفحه اصلی خوش آمدید!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
