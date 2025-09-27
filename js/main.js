import {fetch_json} from "./fetch.js";
import {render_data} from "./render.js";


async function main() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    
    if (code) {
        const company_data = await fetch_json(code);
        render_data(company_data);
    }
    
}

main();
