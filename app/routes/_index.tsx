import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Routes from "navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Digital Commons Collective" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
    return (
        <div className="container font-sans p-4">
            <h1 style={{fontSize: 32}}>You down with DCC?!</h1>
            <div>
                <Link to={Routes.Foo}>Yeah you know me</Link>
            </div>
            <div>
                <Link to={Routes.Bar}>Not really</Link>
            </div>
    </div>
  );
}
