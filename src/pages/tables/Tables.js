import React, {useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { API_URL } from "../../Services"
// components
import PageTitle from "../../components/PageTitle";  
import AddEditItem from "./components/AddEditItem";


export default function Tables() {
  const [datatableData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    `${API_URL}/api/v1/int-tool/item?page=0&size=100&sort=price,DESC`);

  /**
   * Fetch the data on Page Load
   */
  const fetchData = async () => {
    setIsLoading(true);
     const response = await fetch(url);
     const result   = await response.json(); 
     setData(result.payload);
     setIsLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    <>
      <PageTitle title="Items" />
      <Grid container spacing={4}> 
        <AddEditItem /> 
        <Grid item xs={12}>
        {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
          <MUIDataTable
            title="Employee List"
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
            columns={["ID", "Price", "Seller Name", "Solo Price", "Group Price", "Price", "Category", "Item Condition"]}
            options={{
              filterType: "checkbox",
            }}
          />
          )}
        </Grid> 
      </Grid>
    </>
  );
}
