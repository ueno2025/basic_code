
export async function fetch_json(code) {
    const response = await fetch("./data/data.json");
    const companies = await response.json();
    const input = normalizeText(code);

    const company = companies.find(c => normalizeText(c["証券コード"]) == input) || companies.find(c => normalizeText(c["企業名"]) == input);

    return company
    
}

// 全角・半角、大文字、小文字をそろえる
function normalizeText(str) {
    return str
        .normalize("NFKC")
        .toUpperCase()
        .trim();
}
