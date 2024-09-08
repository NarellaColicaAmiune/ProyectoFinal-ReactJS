import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import './Checkout.css'

const Checkout = () => {

    const {cart, getTotal, getTotalProducts, cleanCart} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handleForm = (e) => {
      e.preventDefault();

      if(!nombre || !apellido || !celular || !email || !emailConfirm) {
          setError("Por favor, completa todos los campos");
          return;
      }

      if(email !== emailConfirm) {
          setError("Los emails no coinciden");
          return;
      }

      const db = getFirestore();

      const order = {
        items: cart.map((product) => ({
            id: product.products.id,
            name: product.products.name,
            price: product.products.price,
            quantity: product.quantity
        })),
      total: getTotal(),
      date: new Date(),
      nombre, 
      apellido,
      celular,
      email,
    };

    Promise.all (
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "item", productOrder.id);
        const productDoc = await getDoc(productRef);
        const stock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stock - productOrder.quantity
        });
      })
    )
      .then (() => {
        addDoc(collection(db, "orders"), order)
        .then((docRef) => {
          setOrderId(docRef.id);
          cleanCart();
        })
        .catch ((error) => {
          console.log("Error adding document: ", error);
          setError("No se pudo agregar la orden, intentelo nuevamente")
        });
      })
      .catch ((error) => {
        console.log("Error updating stock: ", error);
        setError("No se pudo actualizar el stock, intentelo nuevamente")
      });
};

  return (
    <div className="cartFinCompra">
      <h2>Tus productos</h2>

      <div>
      {cart.map((products) => (
            <div key={products.products.id} className="cartProductos">
                <p>{""} {products.products.name}</p>
                <p>Cantidad: {""} {products.quantity}</p>
                <p> ${products.products.price * products.quantity}</p>
            </div>
        ))}
      </div>

      <h3>Total: ${getTotal()}</h3>

      <div className="cartForm">
      <h3>Ingresa tus datos</h3>

      <form onSubmit={handleForm}>

      <div>
        <label htmlFor="">Nombre</label>
        <input type="text" onChange={(e) => setNombre(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="">Apellido</label>
        <input type="text" onChange={(e) => setApellido(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="">Celular</label>
        <input type="number" onChange={(e) => setCelular(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="">Email de confirmación</label>
        <input type="email" onChange={(e) => setEmailConfirm(e.target.value)}/>
      </div>

      <button type="submit" className="btnComprar">Comprar</button>

      {error && <p>{error}</p>}

      {orderId && (
        <p>Gracias por tu compra, tu pedido {orderId} se ha procesado. {""}</p>
      )}
      </form>
      </div>
    </div>
  )
}

export default Checkout
