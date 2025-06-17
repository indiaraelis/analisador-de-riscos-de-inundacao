import geopandas as gpd
import os

base_dir = r"C:\Users\indiara-elis\Documents\Projetos tec-dev-geo\analisador-de-riscos-de-inundacao\public"
input_shp = os.path.join(
    base_dir, "data",
    "Brasil_vulnerabilidade_inundacoes",
    "Brasil_vulnerabilidade_inundacoes.shp"
)
output_geojson = os.path.join(base_dir, "data", "vuln.geojson")

# Carrega o shapefile
gdf = gpd.read_file(input_shp)

# Garante CRS SAD69 e converte para WGS84
if gdf.crs is None:
    gdf.set_crs("EPSG:4291", inplace=True)
gdf = gdf.to_crs("EPSG:4326")

# Renomeia a coluna Vulnerabil
if "Vulnerabil" in gdf.columns:

    gdf.rename(columns={"Vulnerabil": "Vulnerabilidade"}, inplace=True)

# Exporta para GeoJSON
gdf.to_file(output_geojson, driver="GeoJSON")
print(f"✅ GeoJSON gerado em: {output_geojson}")