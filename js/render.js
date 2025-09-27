
export async function render_data(company_data) {
    const resultDiv = document.getElementById("result");

    if (company_data) {
    
        resultDiv.innerHTML = `
        <p>証券コード: ${company_data["証券コード"]}</p>
        <p>企業名: ${company_data["企業名"]}</p>
        <p>業種: ${company_data["業種"]}</p>
        `;

    }
    
}