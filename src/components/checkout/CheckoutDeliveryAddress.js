import React, { useState, useEffect } from 'react';
import { Box, Radio, Typography, Button, CircularProgress, TextField } from '@material-ui/core';
import { checkoutActionComplete, selectAddress, toggleAddressForm } from '../../core/actions/checkout-actions';
import { fetchAddressListByUser } from '../../core/actions/account-actions';
import { useDispatch, useSelector } from 'react-redux';
import AddEditAddress from '../AddEditAddress';

const AddressSelector = ({ address }) => {

    const dispatch = useDispatch();
    const selectedAddress = useSelector(state => state.checkout.selectedAddress)
    const setAddress = (addressId) => {
        dispatch(selectAddress(addressId))
        dispatch(checkoutActionComplete("deliveryAddress"))
    }
    return (
        <Box
            border={1}
            borderRadius={1}
            p={1}
            mb={1}
            css={{ cursor: "pointer", borderColor: "#eee" }}
        >
            <Box
                display="flex"
                width={1}
                onClick={() => setAddress(address.addressId)}
                textOverflow="ellipsis"
            >
                <Radio
                    checked={selectedAddress === address.addressId}
                    onChange={() => setAddress(address.addressId)}
                    value={address.addressId}
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': address.addressId }}
                />
                <Box fontSize={{ xs: 12, md: 14, lg: 16 }}>
                    <Box display="flex" alignItems="center">
                        <Box fontWeight={600}>{address.name} Yoosuf</Box>
                        <Box p={0.3} mx={1} style={{ fontSize: 10, backgroundColor: "#ddd", fontWeight: 600 }} display="inline">WORK</Box>
                        <Box fontWeight={600}>{address.phone}</Box>
                    </Box>
                    <Box>{address.address}</Box>
                    <div>{address.city} - {address.state}, {address.locality} -  {address.pincode}</div>
                </Box>
            </Box>
            <Box width={1} display="flex" justifyContent="flex-end" alignItems="flex-end" >
                <Button color="primary">Edit </Button>
                <Button color="primary">Delete </Button>
            </Box>
        </Box>
    )
}
const CheckoutDeliveryAddress = () => {
    const dispatch = useDispatch();
    const addressList = useSelector(state => state.account.addressList)
    const showAddressForm = useSelector(state => state.checkout.showAddressForm)

    useEffect(() => {
        const fetchData = () => {
            showAddressForm === false && dispatch(fetchAddressListByUser(123))
        } 
        fetchData()
    }, [showAddressForm])

    return (
        <>
            {showAddressForm === false && (
                <>
                    <Box display="flex" p={1} justifyContent="flex-end">
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => dispatch(toggleAddressForm())}
                        >
                            {"Add address"}
                        </Button>
                    </Box>
                    {addressList.map((address, index) => {
                        return (
                            <AddressSelector
                                key={index}
                                address={address}
                            />
                        )
                    })}
                </>
            )}
            {showAddressForm === true && (
                <AddEditAddress />
            )}
        </>
    )
}
export default CheckoutDeliveryAddress;