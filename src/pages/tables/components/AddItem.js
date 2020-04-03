import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import TableContainer from '@material-ui/core/TableContainer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Typography } from "../../../components/Wrappers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../../Services"

const Additem = props => {
    const stocks = ["No", "Yes"]
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
    const [tokopedia_url, setTokopediaUrl] = useState("");
    const [merchantInfo, setMerchantInfo] = useState("");
    const [orderInfo, setOrderInfo] = useState("");
    const [delivery_options, setDeliveryOptions] = useState("");
    const [weight, setWeight] = useState("");
    const [disable, setDisabled] = useState("");
    const itemId = parseInt(props.match.params.id);
    const apiUrl = API_URL + 'api/v1/int-tool/item/' + itemId;
    if (itemId > 0 && props.match.isExact) {
        const index = props.match.url.indexOf("/items/detail");
        if (index > 0) {
            setDisabled(true);
        }
        props.match.isExact = false;
        axios.get(apiUrl)
            .then(function (response) {
                if (response && response.data.payload) {
                    const res = response.data.payload;
                    setId(res.id);
                    setPrice(res.price);
                    setSoloPrice(res.soloPrice);
                    setGroupPrice(res.groupPrice);
                    setUnitSize(res.unitSize);
                    setName(res.name);
                    setSellerName(res.sellerName);
                    setSellerLocation(res.sellerLocation);
                    setCategory(res.category);
                    setQuantity(res.quantity);
                    setRating(res.rating);
                    setRatingCount(res.ratingCount);
                    setItemCondition(res.itemCondition);
                    setTransactionStatus(res.merchantSuccessTransaction);
                    setItemSold(res.merchantItemSold);
                    setTrending(res.trending);
                    setInStock(res.inStock == true ? 'Yes' : 'No');
                    setDescription(res.description.description);
                    setTokopediaUrl(res.description.tokopedia_url);
                    setMerchantInfo(res.description.merchantInfo);
                    setOrderInfo(res.description.orderInfo);
                    setDeliveryOptions(res.description.delivery_options);
                    setWeight(res.description.weight);
                    setImages(res.images.toString());
                }
            }).catch(error => {
                toast.error("Unable to fetch item detail. Please try again.");
            });
    }

    const handleSubmit = (event) => {
        const imagesUrl = images.split(',');
        const descriptionObj = {
            tokopedia_url: tokopedia_url,
            merchantInfo: merchantInfo,
            orderInfo: orderInfo,
            delivery_options: delivery_options,
            weight: weight,
            description: description,
        };
        const payload = {
            id: id ? id : null,
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
            inStock: inStock == 'Yes' ? true : false,
            soloPrice: parseInt(soloPrice),
            groupPrice: parseInt(groupPrice),
            description: descriptionObj,
            images: imagesUrl,
        }
        axios.post(API_URL + 'api/v1/int-tool/item', payload)
            .then(function (response) {
                if (response) {
                    toast.success("Saved item successfully!");
                    setTimeout(function () { history.push("/app/manage/items"); }, 3000);
                }
            }).catch(error => {
                toast.error("Unable to save item. Please try again.");
            });
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <Link to="/app/manage/items" style={{ color: 'blue', position: 'absolute' }} >
                    <ArrowBackIosIcon />
                </Link>
                <Grid container style={{ marginBottom: '30px', }}>
                    <Grid item xs={6} style={{ paddingLeft: '20px' }}>
                        <Typography className="main_heading" variant="h1" size="sm">
                            {
                                id > 0 && <sapn>Update Item</sapn>
                            }
                            {
                                !id && <sapn>Add Item</sapn>
                            }
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <TableContainer className="tabelContainer" style={{ padding: "25px 10px" }} >
                <form onSubmit={() => handleSubmit()}>

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
                                disabled={disable}
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
                                disabled={disable}
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
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
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
                    </Grid>
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
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
                                disabled={disable}
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
                                disabled={disable}
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
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
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
                                disabled={disable}
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
                                disabled={disable}
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
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
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
                                disabled={disable}
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
                                disabled={disable}
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

                    <Grid container className="add_itemContainer"  >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
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
                                disabled={disable}
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
                                disabled={disable}
                                className="add_textField"
                                id="itemSold"
                                value={itemSold}
                                placeholder="Merchant item sold "
                                variant="outlined"
                                onChange={e => setItemSold(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="add_itemContainer" >
                        <Grid item xs={6} className="add_fieldCol">
                            <TextField
                                disabled={disable}
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
                        <Grid item xs={6} className="add_fieldCol">
                            <TextField
                                disabled={disable}
                                className="add_textField"
                                id="images"
                                value={images}
                                placeholder="Images"
                                rows="5"
                                multiline
                                required
                                variant="outlined"
                                onChange={e => setImages(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="add_itemContainer"  >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
                                className="add_textField"
                                id="tokopedia_url"
                                value={tokopedia_url}
                                placeholder="Tokopedia url"
                                variant="outlined"
                                onChange={e => setTokopediaUrl(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
                                className="add_textField"
                                id="merchantInfo"
                                value={merchantInfo}
                                placeholder="Merchant info"
                                variant="outlined"
                                onChange={e => setMerchantInfo(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
                                className="add_textField"
                                id="orderInfo"
                                value={orderInfo}
                                placeholder="Merchant item sold "
                                variant="outlined"
                                onChange={e => setOrderInfo(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="add_itemContainer"  >
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
                                className="add_textField"
                                id="delivery_options"
                                value={delivery_options}
                                placeholder="Delivery options"
                                variant="outlined"
                                onChange={e => setDeliveryOptions(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <TextField
                                disabled={disable}
                                className="add_textField"
                                id="weight"
                                value={weight}
                                placeholder="Weight"
                                variant="outlined"
                                onChange={e => setWeight(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} className="add_fieldCol">
                            <div className="form-group">
                                <select class="form-control add_textField" onChange={e => setInStock(e.target.value)} disabled={disable} value={inStock}>
                                    <option value={stocks[0]}>{stocks[0]}</option>
                                    <option value={stocks[1]}>{stocks[1]}</option>
                                </select>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} style={{ paddingLeft: '10px' }}>
                            <button disabled={disable} className="btn btn-lg btn-primary" type="submit">
                                {
                                    id > 0 && <span>Update</span>
                                }
                                {
                                    !id && <span>Add</span>
                                }
                            </button>
                            <ToastContainer autoClose={3000} />
                        </Grid>
                    </Grid>
                </form>
            </TableContainer>
        </>
    )
}

export default Additem;