// A chave de API do OpenWeatherMap (substitua pela sua)
const apiKey = '8fe335f6d63a79460cd404936bde1cfe'; // Substitua com a sua chave da API

// Função para buscar os dados do clima e calcular o risco de inundação
document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    
    if (!city) {
        alert('Por favor, digite o nome de uma cidade.');
        return;
    }
    
    // URL da API do OpenWeatherMap para obter os dados de clima
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('Cidade não encontrada!');
                return;
            }

            // Exibe os dados na página
            document.getElementById('cityName').textContent = `Cidade: ${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
            document.getElementById('humidity').textContent = `Umidade: ${data.main.humidity}%`;
            document.getElementById('weatherDescription').textContent = `Clima: ${data.weather[0].description}`;

            // Calcular o risco de inundação baseado na umidade
            let floodRisk = 'Risco baixo';
            if (data.main.humidity > 80) {
                floodRisk = 'Risco alto de inundação';
            } else if (data.main.humidity > 60) {
                floodRisk = 'Risco moderado de inundação';
            }

            document.getElementById('floodRisk').textContent = `Alerta de Inundação: ${floodRisk}`;
        })
        .catch(error => {
            alert('Erro ao carregar os dados da API. Tente novamente mais tarde.');
            console.error(error);
        });
});
