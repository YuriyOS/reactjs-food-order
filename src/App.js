import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function test('test-text') {
    return;
}

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
