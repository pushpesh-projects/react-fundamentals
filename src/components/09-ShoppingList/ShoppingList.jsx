import { useState } from "react";

const ShoppingList = () => {
  const [item, setItem] = useState({ name: "", isPurchased: false });
  const [itemList, setItemList] = useState([]);

  function handlePurchase(itemToPurchase, checked) {
    setItemList(
      itemList.map((item) =>
        item.id === itemToPurchase.id ? { ...item, isPurchased: checked } : item
      )
    );
  }

  function handleDeleteItem(itemToDelete) {
    setItemList(itemList.filter((item) => item.name !== itemToDelete.name));
  }

  function getUnpurchasedItems() {
    return itemList.filter((item) => item.isPurchased === false).length;
  }

  function handleClearCompleted() {
    setItemList(itemList.filter((item) => !item.isPurchased));
  }

  function handleAddItem() {
    if (item.name.trim().length === 0) return;
    setItemList([...itemList, { ...item, id: Date.now() }]);
    setItem({ name: "", isPurchased: false });
  }

  return (
    <div>
      <label>
        Item:
        <input
          value={item.name}
          onChange={(e) =>
            setItem({ name: e.target.value, isPurchased: false })
          }
        />
      </label>
      <button onClick={handleAddItem}>Add Item</button>
      <h2>Shopping List: </h2>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            {item.isPurchased ? <s>{item.name}</s> : item.name}
            <input
              type="checkbox"
              name="purchased"
              checked={item.isPurchased}
              onChange={(e) => handlePurchase(item, e.target.checked)}
            />{" "}
            <button onClick={() => handleDeleteItem(item)}>Delete</button>
          </li>
        ))}
      </ul>

      {itemList.length > 0 && <h3>Total items: {itemList.length}</h3>}
      {itemList.length > 0 && <h3>{getUnpurchasedItems()} items remaining</h3>}
      {itemList.length > 0 && (
        <button onClick={handleClearCompleted}>Clear Completed</button>
      )}
    </div>
  );
};

export default ShoppingList;
