export default function newItem(item){
    const createDiv = document.createElement("div");
      const itemHtml = `<tr class="table-body-row">
      <td class="product-remove"><a href="#"><i class="far fa-window-close"></i></a></td>
      <td class="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""></td>
      <td class="product-name">Strawberry</td>
      <td class="product-price">$85</td>
      <td class="product-quantity"><input type="number" placeholder="0"></td>
      <td class="product-total">1</td>
      </tr>`;
    createDiv.innerHTML = itemHtml;
  return createDiv;
  }