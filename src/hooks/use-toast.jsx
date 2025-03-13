import React, { createContext, useContext, useReducer } from "react";
import { Snackbar, Alert } from "@mui/material";

// MUI için toast limit ve gösterim süresi
const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 3000;

// Toast için aksiyon tipleri
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

// Toast ID'si oluşturma fonksiyonu
let count = 0;
const genId = () => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

// Reducer: Toast ekleme ve silme işlemlerini yönetir
const toastReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return { toasts: [...state.toasts, action.toast].slice(-TOAST_LIMIT) };

    case actionTypes.REMOVE_TOAST:
      return { toasts: state.toasts.filter((t) => t.id !== action.toastId) };

    default:
      return state;
  }
};

// Context API ile toast state yönetimi
const ToastContext = createContext({
  addToast: () => { },
});

export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

  const addToast = (message, severity = "success") => {
    const id = genId();
    dispatch({
      type: actionTypes.ADD_TOAST,
      toast: { id, message, severity },
    });

    // Belirli bir süre sonra tostu kaldır
    setTimeout(() => {
      dispatch({ type: actionTypes.REMOVE_TOAST, toastId: id });
    }, TOAST_REMOVE_DELAY);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={state.toasts} />
    </ToastContext.Provider>
  );
};

// MUI Snackbar ile toast gösterme bileşeni
const ToastContainer = ({ toasts }) => {
  return (
    <>
      {toasts.map((toast) => (
        <Snackbar
          key={toast.id}
          open={toasts.some((t) => t.id === toast.id)}
          autoHideDuration={TOAST_REMOVE_DELAY}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity={toast.severity} variant="filled">
            {toast.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};

// Toast kullanımı için custom hook
export const useToast = () => {
  return useContext(ToastContext);
};
