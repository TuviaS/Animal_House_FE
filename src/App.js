import Favorites from "./components/Favorites";
import React, {useEffect, useState} from "react";
import Navbar from "./navbar/Navbar";
import LoginOrRegister from "./client/LoginOrRegister";
import Grid from "./components/Grid";
import {getAllItems} from "./services/itemsService";
import {reduceItemFromStock} from "./services/itemsService";
import {AddItemToStock} from "./services/itemsService";
import {getClientByEmail} from "./services/clientService";
import {createClient} from "./services/clientService";
import ClientDetails from "./client/ClientDetails";
import {
    addToTemporalOrder,
    getTemporalOrder,
    createTemporalOrder,
    removeFromTemporalOrder,
    deleteTemporalOrder,
    closeTemoralOrder
} from "./services/orderService";
import {addToFavoriteItems, deleteFromFavoriteItems, getFavoriteItems} from "./services/favoriteItemsService";
import Navbar2 from "./navbar2/Navbar2";
import Commercial from "./commercial/Commercial";
import ShoppingCartContent from "./components/ShoppingCartConent";
import RegisterForm from "./client/RegisterForm";
import "./App.css";

const App = () => {
    const [showLogin,
        setShowLogin] = useState(false);
    const [showCartContent,
        setShowCartContent] = useState(false);
    const [items,
        setItems] = useState([]);
    const [client,
        setClient] = useState(null);
    const [filteredItems,
        setFilteredItems] = useState([]);
    const [orderList,
        setOrderList] = useState(null);
    const [showGrid,
        setShowGrid] = useState(true);
    const [showCommercial,
        setShowCommercial] = useState(true);
    const [loggedIn,
        setLoggedIn] = useState(false);
    const [showRegister,
        setShowRegister] = useState(false);
    const [cartIsEmpty,
        setCartIsEmpty] = useState(true);
    const [showClientDetails,
        setShowClientDetails] = useState(false);
    const [favoriteItems,
        setFavoriteItems] = useState(null)
    const [showNavBar2,
        setShowNavBar2] = useState(true);
    const [showMyFavorite,
        setShowMyFavorite] = useState(false);

    const handleShowMyFavorite = () => {
        setShowCartContent(false);
        setShowCommercial(false);
        setShowGrid(false);
        setShowNavBar2(true);
        setShowMyFavorite(true);
    }
    const handleCloseFavorites = () => {
        setShowMyFavorite(false);
        setShowCommercial(true);
        setShowGrid(true);

    }
    const handleAddToFavoritesClick = async(itemId) => {
        try {
            if (client) {

                const existingFavorites = await getFavoriteItems(client.email);

                if (!existingFavorites) {
                    await addToFavoriteItems(client.email, itemId);
                    const updatedFavoriteItems = await getFavoriteItems(client.email);
                    setFavoriteItems(updatedFavoriteItems);

                } else {

                    const isAlreadyInFavorites = existingFavorites.some(item => item.itemId === itemId);

                    if (!isAlreadyInFavorites) {
                        await addToFavoriteItems(client.email, itemId);

                        const updatedFavoriteItems = await getFavoriteItems(client.email);
                        setFavoriteItems(updatedFavoriteItems);
                        console.log("fav item added: " + itemId);
                    } else {
                        console.log("Item is already in favorites.");
                    }
                }
            }
        } catch (error) {
            console.error("Error adding item to favorites:", error);
        }
    };

    const handleDeleteFromFavoriteClick = async(itemId) => {
        try {
            if (client) {

                await deleteFromFavoriteItems(client.email, itemId);

                const updatedFavoriteItems = await getFavoriteItems(client.email);
                setFavoriteItems(updatedFavoriteItems);
                console.log("fav item removed: " + itemId);
            }
        } catch (error) {
            console.error("Error removing item from favorites:", error);
        }
    };

    const handleClickSubmitOrder = () => {
        closeTemoralOrder(client.email);
        setShowCommercial(true);
        setShowGrid(true);
        setShowCartContent(false);
        setOrderList([]);
    }

    const handleCancelRegisterClick = () => {
        setShowRegister(false);
        setShowLogin(false);
        setShowCommercial(true);
        setShowGrid(true);
    };

    const handleClickRegister = () => {
        setShowLogin(!showLogin);
        setShowRegister(!showRegister);
    };

    const handleClickSubmitRegister = async(firstName, lastName, email, password) => {
        await handleCreateClient(firstName, lastName, email, password);

        const registeredClient = await getClientByEmail(email);
        setClient(registeredClient);
        setShowRegister(!showRegister);
        setShowGrid(true);
        setShowCommercial(true);
        setOrderList([]);
    };

    const handleCreateClient = (firstName, LastName, email, password, address) => {
        createClient(firstName, LastName, email, password, address);

    };

    const handleCartClick = () => {
        setShowCartContent(!showCartContent);
    };

    const handleAddtoCartClick = async(itemId) => {
        const selectedItem = items.find((item) => item.itemId === itemId);

        if (client != null) {
            if (selectedItem) {
                const newPrice = (orderList
                    ?.price || 0) + selectedItem.itemPrice;

                if (!orderList || !orderList.itemIdList) {

                    await createTemporalOrder(client.email, itemId);
                    setOrderList({itemIdList: String(itemId), price: newPrice});
                    setCartIsEmpty(false);
                } else if (orderList.itemIdList === "") {

                    setOrderList({
                        ...orderList,
                        itemIdList: String(itemId),
                        price: newPrice
                    });
                } else {

                    setOrderList((prevOrderList) => ({
                        ...prevOrderList,
                        itemIdList: prevOrderList.itemIdList + " " + String(itemId),
                        price: newPrice
                    }));
                }

                handleRemoveItemFromStock(itemId);
                addToTemporalOrder(client.email, itemId); // Ensure that the itemID is passed as an integer here
            }
        } else {

            handleUserIconClick();
        }
    };

    const handleRemoveItemFromStock = (itemId) => {

        reduceItemFromStock(itemId);
    };

    const handleAddItemToStock = (itemId) => {
        AddItemToStock(itemId);
    };

    const handleRemoveFromCart = (itemId) => {

        setOrderList((prevOrderList) => {
            const itemIds = prevOrderList
                .itemIdList
                .split(" ")
                .map((id) => parseInt(id));
            const itemIndex = itemIds.indexOf(itemId);

            if (itemIndex !== -1) {

                itemIds.splice(itemIndex, 1);

                const updatedItemIds = itemIds.join(" ");

                const updatedOrderList = {
                    ...prevOrderList,
                    itemIdList: updatedItemIds
                };
                removeFromTemporalOrder(client.email, itemId);

                if (updatedItemIds === "") {
                    setShowGrid(true);
                    setShowCommercial(true);
                    setShowCartContent(false);
                    deleteTemporalOrder(client.email);
                    setCartIsEmpty(true);
                }

                return updatedOrderList;
            } else {

                return prevOrderList;
            }
        });

        handleAddItemToStock(itemId);
    };

    const handleLoginSubmit = async(email, password) => {
        setShowCommercial(!showCommercial);
        try {
            const clientData = await getClientByEmail(email);

            if (clientData) {
                setShowGrid(true);
                setLoggedIn(true);
                setShowCommercial(true);
                setClient(clientData);

                const fetchedOrderList = await getTemporalOrder(email);
                if (fetchedOrderList) {
                    setOrderList(fetchedOrderList);
                    setCartIsEmpty(false);
                    <Navbar > </Navbar>
                }
                const fetchedFavoriteItemsList = await getFavoriteItems(email);
                if (fetchedFavoriteItemsList) {
                    setFavoriteItems(fetchedFavoriteItemsList);

                }

                setShowLogin(false);
            } else {
                console.error("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching client data:", error);
        }
    };

    useEffect(() => {
        setLoggedIn(!!client);
    }, [client]);

    useEffect(() => {
        const fetchItems = async() => {
            try {
                const data = await getAllItems();
                setItems(data);
                setFilteredItems(data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        fetchItems();
    }, []);

    const handleSearchSubmit = (searchTerm) => {
        const filteredItems = items.filter((item) => item.itemDescription.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredItems(filteredItems);
    };

    const handleCategoryClick = (category) => {
        const filteredItems = items.filter((item) => item.itemDescription.toLowerCase().includes(category.toLowerCase()));
        setFilteredItems(filteredItems);
        if (showCartContent) {
            setShowCartContent(false);
            setShowGrid(true);
            setShowCommercial(true);
        }
    };

    const handleLogoClick = () => {
        setFilteredItems(items);
    };

    const handleLogoutClick = () => {
        setClient(null);
        setLoggedIn(false);
        setOrderList(null);
        setShowCommercial(true);
        setShowGrid(true);
        setShowCartContent(false);
    };

    const handleCancelClick = () => {
        setShowGrid(true);
        setShowCommercial(true);
        setShowLogin(false);
    };

    const handleUserIconClick = () => {
        if (loggedIn) {
            setShowGrid(false);
            setShowCommercial(false);
            setShowLogin(false);
            setShowClientDetails(true);
        } else {
            setShowLogin(true);
            setShowCommercial(false);
            setShowGrid(false);
        };
    };
    const handleCloseDetailsClick = () => {
        setShowClientDetails(false);
        setShowGrid(true);
        setShowCommercial(true);
    }

    return (
        <div className="app">
            <Navbar
                loggedIn={loggedIn}
                onUserIconClick={handleUserIconClick}
                client={client}
                onLogoutClick={handleLogoutClick}
                onSearchSubmit={handleSearchSubmit}
                onLogoClick={handleLogoClick}
                onCancelClick={handleCancelClick}
                orderList={orderList}
                tempOrderExists={!!orderList}
                handleCartClick={handleCartClick}
                setCartIsEmpty={setCartIsEmpty}
                handleShowMyFavorite={handleShowMyFavorite}/>
            <div>
                {showNavBar2
                    ? <Navbar2
                            onUserIconClick={handleUserIconClick}
                            client={client}
                            onLogoutClick={handleLogoutClick}
                            onCategoryClick={handleCategoryClick}/>
                    : null}</div>
            <br/>
            <br/>
            <br/>
            <div className="content-container">{showCommercial
                    ? <p>Clients reccomending:</p>
                    : null}</div>
            <div>{showCommercial
                    ? <Commercial/>
                    : null}</div>

            <div className="content-container">
                {showLogin
                    ? (<LoginOrRegister
                        onLoginSubmit={handleLoginSubmit}
                        onCancelClick={handleCancelClick}
                        showLogin={showLogin}
                        handleClickRegister={handleClickRegister}/>)
                    : showRegister
                        ? (<RegisterForm
                            handleClickSubmitRegister={handleClickSubmitRegister}
                            handleCancelRegisterClick={handleCancelRegisterClick}/>)
                        : showClientDetails
                            ? (<ClientDetails
                                client={client}
                                handleCloseDetailsClick={handleCloseDetailsClick}
                                favoriteItems={favoriteItems}/>)
                            : showMyFavorite
                                ? (<Favorites
                                    favoriteItems={favoriteItems}
                                    handleDeleteFromFavoriteClick={handleDeleteFromFavoriteClick}
                                    handleCloseFavorites={handleCloseFavorites}
                                    handleAddtoCartClick={handleAddtoCartClick}/>)
                                : showCartContent
                                    ? (<ShoppingCartContent
                                        orderList={orderList}
                                        handleRemoveFromCart={handleRemoveFromCart}
                                        items={items}
                                        setCartIsEmpty={setCartIsEmpty}
                                        handleClickSubmitOrder={handleClickSubmitOrder}
                                        onCategoryClick={handleCategoryClick}
                                        favoriteItems
                                        ={favoriteItems}/>)
                                    : (<Grid
                                        items={filteredItems}
                                        showGrid={showGrid}
                                        handleAddtoCartClick={handleAddtoCartClick}
                                        handleAddToFavoritesClick={handleAddToFavoritesClick}
                                        favoriteItems={favoriteItems}
                                        handleDeleteFromFavoritesClick={handleDeleteFromFavoriteClick}/>)}
            </div>
        </div>
    );
};

export default App;
