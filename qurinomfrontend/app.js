async function createProduct() {
    try {
        // Extract values from the form
         const productId = document.getElementById('productId').value;
        const productName = document.getElementById('productName').value;
        const productTag = document.getElementById('productTag').value;
        const productCategory = document.getElementById('productCategory').value;
        const productLikes = document.getElementById('productlikes').value;
        

        // Create dynamic productData
        const productData = {
            id:productId,
            name: productName,
            tags: productTag,
            category: productCategory,
            likes:parseInt(productLikes)
        };

        const response = await fetch('http://localhost:8080/api/products/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // alert('Product created successfully:', data);
        showPopup(`Product created successfully: ${JSON.stringify(data)}`);

    } catch (error) {
        console.error('Error creating product:', error.message);
    }
}
async function likeProduct() {
    try {
        const productId = document.getElementById('productId').value;
        const response = await fetch(`http://localhost:8080/api/products/${productId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // alert('Product liked successfully:', data);
        showPopup(`Product liked successfully: ${JSON.stringify(data)}`);

    } catch (error) {
        console.error('Error liking product:', error.message);
    }
}

async function unlikeProduct() {
    try {
        const UnlikeproductId = document.getElementById('UnlikeproductId').value;
        const response = await fetch(`http://localhost:8080/api/products/${UnlikeproductId}/unlike`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // alert('Product unliked successfully:', data);
        showPopup(`Product unliked successfully: ${JSON.stringify(data)}`);

    } catch (error) {
        console.error('Error unliking product:', error.message);
    }
}

async function searchProducts(params) {
    try {
        const queryParams = new URLSearchParams(params).toString();
        const response = await fetch(`http://localhost:8080/api/products/search?${queryParams}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // alert('Search results:', data);
        showPopup(`Search results: ${JSON.stringify(data)}`);

    } catch (error) {
        console.error('Error searching for products:', error.message);
    }
}

async function updateProduct() {
 
        // createProduct();
        // Extract values from the form
         const updatedproductId = document.getElementById('UpdatedproductId').value;
        const productName = document.getElementById('UpdatedproductName').value;
        const productTag = document.getElementById('UpdatedproductTag').value;
        const productCategory = document.getElementById('UpdatedproductCategory').value;
        const productLikes = document.getElementById('Updatedproductlikes').value;
        

        // Create dynamic productData
        const productData = {
            id:updatedproductId,
            name: productName,
            tags: productTag,
            category: productCategory,
            likes:parseInt(productLikes)
        };

        const response = await fetch('http://localhost:8080/api/products/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        else{
            console.log("updated successfully")
            const data = await response.json();
            showPopup(`Product updated successfully: ${JSON.stringify(data)}`);

        }
        const data = await response.json();
    
    }
    function showPopup(message) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popupMessage');
    
        // Update the popup message content
        popupMessage.textContent = message;
    
        // Show the popup
        popup.style.display = 'block';
    }
    
    function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    }
