// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{constraints: false, foreignKey: 'category_id'});
// Categories have many Products
Category.hasMany(Product, {constraints: false, foreignKey: 'category_id'});

  
//Product belongs to many tag using ProductTag
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'  
  });

//Product_id from ProductTag belongs to Product
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

//Tag belongs to many Product using ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

//tag_id from ProductTag belongs to Tag
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
