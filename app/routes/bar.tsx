import { Link } from "@remix-run/react";
import Routes from "navigation";


export default function Bar () {
    return <div className="container font-sans p-4">
        <span style={{fontSize: 32}}>Hello from bar</span>
        <div>
            <Link to={Routes.Home}>Go back</Link>
        </div>
    </div>
}