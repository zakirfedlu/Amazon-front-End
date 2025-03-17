import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import style from "./Order.module.css";
import ProductCard from "../../components/Products/ProductCard";

function Orders() {
  const[ { user },dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
    /*  setOrders([]);*/
    }
  }, [user]);
console.log(orders);

  return (
    <LayOut>
      <section className={style.container}>
        <div className={style.order_container}>
          <h2>Your Orders</h2>
             {
              orders?.length == 0 && <div style={{padding:"20px"}}>You don't have Order yet</div>
             }

          {/* ordered items */}
          <div>
            {orders.map((eachOrder, index) => (
              <div key={index}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.cart?.map((order) => (
                  <ProductCard
                    flex={true}
                    data={order}
                    key={order.id}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
