const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('reseting products', () => {
    it('Should reset the products array', () => {
      expect(resetProducts()).toEqual({'id': 0, 'products': []})
    })
  })

describe('adding products', () => {
    it('Not return error', () => { 
        expect(()=>addProduct('apple', 1)).not.toThrow(); })
    it('should return array and object result', () => { 
        expect(addProduct('chair', 6)).toEqual([{"id": 0, "name": "chair", "price": 6}]); })
    it('should throw an error if name or price are not defined', () => {
      expect(() => addProduct()).toThrow('Name and price are obligatories');
    })
    it('should fail when adding an existing product', () => {
      addProduct('apple', 1);
      expect(() => addProduct('apple', 1)).toThrow('Existing product')
    })
})
    