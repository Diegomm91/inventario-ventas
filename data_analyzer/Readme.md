# 📊 Data Analyzer - Procesamiento ETL

Script de procesamiento de datos financieros que utiliza el ecosistema de **Python** para transformar datos crudos en información accionable.

### Pipeline de Datos
1. **Extracción:** Lectura de archivos CSV de ventas.
2. **Transformación:** Limpieza de datos, manejo de valores nulos y conversión de tipos con **Pandas**.
3. **Análisis:** Cálculo de ingresos totales por categoría y métricas mensuales.
4. **Carga:** Persistencia de resultados en una base de datos local **SQLite**.

### Ejecución
```bash
python3 analyzer.py