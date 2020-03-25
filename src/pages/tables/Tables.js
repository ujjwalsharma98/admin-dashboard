import React, {useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";  

const datatableData = [
  {
      "id": 1410,
      "price": 490000,
      "unitSize": "",
      "name": "Huggies Gold Pants Popok Celana XL38 (2 Pack)",
      "sellerName": "Ibu and Bayi",
      "sellerLocation": "KOTA JAKARTA UTARA",
      "category": "Kebutuhan Primer",
      "description": {
          "tokopedia_url": "https://shopee.co.id/Huggies-Gold-Pants-Popok-Celana-XL38-(2-Pack)-i.4350106.2138584728",
          "merchantInfo": "",
          "orderInfo": "",
          "description": "HUGGIES Gold Pants Popok Celana XL38 \r\nSize = XL \r\nIsi per pack = 38 x 2 Pack\r\nCocok untuk berat badan = 12-17 kg\r\nHuggies Gold Pants merupakan rangkaian produk Huggies kelas premium. Huggies Gold Pants merupakan popok celana sekali pakai yang membuat bayi merasa nyaman saat menggunakannya. Berikut ini keunggulan dari produk Huggies Gold Pants:\r\n1. Mampu menyerap selama 12 jam (semalaman), sangat nyaman di gunakan oleh bayi pada saat tidur dimalam hari\r\n2. Design khusus untuk kenyamanan bayi disekitar pinggang dan kaki\r\n3. Memiliki indikator kebasahan, motif berwarna kuning pada bagian tengah akan berubah menjadi warna biru ketika bayi buang air kecil untuk mengidentifikasi bayi mengganti popoknya. \r\n4. Memiliki 5 lapisan kering dengan cairan penyerap cepat untuk mengunci urine yg masuk dan membatu untuk memastikan kekeringan pada permukaan popok\r\n5. Memiliki 2 lapisan lembut pada kaki untuk melidungi paha bayi dan sangat efektif untuk melindungi dari kebocoran\r\n6. Bagian atas yang luas dan juga bernapas yang memungkinkan sirkulasi udara. Menjaga bagian pinggang dan bawah bayi berventilasi dengan baik\r\n7. Memiliki bahan utama yang sangat lembut menutupi kulit bayi  Shelf Life 36 bulan",
          "delivery_options": "",
          "weight": "",
          "review": {
              "count": 15,
              "star": 4.230769
          },
          "variantInfo": {}
      },
      "quantity": 45,
      "rating": "4.230",
      "ratingCount": 15,
      "itemCondition": "Baru",
      "merchantSuccessTransaction": "",
      "merchantItemSold": "",
      "images": [
          "https://cf.shopee.co.id/file/b45ecb9154884ec4bd925e5c90a47910",
          "https://cf.shopee.co.id/file/ff34611af013e798a858144ad3a92d27",
          "https://cf.shopee.co.id/file/e6106781701f146816939b92f1b87673",
          "https://cf.shopee.co.id/file/77e9a3ee6e61e9e4568378e61d384d87",
          "https://cf.shopee.co.id/file/170aee29fbe4926dc7ed4accf5735d73"
      ],
      "breadcrumb": "Ibu & Bayi,Popok Bayi,Popok Sekali Pakai",
      "trending": 1,
      "inStock": true,
      "soloPrice": 490000,
      "groupPrice": 411100,
      "itemUrl": "\"https://shopee.co.id/Huggies-Gold-Pants-Popok-Celana-XL38-(2-Pack)-i.4350106.2138584728\""
  },
  {
      "id": 139,
      "price": 490000,
      "unitSize": "",
      "name": "Huggies Gold Pants Popok Celana XL38 (2 Pack)",
      "sellerName": "Ibu and Bayi",
      "sellerLocation": "KOTA JAKARTA UTARA",
      "category": "Ibu dan Bayi",
      "description": {
          "tokopedia_url": "https://shopee.co.id/Huggies-Gold-Pants-Popok-Celana-XL38-(2-Pack)-i.4350106.2138584728",
          "merchantInfo": "",
          "orderInfo": "",
          "description": "HUGGIES Gold Pants Popok Celana XL38 \r\nSize = XL \r\nIsi per pack = 38 x 2 Pack\r\nCocok untuk berat badan = 12-17 kg\r\nHuggies Gold Pants merupakan rangkaian produk Huggies kelas premium. Huggies Gold Pants merupakan popok celana sekali pakai yang membuat bayi merasa nyaman saat menggunakannya. Berikut ini keunggulan dari produk Huggies Gold Pants:\r\n1. Mampu menyerap selama 12 jam (semalaman), sangat nyaman di gunakan oleh bayi pada saat tidur dimalam hari\r\n2. Design khusus untuk kenyamanan bayi disekitar pinggang dan kaki\r\n3. Memiliki indikator kebasahan, motif berwarna kuning pada bagian tengah akan berubah menjadi warna biru ketika bayi buang air kecil untuk mengidentifikasi bayi mengganti popoknya. \r\n4. Memiliki 5 lapisan kering dengan cairan penyerap cepat untuk mengunci urine yg masuk dan membatu untuk memastikan kekeringan pada permukaan popok\r\n5. Memiliki 2 lapisan lembut pada kaki untuk melidungi paha bayi dan sangat efektif untuk melindungi dari kebocoran\r\n6. Bagian atas yang luas dan juga bernapas yang memungkinkan sirkulasi udara. Menjaga bagian pinggang dan bawah bayi berventilasi dengan baik\r\n7. Memiliki bahan utama yang sangat lembut menutupi kulit bayi  Shelf Life 36 bulan",
          "delivery_options": "",
          "weight": "",
          "review": {
              "count": 15,
              "star": 4.230769
          },
          "variantInfo": {}
      },
      "quantity": 45,
      "rating": "4.230",
      "ratingCount": 15,
      "itemCondition": "Baru",
      "merchantSuccessTransaction": "",
      "merchantItemSold": "",
      "images": [
          "https://cf.shopee.co.id/file/b45ecb9154884ec4bd925e5c90a47910",
          "https://cf.shopee.co.id/file/ff34611af013e798a858144ad3a92d27",
          "https://cf.shopee.co.id/file/e6106781701f146816939b92f1b87673",
          "https://cf.shopee.co.id/file/77e9a3ee6e61e9e4568378e61d384d87",
          "https://cf.shopee.co.id/file/170aee29fbe4926dc7ed4accf5735d73"
      ],
      "breadcrumb": "Ibu & Bayi,Popok Bayi,Popok Sekali Pakai",
      "trending": 1,
      "inStock": true,
      "soloPrice": 490000,
      "groupPrice": 411100,
      "itemUrl": "\"https://shopee.co.id/Huggies-Gold-Pants-Popok-Celana-XL38-(2-Pack)-i.4350106.2138584728\""
  }
];

export default function Tables() {

  useEffect(() => {
    console.log('Use Effect Changes');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

  });
  return (
    <>
      <PageTitle title="Items" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}

            data={datatableData.map(item => {
              return [
                  item.id,
                  item.price,
                  item.sellerName,
                  item.soloPrice,
                  item.groupPrice,
                  item.price,
                  item.category,
                  item.itemCondition,
              ]
          })}
            columns={["id", "price", "sellerName", "soloPrice", "Group Price", "Price", "category", "Item Condition"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid> 
      </Grid>
    </>
  );
}
