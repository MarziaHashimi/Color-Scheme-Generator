function generateColorScheme() {
    const seedColor = document.getElementById('seed-color').value;
    const colorMode = document.getElementById('color-mode').value;
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.slice(1)}&mode=${colorMode}&count=5`)
        .then(response => response.json())
        .then(data => {
            const colors = data.colors.map(color => {
                return `<div class="color-container"><div class="color-box" style="background-color: ${color.hex.value}"></div><div class="color-value">${color.hex.value}</div></div>`;
            });
            document.getElementById('color-scheme').innerHTML = colors.join('');
        })
        .catch(error => console.log('Error:', error));
}