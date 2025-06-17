# 🌊 Mapa de Vulnerabilidade às Inundações

Visualização interativa da vulnerabilidade às inundações no Brasil, construída com **Leaflet.js** e dados geográficos públicos. O projeto permite visualizar áreas com diferentes níveis de vulnerabilidade (Alta, Média e Baixa) e buscar cidades pelo nome.

> 📍 Projeto simples, 100% em HTML, JS e Python (GeoPandas), ideal para estudos de geotecnologias aplicadas e visualização web.

---

## 🖼️ Demonstração

![Demonstração do Mapa](./assets/demo-print1.png)
![Busca de Cidade](./assets/demo-print2.png)

---

## 🧠 Objetivo

Este projeto foi criado para facilitar a **interpretação espacial de dados sobre vulnerabilidade a inundações** em diferentes regiões do Brasil. Ele serve como um recurso educativo e técnico, usando tecnologias acessíveis e abertas para transformar dados vetoriais (shapefiles) em mapas interativos na web.

---

## 🚀 Como rodar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
2. Ative um ambiente Python e instale dependências

python -m venv .venv
source .venv/bin/activate  # ou .venv\Scripts\activate no Windows
pip install geopandas
3. Converta o shapefile para GeoJSON
Certifique-se de ter o shapefile em public/data/Brasil_vulnerabilidade_inundacoes/. Depois, rode:

python mapa_inundacao.py
4. Abra o mapa no navegador
Basta abrir o arquivo public/mapa.html diretamente no navegador.
```bash

---
## 🛠️ Tecnologias e Ferramentas
Leaflet.js — biblioteca JavaScript de mapas interativos
GeoPandas — manipulação de dados espaciais com Python
OpenStreetMap — camada base do mapa
GeoJSON — formato leve para dados geográficos vetoriais
HTML + JS puro — sem frameworks

---

## 📦 Fonte dos Dados

Os dados utilizados neste projeto foram obtidos da **Agência Nacional de Águas (ANA)** e fazem parte do **Atlas de Vulnerabilidade a Inundações Graduais no Brasil**.

- **Título:** Trechos de cursos d'água com vulnerabilidade a inundações graduais
- **Escala:** 1:1.000.000
- **Período de referência:** 01/02/2011 a 01/11/2014
- **Modo de apresentação:** Mapa digital vetorial (Shapefile)
- **Finalidade:** Fornecer base técnica para formulação de políticas públicas e ações mitigadoras de inundações graduais em território nacional
- **Atualização:** Anual
- **Idioma:** Português (UTF-8)
- **Categoria temática:** Localização geográfica

---

### 🏢 Responsáveis técnicos

**Publicador:**  
Agência Nacional de Águas (ANA)  
Superintendência de Operações e Eventos Críticos  
📍 SIA Trecho 4, Lote 370, Sala 109 – Brasília, DF – CEP 71200-040  
📞 (61) 2109-5207 / (61) 2109-5300  
👤 Joaquim Côrrea Gondim Filho (Superintendente)

**Ponto de contato técnico:**  
Coordenação de Eventos Críticos  
📍 Sala 102 – mesmo endereço acima  
📞 (61) 2109-5517  
👤 Geraldo José Lucatelli D. de A. Junior (Especialista em Geoprocessamento)

---

### 🔓 Acesso e licenciamento

- **Restrição de uso:** Nenhuma – dados de acesso livre e disponíveis no Portal do SNIRH
- **Licença:** Livre para uso, com obrigatoriedade de citação da fonte

---

## 🔍 Funcionalidades

🔎 Busca de cidades por nome (com geocodificação)
🗺️ Camada temática com cores por nível de vulnerabilidade
📏 Legenda personalizada no canto inferior direito
⚙️ Conversão automática do CRS (de SAD69 para WGS84)
📁 Estrutura de pastas

├── mapa.html               # Mapa principal
├── mapa_inundacao.py       # Script para gerar o GeoJSON
├── public/
│   └── data/
│       └── Brasil_vulnerabilidade_inundacoes/
│           └── *.shp      # Shapefiles de entrada
│       └── vuln.geojson   # Saída gerada pelo script
├── assets/
│   └── Campo de Pesquisa.png        # Prints do mapa
│   └── Mapa de Vulnerabilidade.png  # Prints do mapa

---

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar.

---

## 👩‍💻 Autora
Feito com 💚 por Indiara Elis
Especialista em geotecnologias e apaixonada por transformar dados em decisões.