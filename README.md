# PSFRS: Interactive Geospatial Dashboard for Soil Nutrient Visualization

A browser-based dashboard built using JavaScript, Leaflet.js, and GeoServer for exploring state-wise soil nutrient (NPK) data via raster layers and feature-level interactions. Designed for research visualization and decision-support in soil health monitoring.

---

## 📌 Overview

**PSFRS** is an interactive geospatial dashboard that allows users to explore nitrogen (N), phosphorus (P), and potassium (K) levels across Indian states using high-resolution raster data. Built with Leaflet.js and GeoServer, it supports dynamic map interactions and visual analysis of feature-level soil statistics.

Developed during work at ICAR-INDIAN INSTITUTE OF SOIL SCIENCE to support research in digital soil mapping and agronomic planning.

---

## 🚀 Features

- 🗺️ **Raster Layer Visualization**  
  Load and toggle N, P, and K raster layers across regions.

- 📍 **Interactive Feature Clicks**  
  Click on states or polygons to display nutrient summaries and metadata.

- ⚡ **Responsive Dashboard UI**  
  Smooth map zoom/pan with dynamic legend and layer controls.

- 🌐 **GeoServer-Backed Tiles & Queries**  
  Efficient WMS/WFS layer serving for scalable GIS integration.

---

## 🧰 Tech Stack

- **Frontend:** JavaScript, HTML/CSS
- **Geospatial Server:** GeoServer
- **Data Formats:** GeoTIFF (for rasters), Shapefiles / GeoJSON (for vector)
- **Deployment Option:** Localhost / Remote Web Server / Amazon Web Service

---

## ⚙️ Installation & Setup

### 📁 1. Clone & Serve the Dashboard
```bash
git clone https://github.com/arti-rajput/PSFRS.git
cd PSFRS
# Serve psfrs.html using any local server
# Example (Python 3):
python -m http.server 8000
