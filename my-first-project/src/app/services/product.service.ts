import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productArr = [
    {
      category: 'Clothes',
      name: 'Shirt',
      image: 'https://5.imimg.com/data5/YU/MT/NS/SELLER-3664875/mens-shirts-500x500.jpg',
      price: '$250',
    },
    {
      category: 'Clothes',
      name: 'T-shirt',
      image: 'https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scene.products.cimpress.io/v1/scenes/39fff789-7ad5-4b08-8faf-753d0c960f48',
      price: '$50',
    },
    {
      category: 'Clothes',
      name: 'Trousers',
      image: 'https://5.imimg.com/data5/LN/PI/JS/SELLER-3749501/corparate-trouser-500x500.jpg',
      price: '$100',
    },
    {
      category: 'Footwears',
      name: 'Slippers',
      image: 'https://www.loveatfirstfit.com/wp-content/uploads/2020/11/image-1024x683.png',
      price: '$80',
    },
    {
      category: 'Footwears',
      name: 'Shoes',
      image: 'https://images.meesho.com/images/products/44009963/kxwus_512.jpg',
      price: '$180',
    },
    {
      category: 'Footwears',
      name: 'Crocs',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/211112121636-underscored-crocs-travel.jpg?q=w_1600,h_1025,x_0,y_0,c_fill',
      price: '$120',
    },
    {
      category: 'Electronics',
      name: 'AC',
      image: 'https://static.toiimg.com/img/82128391/Master.jpg',
      price: '$300',
    },
    {
      category: 'Electronics',
      name: 'Refrigerator',
      image: 'https://5.imimg.com/data5/SA/JZ/MX/SELLER-2694128/whirlpool-refrigerator-71229-500x500.jpg',
      price: '$200',
    },
    {
      category: 'Electronics',
      name: 'Mixers',
      image: 'https://www.smeg.com/binaries/content/gallery/smeg/categories/standmixer_smeg_smf03rdeu.jpg/standmixer_smeg_smf03rdeu.jpg/brx%3AsquareMobile',
      price: '$100',
    },
  ];
  constructor( ) { }

  getProduct() {
    return this.productArr;
  }
}
