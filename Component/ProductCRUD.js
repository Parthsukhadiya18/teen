import React, { useState, useEffect } from 'react';

const ProductCRUD = () => {
  const initialProductState = {
    id: null,
    name: '',
    image: null,
    price: '',
    description: ''
  };

  const [product, setProduct] = useState(initialProductState);
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result }); // Store Base64
      };
    }
  };
  
  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = { ...product, id: Date.now() }; // Generating a unique ID using Date.now()
    setProducts([...products, newProduct]);
    localStorage.setItem('products', JSON.stringify([...products, newProduct]));
    setProduct(initialProductState);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const editProduct = (id) => {
    const selectedProduct = products.find((item) => item.id === id);
    setProduct(selectedProduct);
    setEditMode(true);
  };

  const updateProduct = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((item) =>
      item.id === product.id ? product : item
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setEditMode(false);
    setProduct(initialProductState);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product CRUD</h2>

      <div className="card">
        <div className="card-body">
          <form onSubmit={editMode ? updateProduct : addProduct}>
            {/* Name Input */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
                value={product.name}
                onChange={handleChange}
              />
            </div>

            {/* Price Input */}
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                required
                value={product.price}
                onChange={handleChange}
              />
            </div>

            {/* Description Input */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description:</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                required
                value={product.description}
                onChange={handleChange}
              />
            </div>

            {/* Image File Input */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image:</label>
              <input
                type="file"
                id="image"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              {editMode ? 'Update' : 'Add'}
            </button>
          </form>
        </div>
      </div>

      {/* Product Table */}
      <div className="mt-4">
        <h3>Product List</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.description}</td>
                <td>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ height: '50px', objectFit: 'cover' }}
                    />
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editProduct(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCRUD;



