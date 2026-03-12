interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type User = { name: string };

function welcome(data: User): string {
  return `Добро пожаловать, ${data.name}!`;
}

class BaseStore {}

class ProductStore extends BaseStore {
  storeName = 'My Tech Store';
  products: IProduct[] = [];
  categories = {
    elec: 'Электроника',
    book: 'Книги',
  };

  addProduct(p: IProduct) {
    this.products.push(p);
  }

  get allProducts(): IProduct[] {
    return this.products;
  }

  updateQuantity(id: number, qty: number) {
    const p = this.products.find((item) => item.id === id);
    if (p) p.quantity = qty;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
  }
}

const catalog: IProduct[] = [
  { id: 1, name: 'Phone', price: 500, quantity: 10 },
  { id: 2, name: 'Laptop', price: 1200, quantity: 5 },
];

const expensiveItems = catalog.filter((p) => p.price > 600);
const totalPrice = catalog.reduce((sum, p) => sum + p.price * p.quantity, 0);

console.log(welcome({ name: 'Alex' }));
console.log({ expensiveItems, totalPrice });
