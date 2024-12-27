import './App.css'

const products = [
  {
    "id":"1",
    "name": "Waffle with Berries",
    "category": "Waffle",
    "price": 6.5,
    "image":"../public/images/waffle.svg"
  },
  {
    "id":"2",
    "name": "Vanilla Bean Crème Brûlée",
    "category": "Crème Brûlée",
    "price": 7,
    "image":"../public/images/vanilla-bean.svg"
  },
  {
    "id":"3",
    "name": "Macaron Mix of Five",
    "category": "Macaron",
    "price": 8,
    "image":"../public/images/macaron.svg"
  },
  {
    "id":"4",
    "name": "Classic Tiramisu",
    "category": "Tiramisu",
    "price": 5.5,
    "image":"../public/images/tiramisu.svg"
  },
  {
    "id":"5",
    "name": "Pistachio Baklava",
    "category": "Baklava",
    "price": 4,
    "image":"../public/images/baklava.svg"
  },
  {
    "id":"6",
    "name": "Lemon Meringue Pie",
    "category": "Pie",
    "price": 5,
    "image":"../public/images/lemon-merinque.svg"
  },
  {
    "id":"7",
    "name": "Red Velvet Cake",
    "category": "Cake",
    "price": 4.5,
    "image":"../public/images/red-velvet.svg"
  },
  {
    "id":"8",
    "name": "Salted Caramel Brownie",
    "category": "Brownie",
    "price": 4.5,
    "image":"../public/images/brownie.svg"
  },
  {
    "id":"9",
    "name": "Vanilla Panna Cotta",
    "category": "Panna Cotta",
    "price": 6.5,
    "image":"../public/images/panna-cotta.svg"
  },
];
function App() {
  return (
    <>
    <div className='container'>
      <h1>Desserts</h1>
      <div className='product-container'>
        {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </div>
    </div>
    <div className="your-cart">
      <h2>Your Cart (0)</h2>
      <div className="cart-content">
        <img src="../public/images/empty-illustration.png" alt="" />
        <p>Your added items will appear here</p>
      </div>
    </div>
    </>
  )
}

export default App

function ProductItem({ product }){
  function handleClick(){
    console.log('Tıklandım')
  }
  return (
    <div className='item'>
      <div className="cart">
        <img className='cart-img' src={product.image} alt={product.name}/>
        <button onClick={handleClick} className='cart-btn'>
          <img src="../public/images/add.png" alt="" /><span> Add to Cart</span> 
        </button>
      </div>
      <p>{product.category}</p>
      <p>{product.name}</p>
      <p>${product.price}</p>
    </div>
  );
}
