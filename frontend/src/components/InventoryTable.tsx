import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { productService } from '../services/api';
import type { Product } from '../types';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 200 },
    { field: 'description', headerName: 'Descripción', width: 300 },
    { 
        field: 'price', 
        headerName: 'Precio', 
        type: 'number', 
        width: 120,
        valueFormatter: (value: number) => {
            if (value == null) return '';
            return `$${value.toLocaleString()}`;
        }
    },
    { field: 'stock', headerName: 'Stock', type: 'number', width: 100 },
    { 
        field: 'createdAt', 
        headerName: 'Fecha Creación', 
        width: 200,
        valueGetter: (value: string) => value ? new Date(value).toLocaleString() : ''
    },
];

const InventoryTable: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await productService.getAll();
                setProducts(response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('No se pudo conectar con el servidor. Asegúrate de que el backend esté corriendo.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
        </Box>
    );

    return (
        <Box sx={{ height: 600, width: '100%', p: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom color="primary">
                Sistema de Gestión de Inventario
            </Typography>
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10, 25]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                }}
            />
        </Box>
    );
};

export default InventoryTable;
