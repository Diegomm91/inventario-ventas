import pandas as pd
import sqlite3
import os

def run_analysis():
    print("--- Iniciando Analizador de Datos Financieros ---")
    
    # 1. Cargar datos
    csv_file = 'sales_data.csv'
    if not os.path.exists(csv_file):
        print(f"Error: No se encuentra el archivo {csv_file}")
        return

    df = pd.read_csv(csv_file)
    print("\n[ETL] Datos cargados exitosamente:")
    print(df.head())

    # 2. Limpieza y Transformación
    # Asegurar que los tipos sean correctos
    df['date'] = pd.to_datetime(df['date'])
    df['total_revenue'] = df['quantity'] * df['unit_price']
    
    # Agregar una columna de mes para el análisis
    df['month'] = df['date'].dt.strftime('%Y-%m')

    # 3. Análisis
    # Ingresos por categoría
    category_analysis = df.groupby('category')['total_revenue'].sum().reset_index()
    print("\n[Análisis] Ingresos totales por categoría:")
    print(category_analysis)

    # Ingresos por mes
    monthly_analysis = df.groupby('month')['total_revenue'].sum().reset_index()
    print("\n[Análisis] Ingresos mensuales:")
    print(monthly_analysis)

    # 4. Persistencia en SQL
    db_name = 'financial_analysis.db'
    conn = sqlite3.connect(db_name)
    
    # Guardar resultados en tablas SQL
    category_analysis.to_sql('revenue_by_category', conn, if_exists='replace', index=False)
    monthly_analysis.to_sql('monthly_revenue', conn, if_exists='replace', index=False)
    df.to_sql('raw_sales_data', conn, if_exists='replace', index=False)
    
    conn.close()
    print(f"\n[Persistencia] Resultados guardados en la base de datos: {db_name}")
    print("--- Proceso Finalizado ---")

if __name__ == "__main__":
    try:
        run_analysis()
    except ImportError:
        print("\nError: Faltan dependencias. Por favor instala pandas:")
        print("pip install pandas")
