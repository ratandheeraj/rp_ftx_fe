import {
    GET_SALE_BETWEEN_DATES,
    GET_SALE_BETWEEN_DATES_ERROR,
    GET_SALE_BY_RETAILER,
    GET_SALE_BY_RETAILER_ERROR,
    GET_TOTAL_SALE,
    GET_TOTAL_SALE_ERROR,
  } from "./types/actionTypes";

const initalState = {
    TotalSale = [],
    SaleByRetailer = [],
    SaleBetweenDates = []
}; 

export function saleReducer(state = initalState, action) {
    const { payload, type } = action;
  
    switch (type) {
      case GET_SALE_BETWEEN_DATES:
        return {
          ...state,
          getSaleBetweenDates: payload,
        };
      case GET_SALE_BETWEEN_DATES_ERROR:
          return {
              ...state,
              SaleBetweenDates: [],
          }
          case _SALE_BY_RETAILER:
        return {
          ...state,
          getSaleByRetailer: payload,
        };
      case GET_SALE_BY_RETAILER_ERROR:
          return {
              ...state,
              SaleByRetailer: [],
          }
          case GET_TOTAL_SALE:
        return {
          ...state,
          TotalSale: payload,
        };
      case GET_TOTAL_SALE_ERROR:
          return {
              ...state,
              TotalSale: [],
          }
      default:
        return state;
    }
  }