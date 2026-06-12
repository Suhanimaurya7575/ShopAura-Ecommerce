import userModel from "../models/userModel.js";

// Add product to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    if (!userId) {
      return res.json({ success: false, message: "userId missing — auth failed" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = JSON.parse(JSON.stringify(userData.cartData || {}));

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(
      userId,
      { $set: { cartData } },
      { new: true }
    );

    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update cart quantity (set to 0 to remove)
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    if (!userId) {
      return res.json({ success: false, message: "userId missing" });
    }

    const userData = await userModel.findById(userId);
    let cartData = JSON.parse(JSON.stringify(userData.cartData || {}));

    if (quantity === 0) {
      // ✅ Remove the size entry if quantity is 0
      if (cartData[itemId]) {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      if (!cartData[itemId]) cartData[itemId] = {};
      cartData[itemId][size] = quantity;
    }

    await userModel.findByIdAndUpdate(
      userId,
      { $set: { cartData } },
      { new: true }
    );

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.json({ success: false, message: "userId missing" });
    }

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };