const orderFood = new Promise((resolve, reject) => {
    let foodIsReady = true; // Simulate food preparation status
    
    setTimeout(() => {
        if (foodIsReady) {
            resolve("Food is ready!");
        } else {
            reject("Food is not ready!");
        }
    }, 2000);
});

orderFood
    .then((food) => {
        console.log(`Success: Received ${food}`);
    })
    .catch((error) => {
        console.error(`Failed: ${error}`);
    }).finally(() => {
        console.log("Transaction completed.");
    });

