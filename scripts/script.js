// Inicializando o mapa
const map = L.map('map').setView([51.505, -0.09], 13); // Exemplo de coordenadas de Londres

// Adicionando o mapa base com o OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const apiKey = '8fe335f6d63a79460cd404936bde1cfe';
const url = `https://api.openweathermap.org/data/2.5/alerts?lat=51.505&lon=-0.09&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.alerts) {
            // Exibe os alertas de risco no HTML
            let alertsContent = '';
            data.alerts.forEach(alert => {
                alertsContent += `
                    <div>
                        <strong>${alert.event}</strong>
                        <p>${alert.description}</p>
                    </div>
                `;
            });
            document.getElementById('alerts').innerHTML = alertsContent;
        }
    })
    .catch(error => console.error('Erro ao obter os alertas:', error));
