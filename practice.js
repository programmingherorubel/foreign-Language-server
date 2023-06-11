app.post("/payments", async (req, res) => {
    const payment = req.body;
    const beforePaymentClassId = payment.beforePaymentClassId;
    console.log("beforePaymentClassId:", beforePaymentClassId);

    // Decrement the available seats count by 1 in the classes collection
    const updateResult = await classesCollection.updateOne(
      { _id: new ObjectId(beforePaymentClassId) },
      { $inc: { enrolledStudent: 1, availableSeat: -1 } }
    );
  
    // const sendDataToPaymentCollections = await paymentCollection.insertOne(
    //   payment
    // );
    // const id = payment.beforePaymentClassId;

    // const query = { _id: id };
    // const deleteResult = await classAddCollection.deleteOne(query);
    // res.send({ updateResult, deleteResult });
  });