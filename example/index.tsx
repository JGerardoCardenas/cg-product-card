import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const App = () => {
  const product = {
    id: '1',
    title: 'Coffee Mug - Card!',
  };

  return (
    <>
      <ProductCard product={product}
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
