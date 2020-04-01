import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import PageTitle from "../../../components/PageTitle";
const Additem = props => {
    const history = useHistory();
    const [id, setId] = useState("");
    const [price, setPrice] = useState("");
    const [soloPrice, setSoloPrice] = useState("");
    const [groupPrice, setGroupPrice] = useState("");
    const [unitSize, setUnitSize] = useState("");
    const [name, setName] = useState("");
    const [sellerName, setSellerName] = useState("");
    const [sellerLocation, setSellerLocation] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [rating, setRating] = useState("");
    const [ratingCount, setRatingCount] = useState("");
    const [itemCondition, setItemCondition] = useState("");
    const [transactionStatus, setTransactionStatus] = useState("");
    const [itemSold, setItemSold] = useState("");
    const [trending, setTrending] = useState("");
    const [inStock, setInStock] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState("");
    const handleSubmit = (event) => {
        const imagesUrl = images.split(',')
        const payload = {
            id: id ? parseInt(price) : null,
            price: parseInt(price),
            unitSize: unitSize,
            name: name,
            sellerName: sellerName,
            sellerLocation: sellerLocation,
            category: category,
            quantity: parseInt(quantity),
            rating: rating,
            ratingCount: parseInt(ratingCount),
            itemCondition: itemCondition,
            merchantSuccessTransaction: transactionStatus,
            merchantItemSold: itemSold,
            trending: parseInt(trending),
            inStock: inStock,
            soloPrice: parseInt(soloPrice),
            groupPrice: parseInt(groupPrice),
            description: description,
            images: imagesUrl,
        }
        const apiUrl = 'http://ec2-3-7-0-164.ap-south-1.compute.amazonaws.com:8080/api/v1/int-tool/item'
        axios.post(apiUrl, payload)
            .then(function (response) {
                history.push("/app/manage/items");
            });
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <Link to="/app/manage/items" style={{ color: '#e65a28', position: 'absolute' }} >
                    <ArrowBackIosIcon />
                </Link>
                <Grid container  >
                    <Grid item xs={12} style={{ paddingLeft: '20px' }}>
                        <PageTitle title="Add new item" />
                    </Grid>
                </Grid>
            </div>
            <TableContainer className="tabelContainer" style={{ padding: "50px 20px" }} >
                {/* first grid */}
                <form onSubmit={() => handleSubmit()}>
                    <button type="submit">Submit</button>
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={4} className="add_fieldCol" hidden>
                            <TextField
                                className="add_textField"
                                id="id"
                                placeholder="Id"
                                value={id}
                                variant="outlined"
                                onChange={e => setId(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="price"
                                value={price}
                                required
                                type="number"
                                placeholder="Price"
                                variant="outlined"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="soloPrice"
                                required
                                type="number"
                                placeholder="Solo Price"
                                value={soloPrice}
                                variant="outlined"
                                onChange={e => setSoloPrice(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    {/* second grid */}

                    <Grid container className="add_itemContainer" >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="groupPrice"
                                value={groupPrice}
                                placeholder="Group Price"
                                required
                                type="number"
                                variant="outlined"
                                onChange={e => setGroupPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="unitPrice"
                                value={unitSize}
                                placeholder="Unit Size"
                                required
                                type="number"
                                variant="outlined"
                                onChange={e => setUnitSize(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="name"
                                value={name}
                                placeholder="Name"
                                required
                                variant="outlined"
                                onChange={e => setName(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    {/* third grid */}

                    <Grid container className="add_itemContainer" >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="sellerName"
                                value={sellerName}
                                placeholder="Seller Name"
                                variant="outlined"
                                onChange={e => setSellerName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="sellerLocation"
                                value={sellerLocation}
                                placeholder="Seller Location"
                                variant="outlined"
                                onChange={e => setSellerLocation(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="category"
                                value={category}
                                placeholder="Category"
                                required
                                variant="outlined"
                                onChange={e => setCategory(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    {/* fourth grid */}

                    <Grid container className="add_itemContainer" >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="quantity"
                                value={quantity}
                                placeholder="Quantity"
                                type="number"
                                variant="outlined"
                                onChange={e => setQuantity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="rating"
                                value={rating}
                                placeholder="Rating"
                                type="number"
                                variant="outlined"
                                onChange={e => setRating(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="ratingCount"
                                value={ratingCount}
                                placeholder="Rating Count"
                                type="number"
                                variant="outlined"
                                onChange={e => setRatingCount(e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    {/* fifth grid */}

                    <Grid container className="add_itemContainer"  >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="itemCondition"
                                value={itemCondition}
                                placeholder="Item Condition"
                                variant="outlined"
                                onChange={e => setItemCondition(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="transactionStatus"
                                value={transactionStatus}
                                placeholder="Transaction  Status"
                                variant="outlined"
                                onChange={e => setTransactionStatus(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="itemSold"
                                value={itemSold}
                                placeholder="Merchant item sold "
                                variant="outlined"
                                onChange={e => setItemSold(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    {/* sixth grid */}
                    {/* first grid */}
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="trending"
                                value={trending}
                                placeholder="Trending "
                                type="number"
                                required
                                variant="outlined"
                                onChange={e => setTrending(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <input
                                type="checkbox"
                                id="inStock"
                                value={inStock}
                                placeholder="In stock"
                                required
                                onChange={e => setInStock(e.target.value)}
                            />
                            <label>In stock</label>
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                        </Grid>
                    </Grid>

                    {/* description container */}
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={12} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="description"
                                value={description}
                                placeholder="Description"
                                rows="5"
                                multiline
                                required
                                variant="outlined"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={12} className="add_fieldCol">
                            <TextField
                                className="add_textField"
                                id="images"
                                value={images}
                                placeholder="Images"
                                rows="4"
                                multiline
                                required
                                variant="outlined"
                                onChange={e => setImages(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={12} className="add_fieldCol">
                            <Button variant="outlined" className="additem_btn" >Browse Image</Button>
                        </Grid>
                    </Grid>
                </form>
            </TableContainer>
        </>
    )
}

export default Additem;