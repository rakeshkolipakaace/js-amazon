// import {cart,removeFromCart , updateDeliveryOption} from '../data/cart.js';
// import {products} from '../data/products.js';

// import {formatCurrency} from'./utils/money.js';   

// import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';

// import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


// import {deliveryOptions} from '../data/deliveryOptions.js'




// hello();

// const today=dayjs();
// const deliverydate=today.add(7,'days');
// console.log(deliverydate.format('dddd, MMMM, D'));

// function renderOrderSummary(){
  




// let cartSummaryHTML='';

// cart.forEach((cartItem)=>{
//     const productId=cartItem.productId;
//     let matchingproduct;

//     products.forEach((product)=>{
//         if(product.id===productId){
//             matchingproduct=product;
//         }

//     });
//     // console.log(matchingproduct);

//     const deliveryOptionId=cartItem.deliveryOptionId;

//     let deliveryOption;

//      deliveryOptions.forEach((option)=>{
//       if(option.id===deliveryOptionId){
//         deliveryOption=option;
//       }

//     });


//     const today=dayjs();

//     const deliveryDate= today.add(deliveryOptions.deliveryDays,'days');

//     const datestring = deliveryDate.format('dddd , MMMM, D');



//     cartSummaryHTML+=
//     ` <div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
//             <div class="delivery-date">
//               Delivery date: ${datestring}
//             </div>

//             <div class="cart-item-details-grid">
//               <img class="product-image"
//                 src="${matchingproduct.image}">
//                 </div>

//               <div class="cart-item-details">
//                 <div class="product-name">
//                   ${matchingproduct.name}
//                   </div>
//                 <div class="product-price">
//                  $${formatCurrency(matchingproduct.priceCents)}

//                 </div>
//                 <div class="product-quantity">
//                   <span>
//                     Quantity: <span class="quantity-label">${cartItem.quantity}</span>
//                   </span>
//                   <span class="update-quantity-link link-primary">
//                     Update
//                   </span>
//                   <span class="delete-quantity-link link-primary 
//                   js-delete-link" data-product-id="${matchingproduct.id}">
//                     Delete
//                   </span>
//                 </div>
//               </div>

//               <div class="delivery-options">
//                 <div class="delivery-options-title">
//                   Choose a delivery option:
//                 </div>
//                 ${deliveryOptionsHTML(matchingproduct, cartItem)}
//               </div>
//             </div>
//           </div>`;
// });



// function deliveryOptionsHTML(matchingproduct, cartItem){

//   let html='';
//     deliveryOptions.forEach((deliveryOptions)=>{

//         const today=dayjs();

//         const deliveryDate= today.add(deliveryOptions.deliveryDays,'days');

//         const datestring = deliveryDate.format('dddd , MMMM, D');


//         const pricestring = deliveryOptions.priceCents=== 0 ? 'FREE' : `$${formatCurrency(deliveryOptions.priceCents)} - `;



//         const ischecked= deliveryOptions.id === cartItem.deliveryOptionId;
//         html+=
//         ` <div class="delivery-option js-delivery-option data-product-id ="${matchingproduct.id}" 
//         data-delivery-option-id="${deliveryOptions.id}">
//                   <input type="radio"
//                   ${ischecked ? 'checked': ''}
//                     class="delivery-option-input"
//                     name="delivery-option-${matchingproduct.id}">
//                   <div>
//                     <div class="delivery-option-date">
//                       ${datestring}
//                     </div>
//                     <div class="delivery-option-price">
//                       ${pricestring} - Shipping
//                     </div>
//                   </div>
//                 </div>
//                 <div class="delivery-option">
//                   <input type="radio"
//                     class="delivery-option-input"
//                     name="delivery-option-${matchingproduct.id}">
//                   <div>
//                     <div class="delivery-option-date">
//                      ${datestring}
//                     </div>
//                     <div class="delivery-option-price">
//                       ${pricestring} - Shipping
//                     </div>
//                   </div>  
//                 </div>`
//     });
//     return html;

// }



// document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;  

// document.querySelectorAll('.js-delete-link').forEach((link)=>{
//     link.addEventListener('click',()=>{

//        const productId=link.dataset.productId;

       
        
//         removeFromCart(productId);

       

//        const container= document.querySelector(`.js-cart-item-container-${productId}`);

//         container.remove();



//     });

// });


// document.querySelectorAll('.js-delivery-option').forEach((element)=>{

//   element.addEventListener('click',()=>{

//     const {productId, deliveryOptionId}=element.dataset;

//     updateDeliveryOption(productId, deliveryOptionId);
    
//     renderOrderSummary();


//   });
// });

// }


// renderOrderSummary();





import {renderOrderSummary} from './checkout/orderSummary.js';


renderOrderSummary();
