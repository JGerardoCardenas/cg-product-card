# CG-Product-Card

Este es un paquete de pruebas de despliegue en NPM


### Gerardo Cardenas

## Ejemplo
```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'cg-product-card';
```

```
<ProductCard key={product.id}
             product={product}
             initialValues={{ count: 4, maxCount: 10 }}>
    {
        ({ count, isMaxCountReached, maxCount, increaseBy, reset  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```