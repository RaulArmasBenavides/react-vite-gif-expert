import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { AppLayout } from './layout/Layout';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>
            <AppLayout>
            <h1>Buscador de GIFTS</h1>
            <strong>Ingrese nombre del gift a buscar</strong>
    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
            </AppLayout>
       
        </>
    )
}
