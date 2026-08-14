// ==========================================
// BEAN & BITE BAKERY SHOPPING CART
// ==========================================


// ==========================================
// PRODUCTS PAGE
// ==========================================

let productCards = document.querySelectorAll(".product-card");

productCards.forEach(function(card) {

    let button = card.querySelector("a");

    if (button) {

        button.addEventListener("click", function(event) {

            event.preventDefault();

            let productName =
                card.querySelector("h3").textContent;

            let priceText =
                card.querySelector(".price").textContent;

            let productPrice =
                parseFloat(priceText.replace("R", ""));

            let cart =
                JSON.parse(localStorage.getItem("cart")) || [];

            cart.push({
                name: productName,
                price: productPrice
            });

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            window.location.href = "cart.html";

        });

    }

});


// ==========================================
// CART PAGE
// ==========================================

let cartItems =
    document.getElementById("cart-items");


if (cartItems) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is currently empty.</p>";

    } else {

        let total = 0;


        cart.forEach(function(product, index) {

            total += Number(product.price);


            let item =
                document.createElement("div");

            item.className = "cart-item";


            item.innerHTML = `

                <div class="cart-item-details">

                    <h3>${product.name}</h3>

                    <p>
                        Price: R${product.price.toFixed(2)}
                    </p>

                    <button type="button">
                        🗑️ Remove
                    </button>

                </div>

            `;


            let removeButton =
                item.querySelector("button");


            removeButton.addEventListener(
                "click",
                function() {

                    cart.splice(index, 1);

                    localStorage.setItem(
                        "cart",
                        JSON.stringify(cart)
                    );

                    location.reload();

                }
            );


            cartItems.appendChild(item);

        });


        // CHANGE THE R0 TEXT IN YOUR CART

        let summary =
            document.querySelector(".cart-summary");


        if (summary) {

            let paragraphs =
                summary.querySelectorAll("p");


            paragraphs[0].innerHTML =
                "<strong>Subtotal:</strong> R" +
                total.toFixed(2);


            paragraphs[1].innerHTML =
                "<strong>Total:</strong> R" +
                total.toFixed(2);

        }

    }

}
// ==========================================
// CHECKOUT PAGE
// ==========================================

let checkoutItems =
    document.getElementById("checkout-items");

if (checkoutItems) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    checkoutItems.innerHTML = "";

    let subtotal = 0;


    // SHOW PRODUCTS FROM CART

    cart.forEach(function(product) {

        subtotal += Number(product.price);

        let item =
            document.createElement("div");

        item.className = "summary-item";

        item.innerHTML = `
            <p>${product.name}</p>
            <p>R${Number(product.price).toFixed(2)}</p>
        `;

        checkoutItems.appendChild(item);

    });


    // SHOW SUBTOTAL

    let subtotalElement =
        document.getElementById("subtotal");

    if (subtotalElement) {

        subtotalElement.textContent =
            subtotal.toFixed(2);

    }


    // SHOW TOTAL

    let finalTotalElement =
        document.getElementById("final-total");

    if (finalTotalElement) {

        finalTotalElement.textContent =
            subtotal.toFixed(2);

    }

}
// ==========================================
// 10% NEW MEMBER DISCOUNT
// ==========================================

function applyDiscount() {

    let code =
        document.getElementById("discount-code").value
        .trim()
        .toUpperCase();

    let message =
        document.getElementById("discount-message");

    let discountAmount =
        document.getElementById("discount-amount");

    let finalTotal =
        document.getElementById("final-total");

    let subtotal =
        parseFloat(
            document.getElementById("subtotal").textContent
        ) || 0;


    if (code === "WELCOME10") {

        let discount = subtotal * 0.10;

        let newTotal = subtotal - discount;

        discountAmount.textContent =
            discount.toFixed(2);

        finalTotal.textContent =
            newTotal.toFixed(2);

        message.textContent =
            "🎉 10% new member discount applied!";

            localStorage.setItem(
    "discountApplied",
    "true"
);

    } else {

        discountAmount.textContent =
            "0.00";

        finalTotal.textContent =
            subtotal.toFixed(2);

        message.textContent =
            "❌ Invalid discount code.";

            localStorage.removeItem("discountApplied");

    }

}
// ==========================================
// ORDER CONFIRMATION
// ==========================================

let confirmationItems =
    document.getElementById("confirmation-items");

if (confirmationItems) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    confirmationItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach(function(product) {

        subtotal += Number(product.price);

        let item =
            document.createElement("p");

        item.textContent =
            product.name +
            " — R" +
            Number(product.price).toFixed(2);

        confirmationItems.appendChild(item);

    });

    let finalTotal = subtotal;

    let discountApplied =
        localStorage.getItem("discountApplied");

    if (discountApplied === "true") {

        finalTotal =
            subtotal * 0.90;

    }

    let confirmationTotal =
        document.getElementById("confirmation-total");

    if (confirmationTotal) {

        confirmationTotal.textContent =
            finalTotal.toFixed(2);

    }

}