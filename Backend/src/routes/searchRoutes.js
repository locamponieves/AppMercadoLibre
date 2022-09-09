import { Router } from "express";
import request from "request";

const router = Router();

router.get("/:query", async (req, res) => {
  const objSearch = {
    author: {},
    categories: [],
    items: [],
  };

  request(
    `https://api.mercadolibre.com/sites/MLA/search?q=${req.params.query}`,
    async (err, response, body) => {
      if (!err) {
        const resp = JSON.parse(body);

        objSearch.author.name = "Leonis Rafael";
        objSearch.author.lastName = "Ocampo Nieves";

        var dictCategory = {};

        for (let index = 0; index < resp.results.length; index++) {
          var objItems = {
            id: "",
            title: "",
            price: {},
            picture: "",
            condition: "",
            free_shipping: false,
          };

          objItems.id = resp.results[index].id;
          objItems.title = resp.results[index].title;
          objItems.price.currency = resp.results[index].currency_id;
          objItems.price.amount = resp.results[index].price;
          objItems.price.decimals = 0;
          objItems.picture = resp.results[index].thumbnail;

          if (resp.results[index].condition === "new")
            objItems.condition = "Nuevo";
          if (resp.results[index].condition === "used")
            objItems.condition = "Usado";

          objItems.free_shipping = resp.results[index].shipping.free_shipping;

          objSearch.items.push(objItems);

          if (!dictCategory[resp.results[index].category_id]) {
            dictCategory[resp.results[index].category_id] = 0;
          }

          dictCategory[resp.results[index].category_id] += 1;
        }

        var maxCategory = getMaxCategory(dictCategory);

        objSearch.categories = await getCategories(maxCategory);

        return res.json(objSearch);
      }
    }
  );
});

router.get("/item/:id", (req, res) => {
  request(
    `https://api.mercadolibre.com/items/${req.params.id}`,
    async (err, response, body) => {
      if (!err) {
        const resp = JSON.parse(body);

        const objItem = {
          author: {},
          item: {
            price: {},
          },
        };

        objItem.author.name = "Leonis Rafael";
        objItem.author.lastName = "Ocampo Nieves";
        objItem.item.id = resp.id;
        objItem.item.title = resp.title;
        objItem.item.price.currency = resp.currency_id;
        objItem.item.price.amount = resp.price;
        objItem.item.price.decimals = 0;
        objItem.item.picture = resp.thumbnail;

        if (resp.condition === "new") objItem.item.condition = "Nuevo";
        if (resp.condition === "used") objItem.item.condition = "Usado";

        objItem.item.free_shipping = resp.shipping.free_shipping;
        objItem.item.sold_quantity = resp.sold_quantity;

        objItem.item.description = await getDescription(objItem.item.id);

        objItem.categories = await getCategories(resp.category_id);

        return res.json(objItem);
      }
    }
  );
});

function getMaxCategory(data) {
  let max = 0;
  let maxKey = "";

  for (const [key, value] of Object.entries(data)) {
    if (value >= max) {
      maxKey = key;
      max = value;
    }
  }

  return maxKey;
}

function getCategories(idCategory) {
  let categories = [];

  return new Promise((resolve, reject) => {
    request(
      `https://api.mercadolibre.com/categories/${idCategory}`,
      (err, response, body) => {
        if (!err) {
          const resp = JSON.parse(body);

          if (resp.path_from_root != undefined) {
            for (let index = 0; index < resp.path_from_root.length; index++) {
              categories.push(resp.path_from_root[index].name);
            }
          }

          resolve(categories);
        }
      }
    );
  });
}

function getDescription(idItem) {
  return new Promise((resolve, reject) => {
    request(
      `https://api.mercadolibre.com/items/${idItem}/description`,
      (err, response, body) => {
        if (!err) {
          const resp = JSON.parse(body);

          resolve(resp.plain_text);
        }
      }
    );
  });
}

export default router;
