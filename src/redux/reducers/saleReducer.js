import {
    GET_SALE_BETWEEN_DATES,
    GET_SALE_BETWEEN_DATES_ERROR,
    GET_SALE_BY_RETAILER,
    GET_SALE_BY_RETAILER_ERROR,
    GET_TOTAL_SALE,
    GET_TOTAL_SALE_ERROR,
  } from "./types/actionTypes";

const initalState = {
    getTotalSale = [],
    getSaleByRetailer = [],
    getSaleBetweenDates = []
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
              getSaleBetweenDates: [],
          }
          case GET_SALE_BY_RETAILER:
        return {
          ...state,
          getSaleByRetailer: payload,
        };
      case GET_SALE_BY_RETAILER_ERROR:
          return {
              ...state,
              getSaleByRetailer: [],
          }
          case GET_TOTAL_SALE:
        return {
          ...state,
          getTotalSale: payload,
        };
      case GET_TOTAL_SALE_ERROR:
          return {
              ...state,
              getTotalSale: [],
          }
      default:
        return state;
    }
  }