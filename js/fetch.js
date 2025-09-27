
export async function fetch_json(code) {
    const response = await fetch("./data/data.json");
    const companies = await response.json();

    const company = companies.find(c => c["証券コード"] == code);
    return company
    
}