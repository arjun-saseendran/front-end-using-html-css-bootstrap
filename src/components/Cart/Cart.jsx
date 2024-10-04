import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../features/cart/cartSlice";


function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch()
  
  

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((product, index) => (
          <tr key={index}>
            <td>*</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>
              <img src={product.image} height="50px" />
            </td>
            <td>${product.price}</td>
            <td className="btn btn-danger text-danger  m-2" onClick={() => dispatch(deleteProduct(product.id))}>Delete</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Cart;
